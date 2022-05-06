import BN from "bn.js";
import { utils } from "near-api-js";

// display when transfer token amount  eg: 1 near display in TRANSFERABLE_AMOUNT: 1000000000000000000000000
export type TRANSFER_AMOUNT = string;
// when display to human
export type READABLE_AMOUNT = string;
// when call near-js-api
export type API_AMOUNT = BN;

export class NearAmount {
  public static ONE_YOCTO_NEAR_READABLE = "0.000000000000000000000001";
  public static ONE_YOCTO_NEAR = NearAmount.yocto_near_amount();
  public static FT_STORAGE_FOR_REGISTER_AMOUNT = NearAmount.near_amount("0.00125");
  public static NON_DEPOSIT = NearAmount.yocto_near_amount(0);

  public static yocto_near_amount(amount_of_yocto: number = 1): API_AMOUNT {
    return new BN(utils.format.parseNearAmount(this.ONE_YOCTO_NEAR_READABLE)!).muln(
      amount_of_yocto
    );
  }

  public static near_amount(amount_of_near: READABLE_AMOUNT = "1"): API_AMOUNT {
    return new BN(utils.format.parseNearAmount(amount_of_near)!);
  }

  public static near_transfer_to_api(amount: TRANSFER_AMOUNT = "1"): API_AMOUNT {
    return new BN(amount)
  }

  public static readable_to_transfer(amount: READABLE_AMOUNT, decimals: number): TRANSFER_AMOUNT {
    if (decimals === null || decimals === undefined) return amount;
    const [wholePart, fracPart = ""] = amount.split(".");

    return `${wholePart}${fracPart.padEnd(decimals, "0").slice(0, decimals)}`
      .replace(/^0+/, "")
      .padStart(1, "0");
  }

  public static transfer_to_readable(amount: TRANSFER_AMOUNT, decimals: number): READABLE_AMOUNT {
    if (!decimals) return amount;

    const wholeStr = amount.substring(0, amount.length - decimals) || "0";
    const fractionStr = amount
      .substring(amount.length - decimals)
      .padStart(decimals, "0")
      .substring(0, decimals);

    return `${wholeStr}.${fractionStr}`.replace(/\.?0+$/, "");
  }

}
