<script setup>

  defineProps({
    msg: {
      type: String,
      required: true
    }
  })

  import { ref, reactive } from 'vue'


  //Ej 7:
  let id = 0;

  const persona = reactive({ 
    dni: "",
    nombre: ""
  })

  const lista = ref([
    { dni:"55555555B", nombre: 'arancha', apellido: 'chicharro' },
    { dni:"11111111B", nombre: 'rodri', apellido: 'serrano' },
    { dni:"88888888B", nombre: 'luis', apellido: 'feliz' }
  ])

  function anadeNuevo() {
    if (persona.dni === '' || persona.nombre === ''){
        alert("Debes completar dni y nombre.")
    } else {
        lista.value.push({
            dni: persona.dni,
            nombre: persona.nombre,
            apellido: persona.apellido,
        })
        persona.nombre = '';
        persona.dni = '';
        persona.apellido = '';
    }

  }

  function borrar(index) {
    lista.value = lista.value.filter((t) => t !== index)
  }

  function limpiar() {
    persona.nombre = '';
    persona.dni = '';
    persona.apellido = '';
  }

</script>

<template>
  <div>

    <!-- ej7 -->
    <form @submit.prevent="anadeNuevo">
        <label for="" >Nombre</label>
            <input v-model="persona.nombre">
        <label for="">Apellido</label>
            <input v-model="persona.apellido">
        <label for="" >DNI</label>
            <input v-model="persona.dni">
      <button>Añade</button>  
    </form>
    <button @click="limpiar">Limpiar datos</button>  

    <ul>
      <li v-for="elemento in lista" :key="elemento.dni">
        {{ elemento.dni }} - {{ elemento.nombre }}  {{ elemento.apellido }}
        <button @click="borrar(elemento)">X</button>
      </li>
    </ul>

  </div>
</template>

<style scoped>
 input{
    display: block;
  }
</style>
