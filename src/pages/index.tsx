import {Col, Row} from "antd";
import {PoolList} from "@/components/pools/PoolList";

export default function IndexPage() {
  return <Row>
    <Col span={12} offset={6}>
      <PoolList/>

    </Col>
  </Row>

}
