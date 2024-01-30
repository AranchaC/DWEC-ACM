<script setup>

import servicioAficiones from '@/servicios/personal/servicioAficiones.js' ;
import { ref, onMounted } from 'vue';
let aficiones = ref(null)
let imagenUrl = ref()

let nombre = ref('');
let descripcion = ref('');
let url = ref('');

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

  function borrar(aficion){
    //función para el click del botón, donde borro toda la fila:
    if (confirm("¿Quieres borrar esta afición?")){
      //llamo a función delete del servicio:
      servicioAficiones.delete(aficion.id).then((response)=>{
        let index = aficiones.value.indexOf(aficion);
        aficiones.value.splice(index,1);
        alert(`Afición borrada.`)
        })
        .catch((error) => {
          alert("Problema de conexión");
        }) 
    }
  }//borrar

  //función post agregar nueva aficion al array aficiones:
  function agregarAficion() {
  const nuevaAficion = {
    nombre: nombre.value,
    descripcion: descripcion.value,
    url: url.value,
  };

  // Enviar los datos de la nueva afición al método post del servicio
  servicioAficiones
    .post(nuevaAficion)
    .then(() => {
      // Actualizar la lista de aficiones después de agregar la nueva
      obtenerAficiones();

      // Limpiar los campos del formulario después de agregar la afición
      nombre.value = '';
      descripcion.value = '';
      url.value = '';
    })
    .catch(() => {
      alert("Hubo un problema al agregar la afición. Por favor, inténtalo de nuevo más tarde.");
    });
}




</script>

<template>
      <h1>Página Listar</h1>
      <h2>Lista de aficiones</h2>

      <form class="form" @submit.prevent="agregarAficion">
        <div class="form-inputs">
          <input type="text" v-model="nombre" placeholder="Nombre"/>
          <input type="text" v-model="descripcion" placeholder="Descripción"/>
          <input type="text" v-model="url" placeholder="URL de la imagen"/>
          <button>Agregar Aficación</button>
        </div>
      </form>

      <ul>
        <li v-for="(aficion, id) in aficiones" :key="id" @dblclick="detalles(aficion)">
          <span class="li-nombre"> {{ aficion.nombre }}</span>
          <span class="li-descripcion"> {{ aficion.descripcion }}</span>
          <button class="bot" @click="borrar(aficion)"> X </button>
          <!-- <img :src= "aficion.url" /> -->
        </li>
      </ul>

      <img :src="imagenUrl" />
      
</template>

<style scoped>
.form{
  text-align: center;
  padding: 10px;
}
.form-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.form-inputs button {
  margin-left: 40px;
}

img {
  width: 200px;
  height: 200px;

}

ul {
  list-style-type: none;
}

.bot{
  height: 50px;
  margin-bottom: 1vh;
  margin-left: 5px
}
ul li {
  background-position: 0px 5px;
  background-repeat: no-repeat;
  padding-left: 20px;
}
ul li span.li-nombre {
  display: block;
  width: 30%;
  height: 50px;

  font-weight: bold;
  float: left;
  background-color: lightslategray;
  text-align: center;
  padding-top: 15px;
}
ul li span.li-descripcion {
  display: block;
  width: 60%;
  height: 50px;

  font-weight: bold;
  float: left;
  text-align: right;
  padding-right: 10px;
  background-color: lightgray;
  margin-bottom: 1vh;
  padding-top: 15px;
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