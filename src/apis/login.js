import httpInstance from '@/utils/http.js'

export const LoginAPI =  ({account,password}) => {
  return httpInstance.post('/login',{account,password})
}