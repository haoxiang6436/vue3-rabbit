<script setup>
// import {getCategory} from '@/apis/testAPI.js'
// const getData = async () => {
//   const res = await getCategory()
//   console.log(res)
// }
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="app" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style lang="scss" scoped>

</style>
