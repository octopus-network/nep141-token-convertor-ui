import {AccountId, NearChangeMethod} from "@/domain/near/types";
import {NearGas} from "@/domain/near/NearGas";
import {API_AMOUNT, NearAmount, TRANSFER_AMOUNT} from "@/domain/near/NearAmount";
import {wallet} from "@/domain/near/global";
import {FTStorageBalance} from "@/domain/near/ft/types";

export class Nep145Contract {
  protected contract_id: AccountId

  constructor(contract_id: AccountId) {
    this.contract_id = contract_id
  }

  public storage_balance_of(account_id: AccountId): Promise<FTStorageBalance | null> {
    return wallet.account()
      .viewFunction(
        this.contract_id,
        'storage_balance_of',
        {
          account_id: account_id
        }
      )
  }

  public storage_deposit(account_id: AccountId|null, registration_only: boolean|null, deposit_near: API_AMOUNT): NearChangeMethod {
    return new NearChangeMethod(
      this.contract_id,
      "storage_deposit",
      {
        account_id: account_id,
        registration_only: registration_only
      },
      NearGas.TGas(50),
      deposit_near
    )
  }
}
