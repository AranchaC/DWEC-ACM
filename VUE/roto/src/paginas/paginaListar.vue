<script setup>

import servicioAficiones from '@/servicios/personal/servicioAficiones.js' ;
import { ref, onMounted, reactive } from 'vue';
import Swal from "sweetalert2";


let aficiones = ref(null)
let imagenUrl = ref()
let filtroNombre = ref()
let imagen = false;

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

//* FUNCIÓN GET_ALL OBTENER *//
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

});

//funcion detalles, para obtener los detalles de cada nombre //
function detalles(aficion){
  imagenUrl.value=aficion.url;
  imagen = true;
};

//* FUNCIÓN DELETE BORRAR *//
function borrar(aficion){
    // Mostrar el primer SweetAlert de confirmación
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡bórralo!"
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, mostrar el segundo SweetAlert
            Swal.fire({
                title: "¡Eliminado!",
                text: "Tu archivo ha sido eliminado.",
                icon: "success"
            }).then(() => {
              servicioAficiones
                .delete(aficion.id)
                .then((response)=>{
                  let index = aficiones.value.indexOf(aficion);
                  aficiones.value.splice(index,1);
                  })
                  .catch((error) => {
                    error("Algo ha salido mal.")
                  })
            });
        }
    });
}//borrar

//* FUNCIÓN LIMPIAR campos form *//
function limpiar(){
  nuevaAficion.nombre = "";
  nuevaAficion.descripcion = "";
  nuevaAficion.url = "";
}

//* FUNCIÓN POST AGREGAR *//
function agregarAficion() {

}//agregarAfición

//* FUNCIÓN GET - BUSCAR AFICIÓN POR ID *//
function buscarAficion(){
 
}

//* FUNCIÓN PUT MODIFICAR AFICIÓN *//
function modificarAficion(){
  servicioAficiones
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
  })
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
  <div>
    <h2>Lista de Aficiones</h2>

    <form class="form">
      <fieldset>
        <legend>Agregar Nueva Afición:</legend>
        <label>Nombre:</label>
        <input type="text" v-model="nuevaAficion.nombre" placeholder="Nombre" />
        <label>Descripción:</label>
        <input type="text" v-model="nuevaAficion.descripcion" placeholder="Descripción" />
        <label>URL de la imagen:</label>
        <input type="text" v-model="nuevaAficion.url" placeholder="URL de la imagen" />
        <button type="submit">Agregar</button>
      </fieldset>
    </form>

    <form class="form">
      <fieldset>
        <legend>Modificar Afición:</legend>
        <label>Nombre:</label>
        <input type="text" v-model="modifAficion.nombre" placeholder="Nombre" />
        <label>Descripción:</label>
        <input type="text" v-model="modifAficion.descripcion" placeholder="Descripción" />
        <label>URL de la imagen:</label>
        <input type="text" v-model="modifAficion.url" placeholder="URL de la imagen" />
        <button type="submit">Modificar</button>
      </fieldset>
    </form>

    <form class="form">
      <fieldset>
        <legend>Buscar Afición:</legend>
        <label>Nombre:</label>
        <input type="text" v-model="filtroNombre" placeholder="Nombre" />
        <button type="submit">Buscar</button>
      </fieldset>
    </form>

    <ul>
      <li v-for="(aficion, id) in aficiones" :key="id" @dblclick="detalles(aficion)">
        <div class="fila-tabla">
          <div class="celda-nombre">{{ aficion.nombre }}</div>
          <div class="celda-descripcion">{{ aficion.descripcion }}</div>
          <div class="celda-borrar">
            <button class="bot" @click="borrar(aficion)">Borrar</button>
            <button class="bot" @click="volcar(aficion)">Modificar</button>
            <button class="bot" @click="detalles(aficion)">Ver</button>
          </div>
        </div>
      </li>
    </ul>

    <div v-show="imagen != false" class="imgCont">
      <img :src="imagenUrl" />
    </div>
  </div>
</template>

<style>
/* Estilos para encabezados h2 */
h2 {
  text-align: center;
  font-family: "Bowlby One SC", cursive;
  font-size: 2vw;
  background-color: #D4E7C5;
  margin-bottom: 10px;
  padding: 10px;
  color: #8B4513;
}

/* Estilos para formularios */
form {
  max-width: 600px;
  margin: auto;
}

fieldset {
  border: 2px solid #8B4513;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
}

legend {
  font-size: 1.2em;
  color: #8B4513;
}

label {
  display: block;
  margin-bottom: 5px;
}let modifAficion = reactive({
  id: null,
  nombre:"",
  descripcion:"",
  url:""
})

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 2px solid #8B4513;
  border-radius: 5px;
}

button[type="submit"] {
  background-color: #8B4513;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  width: 100%;
}

button[type="submit"]:hover {
  background-color: #A0522D;
}

/* Estilos para la lista */
ul {
  list-style-type: none;
  padding: 0;
}

.fila-tabla {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8B4513;
  margin-bottom: 5px;
  padding: 10px;
  color: #c16422;
}

.celda-nombre,
.celda-descripcion,
.celda-borrar {
  border: 2px solid #8B4513;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
}

.celda-nombre {
  width: 30%;
  background-color: #D4E7C5;
  text-align: center;
  cursor: pointer;
}

.celda-descripcion {
  width: 60%;
  background-color: #D4E7C5;
  text-align: right;
}

.celda-borrar {
  background-color: #8B4513;
  color: black;
  text-align: center;
  cursor: pointer;
}

img {
  display: block;
  margin: auto;
  max-width: 35%;
  height: auto;
}

.imgCont {
  text-align: center;
}
</style>
