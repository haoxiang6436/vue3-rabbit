<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutSticky from './components/LayoutSticky.vue'
</script>

<template>
  <div>
    <LayoutSticky />
    <LayoutNav />
    <LayoutHeader />
    <!-- 强制销毁路由缓存 -->
    <!-- <RouterView :key="$route.fullPath"/> -->
    <RouterView v-slot="{ Component }">
      <Transition name="home" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped>
/* 下面我们会解释这些 class 是做什么的 */
.home-enter-active,
.home-leave-active {
  transition: all 0.5s ease;
}

.home-enter-from,
.home-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
