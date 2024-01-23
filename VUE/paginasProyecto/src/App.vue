<script setup>

import barraMenu from './components/menu.vue'
import { ref } from 'vue'


</script>

<template>
  <header>

    <barraMenu titulo="Menú Principal" :links="['inicio', 'listar']" />

  </header>

  <main>
    <RouterView />
  </main>

</template>

<style scoped>

</style>