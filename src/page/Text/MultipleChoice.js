import React, { Component } from 'react';

import { Row, Col } from 'antd';
import { Tabs, Cascader, DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
const { TabPane } = Tabs;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const options3 = [
    {
        value: '1',
        label: '湖北',
        children: [
            {
                value: '1-1',
                label: '武汉',
                children: [
                    {
                        value: '1-1-1',
                        label: '孝感',
                        children: [
                            {
                                value: '1-1-1-1',
                                label: '应城',
                                children: [
                                    {
                                        value: '1-1-1-1-1',
                                        label: '杨河',
                                        children: [
                                            {
                                                value: '1-1-1-1-1-1',
                                                label: '老子家',
                                            }
                                        ]
                                    }]
                            }, {
                                value: '1-1-1-2',
                                label: '安陆',
                                children: [
                                    {
                                        value: '1-1-1-2-1',
                                        label: '新闸',
                                        children: [
                                            {
                                                value: '1-1-1-2-1-1',
                                                label: '老子家2',
                                            }
                                        ]
                                    }]
                            }

                        ]
                    }, {
                        value: '1-1-2',
                        label: '荆州',
                    },

                ],
            },

        ],
    }, {
        value: '2',
        label: '四川',
        children: [
            {
                value: '2-1',
                label: '成都',
                children: [
                    {
                        value: '2-1-1',
                        label: '都江堰',
                        children: [
                            {
                                value: '2-1-1-1',
                                label: '汪婷家',
                            }
                        ]
                    }, {
                        value: '2-1-2',
                        label: '都江堰2',
                    },

                ],
            },

        ],
    },

];

class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        }
    }
    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    onChange3(value) {
        console.log(value);
    }

    onChange2 = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
    };

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };

    displayRender(label) {
        return label[label.length - 1];
    };
    onChange4(date, dateString) {
        console.log(date, dateString);
    }
    render() {


        const plainOptions = ['1', '2', '3'];
        const options = [
            { label: '4', value: 'Apple' },
            { label: '5', value: 'Pear' },
            { label: '6', value: 'Orange' },
        ];
        const optionsWithDisabled = [
            { label: '7', value: 'Apple' },
            { label: '8', value: 'Pear' },
            { label: '9', value: 'Orange', disabled: false },
        ];

        return (
            <div>
                <Row >
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="九宫格多选框" key="1">
                            {/* <Col span={3}> */}
                            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={this.onChange} />
                            <br />
                            <br />
                            <Checkbox.Group options={options} defaultValue={['Pear']} onChange={this.onChange} />
                            <br />
                            <br />
                            <Checkbox.Group
                                options={optionsWithDisabled}
                                // disabled//默认不可被更改

                                // defaultValue={['Apple']}默认选中那一项
                                onChange={this.onChange}
                            />
                            {/* </Col> */}
                        </TabPane>
                        <TabPane tab="三级多选框" key="2">
                            {/* <Col span={3}> */}
                            <div display="flex-start" style={{ width: 200 }}>
                                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                                    <Checkbox
                                        indeterminate={this.state.indeterminate}
                                        onChange={this.onCheckAllChange}
                                        checked={this.state.checkAll}
                                    >
                                        导航
                        </Checkbox>
                                </div>
                                <br />
                                <CheckboxGroup
                                    options={plainOptions}
                                    value={this.state.checkedList}
                                    onChange={this.onChange2}
                                />
                            </div>
                            {/* </Col> */}
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                       </TabPane>
                    </Tabs>


                </Row >
                <Row style={{ marginTop: '3%' }}>
                    <Col span={3}>
                        <Cascader options={options3} onChange={this.onChange3} placeholder="请选择(此种要求全部选择完毕)" />
                    </Col>
                    <Col span={3}>
                        <Cascader options={options3} onChange={this.onChange3} changeOnSelect placeholder="此级联选择允许只选择父级" />
                    </Col>
                    <Col span={6}>
                        <RangePicker onChange={this.onChange4} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MultipleChoice;