import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterComponent = () => (
  <Footer style={{ textAlign: 'center', background: '#d2d7e0', fontSize: '16px', color: 'black' }}>
    Copy Right ©2018 Osman Bayrak
  </Footer>
);

export default FooterComponent;
