<script setup>
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
