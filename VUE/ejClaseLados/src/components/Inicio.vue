<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

import { ref, reactive, computed , watch} from 'vue'

const base = ref('')
const altura = ref('')

const area = computed(() => base.value * altura.value)
const perimetro = computed(() => 'Tu perímetro es ${}')

</script>

<template>
  <div>

    <label for="">Base: </label>
    <input v-model="base" >
<br>
    <label for="">Altura: </label>
    <input v-model="altura" >

    <br><br>
    <p :class="area">Tu área es {{ area }}</p>
    <p :class="perimetro">{{ perimetro }}</p>
  </div>
</template>

<style scoped>

</style>
