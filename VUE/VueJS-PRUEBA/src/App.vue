<script setup>
import barraMenu from '@/components/menu.vue'
import { ref } from 'vue'

const elementosMenu = ['inicio','listar']

</script>

<template>
  <header>      
     <barraMenu titulo="Menú Principal" :links="elementosMenu"/>    
  </header>
  
  <main>   
    <RouterView />
  </main>
  
</template>

<style>

</style>
