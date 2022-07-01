import { Col, Row, Tabs } from "antd";
import type { NextPage } from "next";
//components
import CardComponent from "@components/organism/cardComponent";

const { TabPane } = Tabs;

const Home: NextPage = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Haod Quarters" key="1">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={3} lg={4} xl={6}>
            <CardComponent />
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="Character" key="2">
        Character
      </TabPane>
      <TabPane tab="Technology" key="3">
        Technology
      </TabPane>
    </Tabs>
  );
};

export default Home;
