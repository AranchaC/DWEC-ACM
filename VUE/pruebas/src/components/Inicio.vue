<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const count = ref(0)

</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    {{ count }}

    <button @click="count++">Count</button>

  </div>
</template>

<style scoped>

</style>
