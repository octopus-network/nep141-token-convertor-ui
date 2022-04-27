import {useEffect, useState} from "react";
import {TokenMetadata} from "@/domain/near/ft/types";
import {ConvertorContract} from "@/domain/near/convertor";
import {ftGetTokenMetadata} from "@/domain/near/ft/methods";
import {AccountId, ConversionPool } from "@/domain/near/types";

export const useTokenMetadata= (tokenId: AccountId): TokenMetadata|undefined => {
  const [token, setToken] = useState<TokenMetadata|undefined>(undefined)
  useEffect(()=> {
    ftGetTokenMetadata(tokenId).then((e)=>setToken(e))
  },[])
  return token;
}


export const useWhitelistTokens = (): TokenMetadata[] => {
  const [tokens, setTokens] = useState<TokenMetadata[]>([]);
  useEffect(() => {
    ConvertorContract.get_whitelist()
      .then((token_ids)=> {
        return Promise.all(
          token_ids.map((id)=>ftGetTokenMetadata(id.token_id))
        )
      }).then(setTokens)
  },[]);
  return tokens;
}

export const useConversionPoolList = (): ConversionPool[] => {
  const [pools, setPools] = useState<ConversionPool[]>([]);
  useEffect(()=> {
    // limit=100 just for test
    ConvertorContract.get_pools(0,100).then(setPools)
  },[])
  return pools;
}
