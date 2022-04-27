import {NearGas} from "@/domain/near/NearGas";
import BN from "bn.js";
import {API_AMOUNT, NearAmount, TRANSFER_AMOUNT} from "@/domain/near/NearAmount";
import {wallet} from "@/domain/near/global";
import {Action, functionCall} from "near-api-js/lib/transaction";
import {FinalExecutionOutcome} from "near-api-js/lib/providers";
import {Account} from "near-api-js";
import {TokenMetadata} from "@/domain/near/ft/types";

export type AccountId = string
export type Amount = string

export class NearChangeMethod {
  private readonly contract_id: string;
  private readonly method: string;
  private readonly args: object;
  private readonly gas: BN;
  private readonly deposit: API_AMOUNT;

  constructor(contract_id: string,
              method: string,
              args: object,
              gas: BN = NearGas.TGas(),
              deposit: API_AMOUNT = NearAmount.NON_DEPOSIT  ) {
    console.log("new NearChangeMethod arg: ", args);
    this.contract_id = contract_id;
    this.method = method;
    this.args = args;
    this.gas = gas;
    this.deposit = deposit;
  }

  call(): Promise<FinalExecutionOutcome> {
    return wallet.account().functionCall({
      contractId: this.contract_id,
      methodName: this.method,
      args: {...this.args},
      gas: this.gas,
      attachedDeposit: this.deposit})
  }

  toAction(): Action {
    return functionCall(this.method,this.args,this.gas,this.deposit)
  }
}

export type FtMetaData = {
  token_id: AccountId,
  decimals: number
}

export interface ConversionPool {
  id: number,
  in_token: AccountId,
  in_token_balance: TRANSFER_AMOUNT,
  out_token: AccountId,
  out_token_balance: TRANSFER_AMOUNT,
  reversible: boolean,
  in_token_rate: number,
  out_token_rate: number,
}

export type AddLiquidityMessage = {
  pool_id: number
}

export type ConvertAction = {
  pool_id: number,
  input_token_id: AccountId,
  input_token_amount: TRANSFER_AMOUNT,
}
