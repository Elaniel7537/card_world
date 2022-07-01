import React from "react";

import { Layout, Typography } from "antd";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const MainLayout = ({ children }: any) => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Title level={2}>Cards Worlds</Title>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background">{children}</div>
      </Content>
      <Footer>Elver Daniel ©2022 Created by Cards Future.</Footer>
    </Layout>
  );
};

export default MainLayout;
