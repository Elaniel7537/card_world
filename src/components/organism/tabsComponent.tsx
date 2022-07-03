import React from "react";
import { Empty, Row, Tabs } from "antd";
//components
import CardComponent from "@components/organism/cardComponent";
//utils
import { CategoryEnum } from "@utils/enum";
//store & slice
import { useAppSelector } from "@app/hooks";

const { TabPane } = Tabs;

const TabsComponent: React.FC<any> = () => {
  const { listCategory } = useAppSelector((state) => state.cardlist);

  return (
    <Tabs defaultActiveKey="1" centered>
      {[CategoryEnum.HQ, CategoryEnum.CHARACTER, CategoryEnum.TECHNOLOGY]?.map(
        (item, key) => {
          return (
            <TabPane
              tab={item === CategoryEnum.HQ ? "Haod Quarters" : item}
              key={key + 1}
            >
              <Row className="flexbox">
                {listCategory?.[item]?.map((resp: any, index: any) => {
                  return (
                    <CardComponent
                      detailsCard={resp}
                      category={item}
                      key={index}
                    />
                  );
                })}
                {!listCategory?.[item]?.length && (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
              </Row>
            </TabPane>
          );
        }
      )}
    </Tabs>
  );
};

export default TabsComponent;
