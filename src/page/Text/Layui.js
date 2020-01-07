import React, { Component } from 'react';
import { Button } from 'layui'
// import { Button } from 'layui-src'

// import 'antd/dist/antd.css'
// @import 'https://cdn.90so.net/layui/2.5.5/css/layui.css'
// @import './layui.css'
// import 'layui/style/components'
// import 'antd/dist/antd.css'
// import 'layui-src/dist/css/modules/layui.css'
// import 'layui/style'
// import 'layui/'
// import 'layui/'
// import 'layui/style/layui.css'
// import '../../public/layui.css'
class Layui extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            {/* <button type="button" className={Mystly['layui-btn layui-btn-primary']}>原始按钮</button>4444 */}
            {/* <Button type="button" className="layui-btn">默认按钮</Button> */}
            <Button type="button" className="layui-btn layui-btn-normal">百搭按钮</Button>
            <Button type="button" className="layui-btn">删除</Button>
            {/* <button type="button" class="layui-btn layui-btn-normal">百搭按钮</button>
            <button type="button" class="layui-btn layui-btn-warm">暖色按钮</button>
            <button type="button" class="layui-btn layui-btn-danger">警告按钮</button>
            <button type="button" class="layui-btn layui-btn-disabled">禁用按钮</button> */}
        </div >);
    }
}

export default Layui;
