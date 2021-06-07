import { request } from '../request'

export const isLogin = loginInfo => request(
  {
    url: 'toLogin',
    method: "post",
    data: loginInfo
  }
)