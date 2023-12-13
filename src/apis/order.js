import httpInstance from '@/utils/http.js'

export const getOrderAPI = (params) => {
  return httpInstance({
    url: '/member/order',
    methods: 'GET',
    params
  })
}