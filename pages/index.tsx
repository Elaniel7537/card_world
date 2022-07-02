import type { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import { Col, Row, Tabs } from "antd";
//components
import CardComponent from "@components/organism/cardComponent";
//utils
import { setListCategory } from "@utils/functions";
import { CategoryEnum } from "@utils/enum";

const { TabPane } = Tabs;

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

const Home: NextPage = ({ listCategory }: any) => {
  return (
    <Tabs defaultActiveKey="1" centered>
      {[CategoryEnum.HQ, CategoryEnum.CHARACTER, CategoryEnum.TECHNOLOGY]?.map(
        (item, key) => {
          return (
            <TabPane
              tab={item === CategoryEnum.HQ ? "Haod Quarters" : item}
              key={key + 1}
            >
              <Row gutter={[16, 16]}>
                {listCategory?.[item].map((resp: any, index: any) => {
                  return (
                    <Col xs={24} md={3} lg={6} xl={8} key={index}>
                      <CardComponent detailsCard={resp} />
                    </Col>
                  );
                })}
              </Row>
            </TabPane>
          );
        }
      )}
    </Tabs>
  );
};

export default Home;
