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
/* 下面我们会解释这些 class 是做什么的 */
.app-enter-active,
.app-leave-active {
  transition: all 0.5s ease;
}

.app-enter-from,
.app-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
