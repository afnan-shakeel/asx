<script setup lang="ts">
// import Home from './views/Home.vue';
</script>

<template>
  <div>

    <component :is="$route.meta.layout || 'div'"></component>
  </div>
</template>

<style scoped>
</style>
