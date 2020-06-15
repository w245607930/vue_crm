/**
 * Created by intellif on 2020/3/7.
 */
import {Toast} from 'vant';
import axios from 'axios'
import { getStore, setStore,clearLocalStorage, clearSessionStorage } from "~/js/utils.js"

axios.defaults.withCredentials = true

console.log(process.env.BASE_API)
const fetch = axios.create({
  baseURL: process.env.BASE_API,
  // baseURL: '/api',
  timeout: 10000,
  withCredentials: true,
  crossDomain: true,
  headers: {
    'content-type': 'application/json;charset=utf8'
  }
});

//添加请求拦截器
fetch.interceptors.request.use((config)=>{
  // config.headers['token'] = getStore('token')
  if(getStore('token')){
    config.headers.token = getStore('token')
  }
  //在发送请求之前处理
  return config;
},(error)=>{
  return Promise.reject(error);
})

//添加响应拦截器
fetch.interceptors.response.use((response)=>{
//对响应数据处理
  if(response.data.code == 200){

  }else{
    Toast(response.data.meaning);
  }
  return Promise.resolve(response);
},(error => {
  //对响应错误处理
  return Promise.reject(error);
}))

export default fetch
