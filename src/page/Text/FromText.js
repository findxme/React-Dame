import React, { Component } from 'react';
import './index.less';
// import styles from './index.less';
// import './index2.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Tabs, Form, Icon, Input, Button, Checkbox, Spin } from 'antd';
// import FromText2 from './FromText2'

const { TabPane } = Tabs;
class FromText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // this.run(values)

            }
        });
    };

    callback(key) {
        console.log(key);
    }

    // componentDidMount() {
    //     // 在这里请求相关接口判断用户是否完成登录

    // }


    componentDidMount() {
        // const _this = this;
        // axios.get('http://127.0.0.1:9091/api/cha', { bid: '1' })
        //     .then(function (response) {
        //         console.log("qwqwe", response.data.data);
        //         _this.setState({
        //             users: response.data,
        //             isLoaded: true
        //         });
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         _this.setState({
        //             isLoaded: false,
        //             error: error
        //         })
        //     })
        // axios.get('http://127.0.0.1:9091/api/excel')




    }
    a() {
        console.log("object")
        alert('这是一个待执行函数')
        axios.get('http://127.0.0.1:9091/api/cha', {
            params: {
                bid: '1'
            }
        })
            .then(function (response) {
                console.log("qwqwe", response.data.data);
                // _this.setState({
                //     users: response.data,
                //     isLoaded: true
                // });
            })
            .catch(function (error) {
                // console.log(error);
                // _this.setState({
                //     isLoaded: false,
                //     error: error
                // })
            })
    }
    a2() {

        alert('这是一个待执行函数')
    }

    render() {


        const { getFieldDecorator } = this.props.form;
        return (

            <div>
                <button onClick={this.a}>4444</button>
                <button onClick={this.a2}>22222</button>
                <Tabs defaultActiveKey="1" onChange={this.callback}
                >


                    <TabPane tab="登录" key="1">
                        <Form onSubmit={this.handleSubmit} className="login-form" >
                            {/* <Form onSubmit={this.handleSubmit} className={styles.loginForm} > */}

                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"

                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })
                                    (<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-button" href="">
                                    Forgot password
          </a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in登录
          </Button>
                                Or <a href="/text/fromText2" > register now!</a>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab="注册" key="2">
                        <FromText2></FromText2>
                    </TabPane>

                </Tabs >
            </div>
        );
    }
}
// const WrappedNormalLoginForm = Form.create({name: 'normal_login' })(NormalLoginForm);

export default Form.create({ name: 'normal_login' })(FromText);