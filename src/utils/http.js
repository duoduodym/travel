import axios from 'axios'
// 创建axios请求实例
const request = axios.create({
  //baseURL: '/api/', // 设置跨域代理接口统一的前置地址
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  }
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  if(localStorage.getItem('token')) config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 只返回数据
  return response.data
}, function (error) {
  return Promise.reject(error)
})
export default {
    install: function (Vue) {
      Object.defineProperty(Vue.prototype, '$http', { value: request })
    }
}
  