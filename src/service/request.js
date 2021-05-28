import axios from 'axios'

// 不是默认导出 是因为如果要请求多个服务器的话 可以返回多个请求方法在同一个页面方便管理
export function request(config) {
  // 创建一个axios实例
  const instance = axios.create(
    {
      baseURL: 'http://localhost:3000/api',
      timeout: 5000,
    }
  )
  
  return instance(config)
}