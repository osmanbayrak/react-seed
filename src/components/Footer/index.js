import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterComponent = () => (
  <Footer style={{ textAlign: 'center' }}>
    Ant Design ©2018 Created by Ant UED
  </Footer>
);

export default FooterComponent;
