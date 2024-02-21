<script setup>

import servicioAficiones from '@/servicios/personal/servicioAficiones.js' ;
import { ref, onMounted, reactive } from 'vue';
import Swal from "sweetalert2";

//prueba sweetalert//
Swal.fire({
  icon: "success",
  title: "Yuhuuuu",
  text: "Holaa"
})

let aficiones = ref(null)
let imagenUrl = ref()
let filtroNombre = ref()

// variable reactiva que capta los campos del form //
let nuevaAficion = reactive({
  nombre:"",
  descripcion:"",
  url:""
})

let modifAficion = reactive({
  id: null,
  nombre:"",
  descripcion:"",
  url:""
})

//** FUNCIÓN GET_ALL OBTENER **//
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

// cuando se abre la página, se llama a la función obtnerAficiones //
onMounted(() => {
  obtenerAficiones();
});

//funcion detalles, para obtener los detalles de cada nombre //
function detalles(aficion){
  console.log("comer croquetas");
  imagenUrl.value=aficion.url;
};

//** FUNCIÓN DELETE BORRAR **//
function borrar(aficion){
  //función para el click del botón, donde borro toda la fila:
  if (confirm("¿Quieres borrar esta afición?")){
    //llamo a función delete del servicio:
    servicioAficiones
      .delete(aficion.id)
      .then((response)=>{
        let index = aficiones.value.indexOf(aficion);
        aficiones.value.splice(index,1);
        correcto("Afición borrada correctamente.")
        })
        .catch((error) => {
          error("Algo ha salido mal.")
        }) 
  }
}//borrar


//** FUNCIÓN LIMPIAR campos form **//
function limpiar(){
  nuevaAficion.nombre = "";
  nuevaAficion.descripcion = "";
  nuevaAficion.url = "";
}

//** FUNCIÓN POST AGREGAR **//
function agregarAficion() {
  // Enviar los datos de la nueva afición al método post del servicio
  servicioAficiones
    .post(nuevaAficion)
    .then((res) => {
      // Actualizar la lista de aficiones después de agregar la nueva
      obtenerAficiones();
      limpiar();
      correcto("Afición agregada correctamente.")
    })
    .catch(() => {
      error("Problema al agregar la afición.");
    });
}//agregarAfición

//*** FUNCIÓN BUSCAR AFICIÓN POR ID ***//
function buscarAficion(){
  servicioAficiones
    .findByNombre(filtroNombre.value)
    .then((res) =>{
      aficiones.value = res.data;
      correcto('Afición encontrada.');

    }).catch(()=>{
      error('No se encontró la afición');     
  })
}

//*** FUNCIÓN PUT MODIFICAR AFICIÓN ***//
function modificarAficion(){
  Swal.fire({
    title: "¿Quieres guardar los cambios?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: "No guardar"
  }).then((result) => {
    if (result.isConfirmed) {
      servicioAficiones
        .update(modifAficion.id, {
          nombre: modifAficion.nombre,
          descripcion: modifAficion.descripcion,
          url: modifAficion.url
        })
        .then((res) => {
          obtenerAficiones();
          correcto("¡Afición modificada!");
          modifAficion.nombre = "";
          modifAficion.descripcion = "";
          modifAficion.url = "";
        })
        .catch(() => {
          error("¡Algo salió mal al modificar la afición!");
        });
    } else if (result.isDenied) {
      Swal.fire("Los cambios no se guardaron", "", "info");
    }
  });

  /*servicioAficiones
    .update(modifAficion.id, {
      nombre: modifAficion.nombre,
      descripcion: modifAficion.descripcion,
      url: modifAficion.url
    })
    .then((res) =>{
      obtenerAficiones();
      correcto('Afición modificada.');

        modifAficion.nombre = "";
        modifAficion.descripcion = "";
        modifAficion.url = "";

    }).catch(()=>{
      error('No se encontró la afición');     
  })*/
}

function volcar(aficion){
  modifAficion.id = aficion.id;
  modifAficion.nombre = aficion.nombre;
  modifAficion.descripcion = aficion.descripcion;
  modifAficion.url = aficion.url;
}

// funciones estilo sweetalert //
function error(mensaje){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: mensaje
    });
}

function correcto(mensaje){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: mensaje,
    showConfirmButton: false,
    timer: 1500,
  })
}

</script>

<template>
      <h1>Página Listar</h1>
      <h2>Lista de aficiones</h2>

      <form class="form" @submit.prevent="agregarAficion">
          <p>Agregar nueva afición:</p>
          <input type="text" v-model="nuevaAficion.nombre" placeholder="Nombre"/>
          <input type="text" v-model="nuevaAficion.descripcion" placeholder="Descripción"/>
          <input type="text" v-model="nuevaAficion.url" placeholder="URL de la imagen"/>
          <button>Agregar</button>
      </form>
      <br>
      <form class="form" @submit.prevent="modificarAficion">
          <p>Modificar afición:</p>
          <input type="text" v-model="modifAficion.nombre" placeholder="Nombre"/>
          <input type="text" v-model="modifAficion.descripcion" placeholder="Descripción"/>
          <input type="text" v-model="modifAficion.url" placeholder="URL de la imagen"/>
          <button>Modificar</button>
      </form>
      <br>
      <form class="form" @submit.prevent="buscarAficion(nombre)">
          <p>Buscar afición:</p>
          <input type="text" v-model="filtroNombre" placeholder="Nombre"/>
          <button>Buscar</button>
      </form>

      <ul>
        <li v-for="(aficion, id) in aficiones" :key="id" @dblclick="detalles(aficion)">
          <span class="li-nombre"> {{ aficion.nombre }}</span>
          <span class="li-descripcion"> {{ aficion.descripcion }}</span>
          <button class="bot" @click="borrar(aficion)">Borrar </button>
          <button class="bot" @click="volcar(aficion)"> Modificar </button>
          <button class="bot" @click="detalles(aficion)">Ver </button>
          <!-- <img :src= "aficion.url" /> -->
        </li>
      </ul>

      <div class="imgCont">
        <img :src="imagenUrl" />
      </div>
      
</template>

<style scoped>


.form{
  text-align: center;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.form button {
  margin-left: 40px;
}

.imgCont{
  width: 100%;
  text-align: center;
}
img {
  width: 200px;
  height: 200px;
  margin: auto;
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
  width: 40%;
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