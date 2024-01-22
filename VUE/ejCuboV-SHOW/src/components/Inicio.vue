<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

import { ref, reactive, computed , watch} from 'vue'

let largo = ref(0)
let alto = ref(0)
let ancho = ref(0)

const area = computed(() => ancho.value * largo.value)
const perimetro = computed(() => 2*ancho.value + 2*alto.value)
const volumen = computed(() => ancho.value * alto.value * largo.value)
const ok = computed(() => largo.value !== 0 || alto.value !== 0 || ancho.value !== 0);

const mensajes = reactive({
  largo:"",
  alto:"",
  ancho:""
})

watch(largo,(nuevoValor, viejoValor) => {
  if (isNaN(nuevoValor) || nuevoValor < 0){
    largo.value = viejoValor;
    mensajes.largo = `El valor no es válido.`
  } 
  console.log(`Valor cambiado de ${viejoValor} a ${nuevoValor}`)
})

watch(alto,(nuevoValor, viejoValor) => {
  if (isNaN(nuevoValor) || nuevoValor < 0){
    alto.value = viejoValor;
    mensajes.alto = `El valor no es válido.`
  } 
  console.log(`Valor cambiado de ${viejoValor} a ${nuevoValor}`)
})

watch(ancho,(nuevoValor, viejoValor) => {
  if (isNaN(nuevoValor) || nuevoValor < 0){
    ancho.value = viejoValor;
    mensajes.ancho = `El valor no es válido.`
  } 
  console.log(`Valor cambiado de ${viejoValor} a ${nuevoValor}`)
})

function limpiar() {
  largo.value = 0;
  alto.value = 0;
  ancho.value = 0;

}

function limpiarMens() {
  mensajes.largo = "";
  mensajes.alto = "";
  mensajes.ancho = "";
}

// if (largo.value == 0 || alto.value == 0 || ancho.value == 0){
//   ok: false;
// }


</script>

<template>
  <div>

    <h2>Cubo:</h2>
    <label for="">Largo: </label>
    <input v-model="largo" >
    <span class="rojo">{{ mensajes.largo }}</span>
    <br>

    <label for="">Alto: </label>
    <input v-model="alto" >
    <span class="rojo">{{ mensajes.alto }}</span>
    <br>

    <label for="">Ancho: </label>
    <input v-model="ancho" >
    <span class="rojo">{{ mensajes.ancho }}</span>
    <br>

<br>
    <button @click="limpiar">Limpiar datos</button> 
    <br>
    <button @click="limpiarMens">Limpiar Mensajes de error.</button>  
    <br><br>
        
    <div v-show="ok">
      <p :class="area">Tu área es {{ area }}</p>
      <p :class="perimetro">Tu perímetro es {{ perimetro }}</p>
      <p :class="volumen">Tu volumen es {{ volumen }}</p>
    </div>



  </div>
</template>

<style scoped>

input{
  display: block;
}

.rojo{
  color: red;
}
</style>
