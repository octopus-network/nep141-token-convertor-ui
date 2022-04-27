import BN from "bn.js";

export type AmountOfTGas = number;
// https://docs.near.org/docs/concepts/gas#costs-of-complex-actions
export class NearGas {
  //TGas as unit,
  // 1TGas = 1e12gas = 0.0001 Ⓝ in 2021/12/3,
  // 1TGas ≈ 1 millisecond of "compute" time
  public static ONE_TERA_GAS = "1000000000000";
  public static MAX_GAS = NearGas.TGas();
  public static TGas(amount_of_tgas: number = 300): BN {
    return new BN(this.ONE_TERA_GAS).muln(amount_of_tgas);
  }
}

