import { request } from '../request'
import qs from 'qs'

export const isLogin = loginInfo => request(
  {
    url: 'login',
    method: "post",
    data: qs.stringify(loginInfo)
  }
)