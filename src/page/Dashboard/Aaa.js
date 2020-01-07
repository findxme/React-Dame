import React, { Component } from 'react'
import { Steps } from 'antd';

const { Step } = Steps;
export default class Aaa extends Component {
    render() {
        return (
            <Steps current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        )
    }
}


