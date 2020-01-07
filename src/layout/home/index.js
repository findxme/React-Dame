import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Link from 'umi/link';

import Left from './Left';
import Head from './Head'

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };




  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (


      <Layout>

        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
          collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
        >
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
          <Left></Left>

        </Sider>
        <Layout style={{ marginLeft: 200, zIndex: 1 }}>
          <Header style={{ position: '', background: '#fff', padding: 0 }} >
            <Head ></Head>

          </Header>
          <Content style={{ margin: '50px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>find me ©2019 我好苦啊</Footer>
        </Layout>
      </Layout>


      // <Layout>
      //   <Sider width={256} style={{ minHeight: '100vh' }}>
      //     <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
      //     <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      //       <Menu.Item key="1">
      //         <Link to="/helloworld">
      //           <Icon type="pie-chart" />
      //           <span>Helloworld</span>
      //         </Link>
      //       </Menu.Item>
      //       <SubMenu
      //         key="sub1"
      //         title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
      //       >
      //         <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
      //         <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
      //         <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
      //       </SubMenu>
      //     </Menu>

      //   </Sider>
      //   <Layout >
      //     <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>

      //       Header</Header>
      //     <Content style={{ margin: '24px 16px 0' }}>
      //       <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
      //         {this.props.children}4
      //     </div>

      //     </Content>
      //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      //   </Layout>
      // </Layout>
    )
  }
}