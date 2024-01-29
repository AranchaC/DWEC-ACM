<script setup>

import servicioAficiones from '@/servicios/personal/servicioAficiones.js' ;
import { ref, onMounted } from 'vue';
let aficiones = ref(null)
let imagenUrl = ref()

function obtenerAficiones() {
  servicioAficiones
    .getAll()
    .then((response) => {
      console.log(response.data)
      aficiones.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    })
}

onMounted(() => {
  obtenerAficiones();
});

//funcion detalles, para obtener los detalles de cada nombre
function detalles(aficion){
  console.log("comer croquetas");
  imagenUrl.value=aficion.url;
  };


</script>

<template>
      <h1>Página Listar</h1>
      <h2>Lista de aficiones</h2>
      <ul>
        <li v-for="(aficion, id) in aficiones" :key="id" @click="detalles(aficion)">
          <span class="li-nombre"> {{ aficion.nombre }}</span>
          <span class="li-descripcion"> {{ aficion.descripcion }}</span>
          <!-- <img :src= "aficion.url" /> -->
        </li>
      </ul>

      <img :src="imagenUrl" />
      
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
ul {
  list-style-type: none;
}
ul li {
  background-position: 0px 5px;
  background-repeat: no-repeat;
  padding-left: 20px;
}
ul li span.li-nombre {
  display: block;
  width: 30%;
  height: 100px;
  padding: 40px;
  font-weight: bold;
  float: left;
  background-color: lightslategray;
  text-align: center;
}
ul li span.li-descripcion {
  display: block;
  width: 60%;
  height: 100px;
  padding: 40px;
  font-weight: bold;
  float: left;
  text-align: right;
  background-color: lightgray;
  margin-bottom: 1vh;
}
@import url("https://fonts.googleapis.com/css?family=Bowlby+One+SC");
h2 {
  text-align: center;
  font-family: "Bowlby One SC", cursive;
  font-size: 5vw;
  background-color: lightblue;
  margin: 3vh;
}
ul::after {
  content: "";
  clear: both;
  display: table;
}

button {
  padding: 0.375rem 0.75rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  color: black;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}

button:hover,
button:active,
button:focus {
  color: #fff;
  background-color: black;
}
</style>