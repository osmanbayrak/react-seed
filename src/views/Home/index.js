import './index.css';
import React from 'react';
import { Layout, Menu, Breadcrumb, Carousel } from 'antd';
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
      <Carousel autoplay arrows={true} draggable={true}>
        <img src={first} />
        <img src={second} />
        <img src={third} />
        <img src={fourth} />
        <img src={fifth} />
      </Carousel>
    );
  }
}



export default HomePage;
