import {wallet} from "@/domain/near/global";
import getConfig from "@/domain/near/config";
import {AccountId, NearChangeMethod} from "@/domain/near/types";

export class ConvertorContract {
  public static contract_id: string = getConfig().CONVERTOR_CONTRACT_ID;

  public static get_whitelist(): Promise<string[]> {
    return wallet.account()
      .viewFunction(ConvertorContract.contract_id,'get_whitelist')
  }

  public static extend_whitelisted_tokens(tokens: AccountId[]): NearChangeMethod {
    return new NearChangeMethod(
      this.contract_id,
      "extend_whitelisted_tokens",  {})
  }
}
