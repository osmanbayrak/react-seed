import './index.css';
import React from 'react';
import { Layout, Menu, Breadcrumb, Carousel, Icon, Button } from 'antd';
import first from '../../assets/first.JPG'
import second from '../../assets/second.JPG'
import third from '../../assets/third.JPG'
import fourth from '../../assets/fourth.JPG'
import fifth from '../../assets/fifth.jpg'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class HomePage extends React.Component {

  render() {
    return (
      <h1>Hello<Icon type="user" /><Button type="primary">Button</Button></h1>
    );
  }
}



export default HomePage;
