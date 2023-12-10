import { defineStore } from 'pinia'
import {ref} from 'vue'
import {getCategoryAPI} from '@/apis/layout.js'

export const useLayoutStore = defineStore('Layout',()=>{
  const CategoryList = ref([])
  const getCategory = async () => {
    const data = await getCategoryAPI()
    CategoryList.value = data.result
  }
  return {
    CategoryList,
    getCategory
  }
})