import Http from './http'

const http = new Http()

//  自动登录
const url = 'xxxxx'
export const login = (data: object) => http.post(url, data)