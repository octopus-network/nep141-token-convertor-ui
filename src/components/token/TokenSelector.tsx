import {Select} from "antd";
import {TokenMetadata} from "@/domain/near/ft/types";
import {useWhitelistTokens} from "@/hooks/convertor";
import {AccountId} from "@/domain/near/types";

const {Option} = Select;

type TokenSelectorProps = {
  list: TokenMetadata[],
  handleChange: (token: string) => void
}

function TokenSelector(
  {
    list,
    handleChange
  }: {
    list: TokenMetadata[],
    handleChange: (token: AccountId ) => void
  }) {
  return <Select onChange={handleChange} style={{width: "100%"}}>
    {list.map(e => <Option key={e.id} value={e.id}>{e.symbol}</Option>)}
  </Select>
}

export function WhiteListTokenSelector(
  {
    handleChange
  }: {
    handleChange: (value: AccountId ) => void
  }) {
  const tokens = useWhitelistTokens();
  return <TokenSelector list={tokens} handleChange={handleChange}/>
}
