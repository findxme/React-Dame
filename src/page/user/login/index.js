import React, { Component } from 'react'
import './index.less';
import Register from './Register'
import ReactDOM from 'react-dom';
import { connect } from 'dva';
// import { connect } from 'pipenet-core/lib/react';

// import { connect } from 'dva/index';
import axios from 'axios';
// import fecth from 'fetch';
import { Tabs, Form, Icon, Input, Button, Checkbox, Spin } from 'antd';
const { TabPane } = Tabs;

@connect(({ login }) => {
    return ({
        assessmentList: login.data,
    })
})
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        }
    }


    login(id) {
        console.log("144444")
        this.props.dispatch({
            type: 'login/login',
            payload: id,
        })
    }


    login2(id) {
        console.log("144444")
        this.props.dispatch({
            type: 'login/login',
            payload: id,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState = {
                    username: values.username,
                    password: values.password,

                }
                this.run(values)
            }
        });
    };
    callback(key) {
        console.log(key);
    }



    run(values) {
        console.log("object")
        axios.get('http://127.0.0.1:9091/api2.0/login', {
            params: {
                username: values.username,
                password: values.password,
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    if (res.data.data === true) {

                        this.props.history.push('/')
                    } else {
                        alert(res.data.data)
                        // this.props.history.push('/layout')
                    }
                }
            })

    }
    render() {

        const { getFieldDecorator } = this.props.form;
        return (<div style={{}}>
            <button onClick={() => this.login(123)}>登陆</button>
            <button onClick={() => this.login2(123)}>登陆2</button>
            <Tabs defaultActiveKey="1" onChange={this.callback}
            >
                <TabPane tab="登录" key="1">
                    <Form onSubmit={this.handleSubmit} className="login-form" >
                        {/* <Form onSubmit={this.handleSubmit} className={styles.loginForm} > */}

                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请填写用户名!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"

                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请填写密码!' }],
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
                            Or <a href="/user/register" > register now!</a>
                        </Form.Item>
                    </Form>
                </TabPane>
                <TabPane tab="注册" key="2">
                    <Register></Register>
                </TabPane>

            </Tabs >
        </div>);
    }
}



// const mapStateToProps = state => {
//     const {
//         checkBranches
//     } = state.projects;
//     return {
//         checkBranches
//     };
// };



// const mapStateUsers = (state) => {
//     return {
//         login: state.login, //这里的login表示后面用this.props.login获取state（根节点）中login命名空间（model的login.js中的state所有数据）的数据
//     };

// };
export default Form.create({ name: 'normal_login' })(Login);

// export default connect(mapStateToProps)(Counter) 
