<script setup>
import {getCategory} from '@/apis/testAPI.js'
const getData = async () => {
  const res = await getCategory()
  console.log(res)
}
</script>

<template>
    <el-button type="primary" @click="getData">Primary</el-button>
</template>

<style lang="scss" scoped>
</style>
