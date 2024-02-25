<script setup>
import servicioDatosProducto from "../servicios/servicioDatosProducto.js";
import { ref, reactive, onMounted } from "vue";

// #############################################################
// ################ VARIABLES A UTILIZAR
let asistentes = ref(null);
// let mostrar = 
let asistenteMostrar = reactive({ nombre: null, descripcion: null, imagen: null });
let asistenteCrear = reactive({ nombre: null, descripcion: null, imagen: null });
let asistenteFiltrar = ref(null);

// #############################################################
// ################ FUNCIONES DE GESTIÓN DE ASISTENTES

function obtenerAsistentes() {
  servicioDatosProducto
    .getAll()
    .then((response) => {
      asistentes.value = response.data
      mostrar="no-ok";
      alert("bien")
    })
    .catch((e) => {
      console.log(e);
    });
    
}

onMounted(() => {
  obtenerAsistentes()
})


function borrarProductos(producto) {
  /*servicioDatosProducto
    
    .then((response) => {
      
    })
    .catch((e) => {
      
    });*/
}
function mostrarProducto(producto) {
  
}

function crearProducto() {
  // servicioDatosProducto.create( ................. );
}

// #############################################################
// ################ MONTADO DEL COMPONENTE######################

</script>

<template>
  <h2>Listado de Asistentes</h2>
  <div class="ef">
  <label for="idAsistenteFiltrar">Descripcion</label>
  <input id="idAsistenteFiltrar" type="text" placeholder="Producto a buscar" v-model="asistenteFiltrar" />
  </div>
  <div class="ef">
  <button type="button">Buscar</button>
  <button type="button">Recargar</button>
  </div>
  <ul>
    <li>
      <span class="li-nombre"> Agustin </span>
      <span class="li-descripcion"> Aguilera </span>
    </li>
  </ul>

  
  <h2>Mostrar Asistente</h2>

  <ul>
    <li v-for="(asistente, id) in asistentes" :key="id"> 
      <span class="li-nombre"> {{asistente.nombre}} </span>
      <span class="li-descripcion"> {{asistente.descripcion}} </span>
    </li> 
    <li class="li-imagen">
      <img src="http://google.es" alt="Imagen del Asistente" />
    </li>   
  </ul>  
  

  <h2>Formulario Insertar</h2>
  <form>
    <div class="ef">
      <label for="idNombre">Nombre</label>
      <input type="text" id="idNombre" />
    </div>
    <br />
    <div class="ef">
    <label for="idDescripcion">Descripcion</label>
    <input type="text" id="idDescripcion" />
    </div>
    <br />
    <div class="ef">
    <label for="idImagen">Imagen</label>
    <input type="text" id="idImagen" />
    </div>
    <br />
    <br />
    <div class="ef">
    <button type="submit">Crear</button>
    </div>
  </form>
</template>
<style scoped>
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
  float: left;
  background-color: lightslategray;
  text-align: center;
  padding: 1vh;
}
ul li span.li-descripcion {
  display: block;
  width: 60%;
  float: left;
  text-align: center;
  background-color: lightgray;
  margin-bottom: 1vh;
  padding: 1vh
}
ul li.li-imagen {
  text-align: center;  
}
ul li.li-imagen >img {
  max-width: 50%;  
}
@import url("https://fonts.googleapis.com/css?family=Bowlby+One+SC");
h2 {
  text-align: center;
  font-family: "Bowlby One SC", cursive;
  font-size: 3vw;
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
.ef{
  display: block;
}
.ef > label{
  text-align: center;
  display: inline;  
  float: left;
  width: 30%;
  font-weight: bold;
}
.ef > input{
  display: inline;
  float: left;
  width: 40vw;
  margin-bottom: 2vh;
}
.ef > button{
  display: block;
  float: right;
}
</style>