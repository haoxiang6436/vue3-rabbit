import httpInstance from '@/utils/http'


export const getCheckoutAPI = () => {
  return httpInstance('/member/order/pre')
}


export const submitOrderAPI = (data) => {
  return httpInstance.post('/member/order',data)
}