import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Aux from './Aux';
import { Layout as AntLayout, Menu, Icon } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = AntLayout;

const Trigger = styled.div`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
}
`;

class Layout extends Component {
  state = {
    visible: false,
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render () {
    return (
      <Aux>
        <AntLayout>
          <Sider
            trigger={null}
            collapsedWidth="0"
            breakpoint="md"
            width="120"
            collapsible
            onCollapse={(collapsed, type) => { }}
            collapsed={this.state.collapsed}>
              <Link to='/'><span>HI</span></Link>
          </Sider>

        <AntLayout style={{ height:"100vh" }}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Trigger>
              <Icon
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}/>
              </Trigger>
          </Header>
          <Content style={{ textAlign: 'center' }}>
            <main>
              {this.props.children}
            </main>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2018
          </Footer>
        </AntLayout>
      </AntLayout>
    </Aux>
    )
  }
}

export default Layout
