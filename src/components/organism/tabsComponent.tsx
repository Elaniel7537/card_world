import React from "react";
import { Row, Tabs } from "antd";
//components
import CardComponent from "@components/organism/cardComponent";
//utils
import { CategoryEnum } from "@utils/enum";
import { ServePropsInterface } from "./ts/interfaces";

const { TabPane } = Tabs;

const TabsComponent: React.FC<ServePropsInterface> = ({ listCategory }) => {
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
              </Row>
            </TabPane>
          );
        }
      )}
    </Tabs>
  );
};

export default TabsComponent;
