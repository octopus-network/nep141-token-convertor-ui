import {
  Action,
  createTransaction,
  functionCall,
} from 'near-api-js/lib/transaction';
import { near, wallet } from '@/domain/near/global';
import { FinalExecutionStatus } from 'near-api-js/lib/providers';
import { AccountId } from '@/domain/near/types';
import getConfig from '@/domain/near/config';
import { baseDecode } from 'borsh';
import { PublicKey } from 'near-api-js/lib/utils';
import { NearGas } from '@/domain/near/NearGas';
import { NearAmount, READABLE_AMOUNT } from '@/domain/near/NearAmount';
import { Nep141Contract } from '@/domain/near/ft/methods';
import { FTStorageBalance } from '@/domain/near/ft/types';
import { ConvertorContract } from '@/domain/near/convertor';

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
    account_id: AccountId = wallet.getAccountId(),
  ): Promise<T> {
    return near.connection.provider
      .txStatus(tx_hash, account_id)
      .then((e) => {
        if ((e.status as FinalExecutionStatus).SuccessValue !== undefined) {
          let decodedValue: string = Buffer.from(
            (e.status as FinalExecutionStatus).SuccessValue!,
            'base64',
          ).toString();
          return JSON.parse(decodedValue) as T;
        } else {
          return Promise.reject(
            `Fail to parse ${account_id} ${tx_hash} error,FinalExecutionOutcome is ${e}`,
          );
        }
      })
      .catch((e: any) => Promise.reject(`Invoke error, ${e}`));
  }

  private async _createTransaction(
    receiverId: string,
    actions: Action[],
    nonceOffset: number = 1,
  ) {
    let connectedAccount = wallet._connectedAccount;
    let localKey = await connectedAccount.connection.signer.getPublicKey(
      connectedAccount.accountId,
      connectedAccount.connection.networkId,
    );
    let accessKey = await connectedAccount.accessKeyForTransaction(
      receiverId,
      actions,
      localKey,
    );
    if (!accessKey) {
      throw new Error(
        `Cannot find matching key for transaction sent to ${receiverId}`,
      );
    }

    const block = await connectedAccount.connection.provider.block({
      finality: 'final',
    });
    const blockHash = baseDecode(block.header.hash);

    const publicKey = PublicKey.from(accessKey.public_key);
    const nonce = accessKey.access_key.nonce + nonceOffset;

    return createTransaction(
      connectedAccount.accountId,
      publicKey,
      receiverId,
      nonce,
      actions,
      blockHash,
    );
  }

  public async execute(callbackUrl?: string) {
    let transactions = await Promise.all(
      this.transaction_infos.map(
        (ts) => this._createTransaction(ts.receiverId, ts.actions),
        // wallet.createTransaction({
        //   actions: ts.actions,
        //   receiverId: ts.receiverId,
        // })
      ),
    );
    return wallet.requestSignTransactions({ transactions, callbackUrl });
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
    transactions: NearTransactionInfo[],
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
    registrationOnly = false,
  ): Action {
    return functionCall(
      'storage_deposit',
      {
        account_id: account_id,
        registration_only: registrationOnly,
      },
      NearGas.TGas(20),
      NearAmount.FT_STORAGE_FOR_REGISTER_AMOUNT,
    );
  }
}

export abstract class NearTransactionBooks {
  static async check_storage_convert(
    convertor: AccountId = wallet.getAccountId(),
    out_token: AccountId,
    pool_id: number,
    in_token_id: AccountId,
    in_token_amount: READABLE_AMOUNT,
  ): Promise<NearTransaction> {
    let out_token_contract = new Nep141Contract(out_token);
    let out_token_storage_balance: FTStorageBalance | null =
      await out_token_contract.storage_balance_of(convertor);

    let transaction = new NearTransaction();

    if (!out_token_storage_balance || out_token_storage_balance.total == '0') {
      transaction.add_action(
        out_token,
        out_token_contract.storage_deposit(convertor, null).toAction(),
      );
    }
    let convertor_storage_fee_gap =
      await ConvertorContract.get_storage_fee_gap_of(convertor);
    if (convertor_storage_fee_gap != '0') {
      transaction.add_action(
        ConvertorContract.contract_id,
        ConvertorContract.storage_deposit(
          convertor,
          null,
          NearAmount.near_transfer_to_api(convertor_storage_fee_gap),
        ).toAction(),
      );
    }

    let convert_action = (
      await ConvertorContract.convert(pool_id, in_token_id, in_token_amount)
    ).toAction();
    transaction.add_action(in_token_id, convert_action);
    return transaction;
  }

  static withdraw_delete_pool(
    pool_id: number,
    in_token_id: AccountId,
    out_token_id: AccountId,
  ): NearTransaction {
    return new NearTransaction().add_transaction({
      actions: [
        ConvertorContract.withdraw_token_in_pool(
          pool_id,
          in_token_id,
        ).toAction(),
        ConvertorContract.withdraw_token_in_pool(
          pool_id,
          out_token_id,
        ).toAction(),
        ConvertorContract.delete_pool(pool_id).toAction(),
      ],
      receiverId: config.CONVERTOR_CONTRACT_ID,
    });
  }
}
