import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header } = Layout;

class HeaderComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            Home <Icon type="home" />
          </Menu.Item>
          <Menu.Item key="2">
            Brands <Icon type="appstore" />
          </Menu.Item>
          <Menu.Item key="3">
            Gallery <Icon type="picture" />
          </Menu.Item>
          <Menu.Item key="4">
            Online Booking <Icon type="form" />
          </Menu.Item>
          <Menu.Item key="5">
            Contact Us <Icon type="phone" />
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderComponent;
