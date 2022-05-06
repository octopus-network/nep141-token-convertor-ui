import {wallet} from "@/domain/near/global";
import getConfig from "@/domain/near/config";
import {AccountId, ConversionPool, ConvertAction, FtMetaData, NearChangeMethod} from "@/domain/near/types";
import {Near} from "near-api-js";
import {NearGas} from "@/domain/near/NearGas";
import {API_AMOUNT, NearAmount, READABLE_AMOUNT, TRANSFER_AMOUNT} from "@/domain/near/NearAmount";
import {ftGetTokenMetadata} from "@/domain/near/ft/methods";
import BN from "bn.js";
import {Nep145Contract} from "@/domain/near/storage";
import {FTStorageBalance} from "@/domain/near/ft/types";

export class ConvertorContract {
  public static contract_id: string = getConfig().CONVERTOR_CONTRACT_ID;


  public static get_storage_fee_gap_of(account_id: AccountId): Promise<TRANSFER_AMOUNT> {
    return wallet.account().viewFunction(
      ConvertorContract.contract_id,
      "get_storage_fee_gap_of",{
        account_id: account_id
      })
  }


  public static storage_deposit(account_id: AccountId|null, registration_only: boolean|null, deposit_near: API_AMOUNT): NearChangeMethod {
    return new NearChangeMethod(
      ConvertorContract.contract_id,
      "storage_deposit",
      {
        account_id: account_id,
        registration_only: registration_only
      },
      NearGas.TGas(50),
      deposit_near
    )
  }

  public static get_whitelist(): Promise<FtMetaData[]> {
    return wallet.account()
      .viewFunction(ConvertorContract.contract_id, 'get_whitelist')
  }

  public static get_pools(from_index: number,limit: number): Promise<ConversionPool[]> {
    return wallet.account()
      .viewFunction(
        ConvertorContract.contract_id,
        'get_pools',
        {
          from_index: from_index,
          limit: limit
        }
      )
  }

  public static create_pool(
    in_token: AccountId,
    out_token: AccountId,
    is_reversible: boolean,in_token_rate: number,out_token_rate: number): NearChangeMethod {
    console.log("0.1near", NearAmount.near_amount("0.1").toString())
    console.log("0.125near", NearAmount.FT_STORAGE_FOR_REGISTER_AMOUNT.toString())
    console.log("1near", NearAmount.near_amount().toString())
    // debugger
    return new NearChangeMethod(
      this.contract_id,
      "create_pool",
      {
        in_token: in_token,
        out_token: out_token,
        is_reversible: is_reversible,
        in_token_rate:  in_token_rate,
        out_token_rate: out_token_rate
      },
      NearGas.TGas(),
      NearAmount.near_amount()
    )
  }

  public static async deposit_token_into_pool(
    token_id: AccountId,
    token_amount: READABLE_AMOUNT,
    pool_id: number): Promise<NearChangeMethod> {
    let tokenMetadata = await ftGetTokenMetadata(token_id);
    return new NearChangeMethod(
      token_id,
      "ft_transfer_call",
      {
        receiver_id: this.contract_id,
        amount: NearAmount.readable_to_transfer(token_amount,tokenMetadata.decimals),
        msg: JSON.stringify({AddLiquidity: {pool_id: pool_id}})
      },
      NearGas.TGas(),
      NearAmount.ONE_YOCTO_NEAR
    )
  }
  public static async convert(
    pool_id: number,
    in_token_id: AccountId,
    in_token_amount: READABLE_AMOUNT,
  ): Promise<NearChangeMethod> {
    let in_token_decimals = (await ftGetTokenMetadata(in_token_id)).decimals;
    let in_token_transfer_amount = NearAmount.readable_to_transfer(in_token_amount,in_token_decimals);
    let convertAction: ConvertAction = {
      input_token_amount: in_token_transfer_amount,
      input_token_id: in_token_id,
      pool_id: pool_id
    }
    return new NearChangeMethod(
      in_token_id,
      "ft_transfer_call",
      {
        receiver_id: this.contract_id,
        amount: in_token_transfer_amount,
        msg: JSON.stringify({Convert: {convert_action: convertAction}})
      },
      NearGas.TGas(75),
      NearAmount.ONE_YOCTO_NEAR
      )
  }
}
