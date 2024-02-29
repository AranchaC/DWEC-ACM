<script setup>
import { ref } from "vue";

const mensaje = ref(
  "Bienvenido al módulo de desarrollo web en entorno cliente"
);
</script>

<template>
  <p>{{ mensaje }}</p>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f8f9fa;
}

p {
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 2vw;
  background-color: #fff;
  color: gray;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
 padding: 30vh;
}
</style>
