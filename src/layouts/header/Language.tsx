import {Select} from "antd";

const { Option } = Select;
type LanguageProps = {
}
function Language(props: LanguageProps, handleChange: (value: string)=>void) {
  return (
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="english">English</Option>
      <Option value="chinese">中文</Option>
    </Select>
  )
}
