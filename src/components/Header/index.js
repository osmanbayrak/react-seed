import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header } = Layout;

class HeaderComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Header style={{background: 'transparent'}}>
        <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderComponent
