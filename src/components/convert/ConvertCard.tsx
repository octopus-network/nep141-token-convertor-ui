// import {Button, Card, Col, Collapse, Input,  Row, Select, Spin} from "antd";
// import {useEffect, useState} from "react";
//
// const {Option} = Select;
// const {Panel} = Collapse;
//
// import exchangeSrc from '@/assets/exchange.svg';
// import {WhiteListTokenSelector} from "@/components/token/TokenSelector";
// import {AccountId, ConversionPool} from "@/domain/near/types";
// import {ConvertorContract, selectBestPoolForConvert} from "@/domain/near/convertor";
// import BN from "bn.js";
// import {NearAmount, READABLE_AMOUNT} from "@/domain/near/NearAmount";
// import {ftGetTokenMetadata} from "@/domain/near/ft/methods";
// import ex from "umi/dist";
//
// export default function ConvertCard() {
//   const [inAmount, setFromAmount] = useState<string | undefined>(undefined);
//   const [inTokenId, setFromTokenId] = useState<AccountId | undefined>(undefined);
//   const [outTokenId, setToTokenId] = useState<AccountId | undefined>(undefined);
//   const onChangeFromAmount = (amount: string) => {
//     setFromAmount(amount)
//   }
//   const handleChangeFromTokenId = (value: AccountId) => {
//     setFromTokenId(value)
//   }
//   const handleChangeToTokenId = (value: AccountId) => {
//     setToTokenId(value)
//   }
//
//
//   return (<Card title="Convert">
//     <TokenRow onChange={onChangeFromAmount} handleChange={handleChangeFromTokenId}/>
//     <SwapButton/>
//     <TokenRow handleChange={handleChangeToTokenId} onChange={()=>{}}/>
//     <Detail
//       in_token={inTokenId}
//       out_token={outTokenId}
//       in_amount={inAmount}
//       />
//   </Card>)
// }
//
// // function Detail(
// //   {
// //     in_token,
// //     out_token,
// //     in_amount,
// //   }: {
// //     in_token: AccountId | undefined,
// //     out_token: AccountId | undefined,
// //     in_amount: string | undefined,
// //   }) {
// //
// //   if (in_token && out_token && in_amount ) {
// //     const [loading, setLoading] = useState<boolean>(true);
// //     const [bestPoolAndReceived, setBestPoolAndReceived] = useState<[ConversionPool,READABLE_AMOUNT] | null>(null);
// //     useEffect(() => {
// //       let decimal: number=1;
// //       ftGetTokenMetadata(in_token).then(e=>{decimal=e.decimals}).then(()=>
// //         ConvertorContract.select_best_pool(in_token, out_token, in_amount)
// //       ).then((poolAndReceived) => {
// //           if(poolAndReceived) {
// //             console.log("pool and received", poolAndReceived![0],poolAndReceived![1]);
// //             setBestPoolAndReceived([poolAndReceived[0],NearAmount.transfer_to_readable(poolAndReceived[1],decimal)]);
// //           } else {
// //             console.log("no pool can complete convert");
// //             setBestPoolAndReceived(null);
// //           }
// //           setLoading(false);
// //         })
// //
// //     }, [in_token, out_token, in_amount])
// //     return <Spin spinning={loading}>
// //       {bestPoolAndReceived?
// //         <div style={{padding: "10px"}}>
// //           <Row justify={"space-between"}>
// //             <Col>selected pool:</Col>
// //             <Col>{bestPoolAndReceived[0].id}</Col>
// //           </Row>
// //           <Row justify={"space-between"}>
// //             <Col>received:</Col>
// //             <Col>{bestPoolAndReceived[1]}</Col>
// //           </Row>
// //           <Row justify={"center"}>
// //             <Col>
// //               <Button type={"primary"}
// //                       onClick={()=> {ConvertorContract.convert(bestPoolAndReceived[0].id,in_token,in_amount,out_token,bestPoolAndReceived[1]).then(e=>e.call())}}>
// //                 convert
// //               </Button>
// //             </Col>
// //
// //           </Row>
// //         </div>
// //         :<div>no pool satisfied</div>}
// //     </Spin>
// //   } else {
// //     return <div/>
// //   }
// //
// // }
//
//
// export function SwapButton() {
//   return <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
//     <div style={{width: "40%", height: 1, border: "solid #ACC0D8 1px"}}/>
//     <img src={exchangeSrc} alt="svg" style={{width: "30px", cursor: "pointer"}}/>
//     <div style={{width: "40%", height: 1, border: "solid #ACC0D8 1px"}}/>
//   </div>
//
// }
//
// function TokenRow(
//   {
//     onChange,
//     handleChange
//   }:
//     {
//       onChange: (amount: string) => void,
//       handleChange: (value: AccountId) => void
//     }) {
//   return <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
//     <Input style={{width: "60%", marginRight: 6}} onChange={e=>onChange(e.target.value)}/>
//     <div style={{width: "40%"}}>
//       <WhiteListTokenSelector handleChange={handleChange}/>
//     </div>
//   </div>
// }
