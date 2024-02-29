<script setup>
import barraMenu from "./components/menu.vue";
import { ref } from "vue";

let usuario = ref("");
usuario.value = localStorage.getItem("usuario");
</script>

<template>
  <header>
    <barraMenu
      titulo="Web Plantilla para VueJS"
      :links="['inicio', 'listar', 'autor', 'inicio-sesion']"
    />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
