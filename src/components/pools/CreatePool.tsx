import {Button, Col, Input, Row, Switch} from "antd";
import {WhiteListTokenSelector} from "@/components/token/TokenSelector";
import {useState} from "react";
import {TokenMetadata} from "@/domain/near/ft/types";
import arrowSrc from '@/assets/right_arrow.svg';
import {ConvertorContract} from "@/domain/near/convertor";
import {AccountId} from "@/domain/near/types";

export function CreatePool() {
  const [selectFromToken, setSelectFromToken] = useState<AccountId|undefined>(undefined);
  const [selectToToken, setSelectToToken] = useState<AccountId|undefined>(undefined);
  const [isReversible, setIsReversible] = useState<boolean>(false);
  const [inTokenRatio, setInTokenRatio] = useState<string>("");
  const [outTokenRatio, settOutTokenRatio] = useState<string>("");

  const create= async ()=> {
    console.log("create pool:");
    console.log("isReversible", isReversible);
    console.log("from_token", selectFromToken);
    console.log("to_token", selectToToken);
    await ConvertorContract.create_pool(selectFromToken!,selectToToken!,isReversible,Number(inTokenRatio),Number(outTokenRatio)).call()
  }

  return <div style={{border: "solid #ACC0D8 3px", display: "flex", flexDirection: "column" ,alignItems: "center", padding: "20px"}}>
    <h1>Create New Pool</h1>
    <div style={{display: "flex", alignItems: "center",margin: "20px"}}>
      <div style={{width: "100px"}}>
        <WhiteListTokenSelector handleChange={(e)=>{setSelectFromToken(e)}} />
      </div>
      <img style={{width: "20px", height: "20px", margin: "10px"}} src={arrowSrc} alt={"svg"}/>
      <div style={{width: "100px"}}>
        <WhiteListTokenSelector handleChange={(e)=>{setSelectToToken(e)}} />
      </div>
    </div>
    <div>
      <span>is reversible: </span>
      <Switch checkedChildren={"true"} unCheckedChildren={"false"} defaultChecked={false} onChange={checked => {setIsReversible(checked)}}/>
    </div>
    <Row style={{marginTop: "5px"}}>ratio:</Row>
    <Row justify={"center"} align={"middle"} style={{margin: "10px"}}>
      <Col>
        <Input placeholder={"input"} onChange={(e)=>{setInTokenRatio(e.target.value)}} />
      </Col>
      <Col style={{margin: "2px"}}>:</Col>
      <Col>
        <Input placeholder={"input"} onChange={(e)=>{settOutTokenRatio(e.target.value)}} />
      </Col>
    </Row>
    <Button style={{margin: "10px"}} type={"primary"} onClick={create}>create</Button>
  </div>
}
