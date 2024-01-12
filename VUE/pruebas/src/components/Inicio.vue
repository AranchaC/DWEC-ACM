<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const count = ref(0)
//variable reactiva, se puede usar en el template y se actualiza automáticamente

</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <!-- mostrar varibales a nivel html -->
    {{ count }}

    <!-- Eventos con @ -->
    <button @click="count++">Count</button>

  </div>
</template>

<style scoped>

</style>
