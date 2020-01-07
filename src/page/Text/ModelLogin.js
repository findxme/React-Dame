import { firstApi } from "./ServiceLogin";

export default {
    //命名空间，必须保持全局唯一
    namespace: 'mbit',

    state: {
        bit: [],
    },
    effects: {
        *firstRequest({ payload }, { call, put }) {
            const response = yield call(firstApi, payload);
            yield put({
                //type值要能匹配到reducers中的方法
                type: "reMethod",
                payload: Array.isArray(response) ? response : [],
            });
        }
    },
    reducers: {
        //与effects中put->type值匹配
        reMethod(state, action) {
            return {
                ...state,
                bit: action.payload,
            }
        }
    },
}