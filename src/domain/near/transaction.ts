import {Action, createTransaction, functionCall,} from "near-api-js/lib/transaction";
import {near, wallet} from "@/domain/near/global";
import {FinalExecutionStatus} from "near-api-js/lib/providers";
import {AccountId} from "@/domain/near/types";
import getConfig from "@/domain/near/config";
import {baseDecode} from "borsh";
import {PublicKey} from "near-api-js/lib/utils";
import {NearGas} from "@/domain/near/NearGas";
import {NearAmount} from "@/domain/near/NearAmount";

const config = getConfig();
export interface NearViewFunctionInfo {
  methodName: string;
  args?: object;
}

export interface NearFunctionCallInfo extends NearViewFunctionInfo {
  gas?: string;
  amount?: string;
}

export type NearActionInfo = NearFunctionCallInfo;

export interface NearTransactionInfo {
  receiverId: string;
  actions: Action[];
}

export class NearTransaction {
  transaction_infos: NearTransactionInfo[] = [];

  constructor() {}

  public static async parseTxOutcome<T>(
    tx_hash: string,
    account_id: AccountId = wallet.getAccountId()
  ): Promise<T> {
    return near.connection.provider
      .txStatus(tx_hash, account_id)
      .then((e) => {
        if ((e.status as FinalExecutionStatus).SuccessValue !== undefined) {
          let decodedValue: string = Buffer.from(
            (e.status as FinalExecutionStatus).SuccessValue!,
            "base64"
          ).toString();
          return JSON.parse(decodedValue) as T;
        } else {
          return Promise.reject(
            `Fail to parse ${account_id} ${tx_hash} error,FinalExecutionOutcome is ${e}`
          );
        }
      })
      .catch((e: any) => Promise.reject(`Invoke error, ${e}`));
  }

  private async _createTransaction(
    receiverId: string,
    actions: Action[],
    nonceOffset: number=1
  ) {
    let connectedAccount = wallet._connectedAccount;
    let localKey = await connectedAccount.connection.signer.getPublicKey(connectedAccount.accountId,connectedAccount.connection.networkId);
    let accessKey = await connectedAccount.accessKeyForTransaction(
      receiverId,
      actions,
      localKey
    );
    if (!accessKey) {
      throw new Error(
        `Cannot find matching key for transaction sent to ${receiverId}`
      );
    }

    const block = await connectedAccount.connection.provider.block({ finality: "final" });
    const blockHash = baseDecode(block.header.hash);

    const publicKey = PublicKey.from(accessKey.public_key);
    const nonce = accessKey.access_key.nonce + nonceOffset;

    return createTransaction(
      connectedAccount.accountId,
      publicKey,
      receiverId,
      nonce,
      actions,
      blockHash
    );
  }


  public async execute(callbackUrl?: string) {
    let transactions = await Promise.all(
      this.transaction_infos.map((ts) =>
        this._createTransaction(ts.receiverId,ts.actions)
        // wallet.createTransaction({
        //   actions: ts.actions,
        //   receiverId: ts.receiverId,
        // })
      )
    );
    return wallet.requestSignTransactions({transactions, callbackUrl });
  }

  public add_action(receiver_id: string, action: Action): NearTransaction {
    this.transaction_infos.push({ receiverId: receiver_id, actions: [action] });
    return this;
  }

  public add_actions(receiver_id: string, actions: Action[]): NearTransaction {
    this.transaction_infos.push({ receiverId: receiver_id, actions: actions });
    return this;
  }

  public add_transactions(
    transactions: NearTransactionInfo[]
  ): NearTransaction {
    this.transaction_infos = [...this.transaction_infos, ...transactions];
    return this;
  }

  public add_transaction(transaction: NearTransactionInfo): NearTransaction {
    this.transaction_infos.push(transaction);
    return this;
  }
}

export class NearActions {
  static ft_deposit_action(
    account_id: AccountId = wallet.getAccountId(),
    registrationOnly = false
  ): Action {
    return functionCall(
      "storage_deposit",
      {
        account_id: account_id,
        registration_only: registrationOnly,
      },
      NearGas.TGas(20),
      NearAmount.FT_STORAGE_FOR_REGISTER_AMOUNT
    );
  }
}

export abstract class NearTransactionInfoFactory {
}
