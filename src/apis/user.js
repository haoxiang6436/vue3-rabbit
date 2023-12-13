import httpInstance from '@/utils/http.js'

export const getLikeListAPI = () => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit: 4
    }
  })
}