import http from '@/utils/http.js'

export const getCategory = () => {
  return http.get('home/category/head')
}