import httpInstance from '@/utils/http.js'

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 获取购物车
export const getCartAPI = () => {
  return httpInstance('/member/cart')
}

export const delCartAPI = (ids) => {
  // return httpInstance.delete('/member/cart',ids)
  return httpInstance({
    url:'/member/cart',
    method:'delete',
    data:{
      ids
    }
  })

}


export const mergeCartAPI = (data) => {
  return httpInstance.post('/member/cart/merge',data)
}