import React, { Component } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
class TabsText extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    callback(key) {
        console.log(key);
    }
    render() {
        return (
            // defaultActiveKey 默认选中哪一个key
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
        </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
        </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
        </TabPane>
            </Tabs>
        );
    }
}

export default TabsText;