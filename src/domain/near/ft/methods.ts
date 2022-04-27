import {wallet} from "@/domain/near/global";
import {TokenMetadata} from "@/domain/near/ft/types";

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
