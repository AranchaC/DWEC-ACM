<script setup>
import{ ref } from 'vue';

import  barraMenu from '@/components/menu.vue'


</script>

<template>
  <header>
      <barraMenu titulo="Menú Principal" :links="['Login','Listar']"/>
     
 </header>

 <main>
  <RouterView />
 </main>
 
  
</template>

<style scoped>

</style>
