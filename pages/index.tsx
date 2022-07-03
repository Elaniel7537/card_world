import type { NextPage } from "next";
import { useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Col, Divider, Row, Typography } from "antd";
//components
import FormComponent from "@components/organism/formComponent";
import TabsComponent from "@components/organism/tabsComponent";
import ModalFormComponent from "@components/organism/modalFormComponent";
//utils
import { setListCategory } from "@utils/functions";
import { ServePropsInterface } from "@components/organism/ts/interfaces";
//store & slice
import { useAppDispatch } from "@app/hooks";
import { setListCards } from "@features/cardSlice";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setListCards(listCategory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row gutter={[16, 16]} className="home-page">
      <Col span={24} className="display-mobile">
        <ModalFormComponent />
        <Divider />
      </Col>
      <Col xs={24} lg={5} xl={4} className="display-pc">
        <div className=" animate__animated animate__rubberBand">
          <Title level={4}>Filtros</Title>
        </div>
        <Divider />
        <FormComponent inModal={false} />
      </Col>

      <Col xs={24} lg={19} xl={20}>
        <TabsComponent />
      </Col>
    </Row>
  );
};

export default Home;
