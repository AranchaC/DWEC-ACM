<script setup>

import Inicio from './components/Inicio.vue'
import FooterPlantilla from './paginas/Inicio.vue'

</script>

<template>
  <header>

    <div class="wrapper">
      <Inicio msg="Página de inicio." />
      


    </div>
  </header>

  <footer>
    <FooterPlantilla />
  </footer>

</template>

<style scoped>
  footer {
    bottom: 0;
  }
</style>
