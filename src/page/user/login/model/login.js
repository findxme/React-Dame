import { login } from '../service/login';
import router from 'umi/router';

export default {
    namespace: 'login', /// namespace 表示在全局 state 上的 key
    state: {
        userinfo: null
    },
    reducers: { //reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
        suerinfoRenducers(state, { payload }) {
            return {
                ...state,
                userinfo: payload
            }
        }
    },
    effects: {
        * login({ payload }, { call, put, select }) {
            console.log("object");
            const response = yield call(login);
            yield put({
                type: 'suerinfoRenducers',
                payload: response
            })
        }
    }
};