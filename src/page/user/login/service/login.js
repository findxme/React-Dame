// import request from 'requesturl';

// // 新闻轮播图显示
// export function NewsCarousel(start, limit) {
//     const body = JSON.stringify({ start: 0, limit: 1000 });
//     return request("menu/query", {
//         method: "POST", body,
//         headers: { 'Content-Type': 'application/json' }
//     });
// }

// //新闻列表
// export function NewsList(start, limit, type) {
//     const body = JSON.stringify({ start, limit, type });
//     return request("new/query", {
//         method: "POST", body,
//         headers: { 'Content-Type': 'application/json' }
//     });
// }

// import request from '../utils/request';
// import axios from 'axios';
// import http from "../uutils/http"
import http from "../utils/http";

export function login(params) {
    console.log("123456688")

    // return http.get('http://127.0.0.1:9091/api2.0/login', {
    //     params: {
    //         username: "admin",
    //         password: "admin",
    //     }
    // })
    //     .then((data) => {
    //         console.log(data)
    //     })
    //     .catch(err => console.log(err))

    return axios.get('http://127.0.0.1:9091/api2.0/login', {
        params: {
            username: "admin",
            password: "admin",
        }
    })
    // return request(`http://127.0.0.1:9091/api2.0/login2`, {
    //     method: 'get',
    //     headers: {
    //         'Content-Type': 'application/json; charset=utf-8'
    //     },
    //     body: JSON.stringify({
    //     })
    // });
}


// export function models中要调用的方法名(参数) {
//     return request(`接口地址?${参数}`) //get方法请求
//     /*
//    return request(`接口地址`,{
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8'
//     },
//     body: JSON.stringify({
//       参数名：参数
//     })
//   })
//   */

// }