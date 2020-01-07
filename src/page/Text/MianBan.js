import React, { Component } from 'react'
import { Collapse, Icon, Select, Table } from 'antd';
import MianBanTable2 from './MianBanTable';

const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
    console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



class MianBan extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }



    render() {
        const a = 123
        return (
            <div>
                <span>工程信息汇总</span>
                <Collapse accordion style={{ background: '#ffffff' }} showArrow={false}>
                    {/* <Panel header="工程信息汇总" showArrow={false} disabled={true} ></Panel> */}
                    {/* <header header="工程信息汇总">44444</header> */}
                    <span>工程信息汇总</span>
                    <Panel header="1 代办任务项" key="1" showArrow={false} >
                        <p>{text}</p>
                    </Panel>
                    <Panel header={`1 安全上报不合格数${a}`} key="2" showArrow={false}>
                        {/* <p>{text}</p> */}
                        <MianBanTable2 />
                    </Panel>
                    <Panel header="3 安全上报不合格数  质量检查不合格数" key="3" showArrow={false}>
                        <p>{text}</p>
                    </Panel>
                    <Panel header="4 工程成本异常数 安全上报不合格数" key="4" showArrow={false}>
                        <p>{text}</p>
                    </Panel>
                </Collapse >
            </div>
        );
    }
}

export default MianBan;