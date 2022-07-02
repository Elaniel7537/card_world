import type { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import { Col, Divider, Row, Typography } from "antd";
//components
import FormComponent from "@components/organism/formComponent";
import TabsComponent from "@components/organism/tabsComponent";
import ModalFormComponent from "@components/organism/modalFormComponent";
//utils
import { setListCategory } from "@utils/functions";
import { ServePropsInterface } from "@components/organism/ts/interfaces";

const { Title } = Typography;

//request serve
export const getServerSideProps = async () => {
  const response = await fetch("https://pastebin.com/raw/sv7YB2Wq");
  const listCards = await response.json();

  const listCategory = await setListCategory(listCards);

  return {
    props: {
      listCategory,
    },
  };
};

const Home: NextPage<ServePropsInterface> = ({ listCategory }) => {
  return (
    <Row gutter={[16, 16]} className="home-page">
      <Col span={24} className="display-mobile">
        <ModalFormComponent />
        <Divider />
      </Col>
      <Col xs={24} lg={5} xl={4} className="display-pc">
        <Title level={4}>Filtros</Title>
        <Divider />
        <FormComponent />
      </Col>

      <Col xs={24} lg={19} xl={20}>
        <TabsComponent listCategory={listCategory} />
      </Col>
    </Row>
  );
};

export default Home;
