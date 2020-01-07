import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';

const SubMenu = Menu.SubMenu;

class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oading: false
        }
    }


    toggle = value => {
        this.setState({ loading: value });
    };
    render() {
        return (<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>

            <SubMenu
                key="sub1"
                title={<span><Icon type="pie-chart" /><span>首页数据分析</span></span>}
            >
                <Menu.Item key="sub11"><Link to="/layout/Helloworld"> <Icon type="pie-chart" /><apan>卡片</apan></Link></Menu.Item>
                <Menu.Item key="sub12"><Link to="/layout/Helloworld2">柱状图</Link></Menu.Item>
                <Menu.Item key="sub13"><Link to="/layout/Helloworld3">折线图</Link></Menu.Item>
                <Menu.Item key="sub14" checked={this.state.loading} onChange={this.toggle}><Link to="/layout/helloWorld4">Echart饼图</Link></Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={<span><Icon type="dashboard" /><span>其他组件</span></span>}
            >
                <Menu.Item key="sub21"><Link to="/layout/text/tabsText">Tabs标签页</Link></Menu.Item>
                <Menu.Item key="sub22"><Link to="/layout/text/multipleChoice">多选框</Link></Menu.Item>
                {/* <Menu.Item key="sub23"><Link to="/layout/text/fromText">登录表单</Link></Menu.Item> */}
                <Menu.Item key="sub24"><Link to="/layout/text/fromText2">注册</Link></Menu.Item>
                <Menu.Item key="sub25"><Link to="/layout/text/picturesWall">上传图片</Link></Menu.Item>
                <Menu.Item key="sub26"><Link to="/layout/text/layui">layui</Link></Menu.Item>
                <Menu.Item key="sub27"><Link to="/layout/text/pingLun">评论</Link></Menu.Item>
                <Menu.Item key="sub28"><Link to="/layout/text/zouMaDeng">走马灯</Link></Menu.Item>
                <Menu.Item key="sub29"><Link to="/layout/text/biaoGe">表格</Link></Menu.Item>
                <Menu.Item key="sub30"><Link to="/layout/text/newPage">富文本编辑器</Link></Menu.Item>
                <Menu.Item key="sub31"><Link to="/layout/text/wangeditor">富文本编辑器Wngeditor</Link></Menu.Item>
                <Menu.Item key="sub32"><Link to="/layout/text/mianBan">折叠面板</Link></Menu.Item>
            </SubMenu>
        </Menu>);
    }
}

export default Left;