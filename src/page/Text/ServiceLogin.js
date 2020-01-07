import request from '@/utils/request';
export async function firstApi(param) {
    return request('/testapi/view_list', {
        method: "post",
        //请求参数
        body: {
            ...param,
        }
    });
}