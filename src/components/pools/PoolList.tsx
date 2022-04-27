import {Col, Input, InputNumber, List, Modal, Pagination, Row, Button, Radio, Empty, Divider} from "antd";
import {useConversionPoolList} from "@/hooks/convertor";
import {AccountId, ConversionPool} from "@/domain/near/types";
import enterArrowSrc from '@/assets/enter_arrow.svg';
import {useState} from "react";
import {NearTransactionInfoFactory} from "@/domain/near/transaction";
import {ConvertorContract} from "@/domain/near/convertor";
import {NearAmount, READABLE_AMOUNT} from "@/domain/near/NearAmount";
import {ftGetTokenMetadata} from "@/domain/near/ft/methods";
import {CreatePool } from "@/components/pools/CreatePool";
import {PoolDetail} from "@/components/pools/PoolDetail";

// function

function ListItem({pool}: {pool: ConversionPool|undefined}) {
  const border = pool?"solid #ACC0D8 1px":"";

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [depositToken, setDepositToken] = useState<AccountId>(pool?pool.out_token:'');
  const [depositAmount, setDepositAmount] = useState<READABLE_AMOUNT|undefined>(undefined);
  const [inTokenReadableBalance,setInTokenReadableBalance] = useState<string>('');
  const [outTokenReadableBalance,setOutTokenReadableBalance] = useState<string>('');
  if(pool) {
    ftGetTokenMetadata(pool.in_token)
      .then((e)=>{
        setInTokenReadableBalance(NearAmount.transfer_to_readable(pool.in_token_balance,e.decimals))
        setOutTokenReadableBalance(NearAmount.transfer_to_readable(pool.out_token_balance,e.decimals))
      })
  }

  return <div style={{width: "100%", height: "auto",border: `${border}`, borderLeft: "none", borderRight: "none"}}>
    <Row align="middle" onClick={event => {setIsModalVisible(true)}}>
      <Col span={1}>{pool?pool.id: "#"}</Col>
      <Col span={10}>{pool?(`${pool.in_token} ${pool.reversible?'↔':'->' } ${pool.out_token}`): "direction"}</Col>
      <Col span={6}>{pool?`${pool.in_token}: ${inTokenReadableBalance}\n${pool.out_token}: ${outTokenReadableBalance}`: "Balance"}</Col>
      <Col span={3}>{pool?`${`${pool.in_token_rate}:${pool.out_token_rate}`}`: "ratio"}</Col>
      {pool?(<Col span={4}>
        <img style={{width: "50%", cursor: "pointer"}} src={enterArrowSrc} alt={"svg"}/>
      </Col>):null}
    </Row>
    {pool?
      (<Modal
          title={`Deposit ${depositToken} into pool #${pool.id}`}
          visible={isModalVisible}
          footer={null}
          onOk={()=>ConvertorContract.deposit_token_into_pool(depositToken,depositAmount!,pool.id).then(e=>e.call())}
          onCancel={()=>setIsModalVisible(false)}>
          <PoolDetail pool={pool}/>
          <Divider/>
        {pool.reversible?(
          <div>
            <span>deposit</span>
            <Radio.Group value={depositToken} onChange={(e)=>{setDepositToken(e.target.value)}}>
              <Radio value={pool.in_token}>{pool.in_token}</Radio>
              <Radio value={pool.out_token}>{pool.out_token}</Radio>
            </Radio.Group>
          </div>):(
           <span>deposit {pool.out_token}:</span>
        )}
          <Input onChange={(e)=>{setDepositAmount(e.target.value)}}/>
          <Row justify={"center"} style={{margin: "10px"}}>
            <Col>
              <Button type={"primary"} onClick={()=>ConvertorContract.deposit_token_into_pool(depositToken,depositAmount!,pool.id).then(e=>e.call())}>deposit</Button>
            </Col>
          </Row>
        </Modal>
      )
      :
      <div/>}
  </div>
}

export function PoolList() {
  const pools = useConversionPoolList();
  const [isCreateModalVisible, setIsCreateModalVisible] = useState<boolean>(false);

  return <div>
    {
      (pools&&pools.length>0)?
        (
          <div>
            <ListItem pool={undefined}/>
            {pools.map(e=><ListItem key={e.id} pool={e}/>)}
          </div>
        ):(
          <Empty style={{margin: "10px"}} description={"No pool"}/>
        )
    }
    <button onClick={()=>{setIsCreateModalVisible(true)}} style={{width: "100%", marginTop: "20px",borderRadius: "5px" ,opacity: 0.5, cursor: "pointer"}}>create pool</button>
    <Modal
      onCancel={()=>setIsCreateModalVisible(false)}
      visible={isCreateModalVisible}
      footer={null}
    >
      <CreatePool/>
    </Modal>
  </div>
}

