import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import './layout.css';
import logo from './assets/logo.png';

const { Header, Sider, Content, Footer } = Layout;

class GlobalLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={256}
        >
          <div className="logo">
            <a>
              <img src={logo} />
              <span className="logo-title">ACCOUNT</span>
            </a>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Osman Bayrak kopi rayt bilmemne
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default GlobalLayout;

