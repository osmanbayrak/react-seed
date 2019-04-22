import React from 'react';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import { Layout } from 'antd';

const { Content } = Layout;

const GlobalLayout = props => (
  <Layout className="layout">
    <Content>
    <HeaderComponent />
      {props.children}
    </Content>
    <FooterComponent />
  </Layout>
);

export default GlobalLayout;
