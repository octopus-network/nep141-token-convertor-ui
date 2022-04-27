import getConfig from "@/domain/near/config";
import {keyStores, Near, WalletConnection} from "near-api-js";
import {Action, createTransaction} from "near-api-js/lib/transaction";
import {baseDecode} from "borsh";
import {PublicKey} from "near-api-js/lib/utils";


export const config = getConfig();
export const near = new Near({
  headers: {},
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  ...config
});
export const wallet = new WalletConnection(near, config.CONVERTOR_CONTRACT_ID!);
