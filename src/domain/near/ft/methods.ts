import {wallet} from "@/domain/near/global";
import {TokenMetadata} from "@/domain/near/ft/types";
import {AccountId, NearChangeMethod} from "@/domain/near/types";
import {Nep145Contract} from "@/domain/near/storage";
import {functionCall} from "near-api-js/lib/transaction";
import {NearGas} from "@/domain/near/NearGas";
import {API_AMOUNT, NearAmount} from "@/domain/near/NearAmount";

const cache = new Map<string,TokenMetadata>();
export const ftGetTokenMetadata = async (
  id: string
): Promise<TokenMetadata> => {
  if(!cache.get(id)) {
    let metadata = await wallet.account().viewFunction(id, "ft_metadata");
    cache.set(id,{id, ...metadata})
  }
  return Promise.resolve(cache.get(id)!)
};

export class Nep141Contract extends Nep145Contract{
  constructor(contract_id: AccountId) {
    super(contract_id)
    this.contract_id = contract_id;
  }

  public storage_deposit(account_id: AccountId|null, registration_only: boolean|null): NearChangeMethod {
    return new NearChangeMethod(
      this.contract_id,
      "storage_deposit",
      {
        account_id: account_id,
        registration_only: registration_only
      },
      NearGas.TGas(50),
      NearAmount.FT_STORAGE_FOR_REGISTER_AMOUNT
    )
  }

  public ft_transfer_call(
    receiver_id: string,
    amount: string,
    memo: string|null,
    msg: string
  ) {
    return functionCall(
      "ft_transfer_call",
      {
        receiver_id: receiver_id,
        amount: amount,
        memo: memo,
        msg: msg
      },
      NearGas.TGas(100),
      NearAmount.FT_STORAGE_FOR_REGISTER_AMOUNT
    );
  }

}
