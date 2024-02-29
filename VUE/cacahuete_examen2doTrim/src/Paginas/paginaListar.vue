<script setup>
import servicioAficiones from "../servicios/personal/servicioAficiones.js";
import { ref, onMounted, reactive, watch } from "vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import { rewriteDefaultAST } from "vue/compiler-sfc";

let aficiones = ref(null);
let imagenURL = ref();

//variables para el div mostrar afición:
let nombreDetalles = ref();
let descDetalles = ref();
  //variable booleana para usar en el v-show y mostrar o no el apartado:
let verDetalles = false;

//variable del campo filtrar
let filtro = ref("");

//variable que se usa para recargar página
const rutas = useRouter()

let aficion = reactive({
  nombre: "",
  descripcion: "",
  urlimg: "",
});

/*************************************/
/************Obtener aficion***********/
/*************************************/
function obtenerAficiones() {
  servicioAficiones
    .getAll()
    .then((response) => {
      //la respuesta del getAll se la asigno a aficoines, que es la lista que se muestra.
      aficiones.value = response.data;
    })
    .catch((error) => {
      informacionError("Error al recuperar las aficiones...");
    });
}

//función watcher para validar campo filtro:
let nuevoValor = ref()
let viejoValor = ref()
watch(filtro, (nuevoValor, viejoValor) => {
  //si el nuevo valor que estamos introduciendo supera los 10 caracteres
  //sale alerta y no permite seguir escribiendo, se queda el texto en 10 car.
  if ( nuevoValor.length > 10){
    alert("demasiados carácteres")
  }
})

/*****************************************/
/************Filtrar & Refrescar**********/
/*****************************************/
function filtrar(){
  //si el campo filtro no está vacío procedo:
  //a la función findByNombre le paso el value del campo filtro,
  //y si su respuesta no es 0, si tiene valor, entonces a la lista aficiones
  //le doy dicho valor para que se muestre la lista solo con el valor filtrado.
  // y lilmpiamos valor
  if(filtro.value !== ""){
    servicioAficiones
    .findByNombre(filtro.value)
    .then((res) => {
      if (res.data.length !== 0){
        aficiones.value = res.data
        filtro.value = ""
        informacionCorrecto("Afición encontrada")
      } else {
        //si la respuesta es 0, mensaje de error y limpio campo
        filtro.value = ""
        informacionError("No existe esa afición")
      }
    }) .catch((err) => {
      console.error(err);
      informacionError("Algo ha fallado")
    })
  } else {
    //y si damos a buscar sin poner valor, sale mensaje:
    informacionError("Pon un nombre para buscar")
  }

}


//para refrescar llamamos a la función obtenerAficiones
//que actualiza la lista a los objetos json al hacer getAll:
function refrescar(){ 
  filtro.value =""
  obtenerAficiones()
}

/*************************************/
/************Mostrar aficion***********/
/*************************************/

//pongo en true variable verDetalles para usar en el v-show del div y mostrar contenido.
//y asigno el valor de cada atributo de la afición que recibe
//al valor de las variables del div para que se muestren los datos.
function mostrarAficion(aficion) {
  verDetalles = true;
  imagenURL.value = aficion.urlimg
  nombreDetalles.value = aficion.nombre
  descDetalles.value = aficion.descripcion
}

//pongo en false variable para que se deje demostrar al llamar a la función.
// y actualizo valores a vacío.
function ocultarAficion() {
  verDetalles = false
  imagenURL.value = ""
  nombreDetalles.value = ""
  descDetalles.value = ""
  //location.reload(); 
}

/*************************************/
/************Borrar aficion***********/
/*************************************/
function borrarDatos(aficion) {
  //si se le da a confimar, procedo:
  //llamamos a delete enviando el id de la afición.
  if(confirm("¿Seguro que quieres borrar esta afición?")){
    servicioAficiones
      .delete(aficion.id)
      .then((res) => {
        //creamos indice con el indice del valore de la respuesta
        //y con función splice, elimino de la lista aficiones
        //el valor de ese indice.
        //recargo con rutas.go para actualizar lista.
        //y mensaje de confirmación.
        let index = aficiones.value.indexOf(res.data)
        aficiones.value.splice(index,1)
        rutas.go()
        informacionCorrecto("Has borrado la afición")
      }) .catch((err) => {
        //para mostrar en consola el error
        console.error(err);
        informacionError("No has borrado")
      })
  }
}

//llamo a la funciçon obtener aficiones desde onMounted para ejecutar
//el getAll al montar/iniciar la página.
onMounted(() => {
  obtenerAficiones();
});

function informacionError(mensaje) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: mensaje,
  });
}

function informacionCorrecto(mensaje) {
  Swal.fire({
    title: "Buen trabajo",
    text: mensaje,
    icon: "success",
  });
}
</script>

<template>
  <div class="filtros">
   <form class="form-buscar"> 
    <label for="">
      Nombre de la aficion:
      <input type="text" v-model="filtro" />
    </label>

    <button @click.prevent="filtrar"> Buscar </button>
    <button @click.prevent="refrescar"> Refrecar </button>
  </form>
  </div>

  <h1>MI LISTA DE AFICIONES :D</h1>
  <ul>
    <li
      v-for="(aficion, id) in aficiones"
      :key="id"      
    >
    <!-- 
      añado eventos que reciben afición:
        @dblciclk con mostrar aficion en el span nombre
        @click en los botones para borrarDatos y mostrarAfición.
      y añado variables para aficion.nombre y afición.descripcion con doble {{  }}
        para mostrar los valores.
     -->
      <span @dblclick.prevent="mostrarAficion(aficion)" class="li-nombre"> {{ aficion.nombre }}</span>
      <span class="li-descripcion"
        >{{ aficion.descripcion }}
        <button @click.prevent="borrarDatos(aficion)" class="eliminar" >X</button>
        <button @click.prevent="mostrarAficion(aficion)" class="ver">ver</button>        
      </span>
    </li>
  </ul>
  <!-- -------------------------------------------- -->
  <!-- ZONA DE HTML PARA MOSTRAR AFICIÓN INDIVIDUAL -->
   <!-- -------------------------------------------- -->
   <!-- 
    añado directiva v-show al div general con condicion si verDetalles es true, se muestra.
    añadimos nombre de variables:
      para la imagenURL con v-bind ":"
      para nombreDetalles y descDetalles con doble {{  }}
    y añado evento al botón con @click llamando a la función ocultarAficion.
  -->
  <div v-show="verDetalles != false" class="mostrar-aficion">
    <img class="imagen-izquierda" alt="" :src="imagenURL"/>
    <div class="contenido-derecha">
      <p><span> Nombre : {{ nombreDetalles }}</span></p>
      <p><span>Descripción: {{ descDetalles }}</span></p>
       <button @click.prevent="ocultarAficion">X</button>
    </div>
  </div>  
</template>

<style scoped>

/******    Formulario FILTRAR *******/
.filtros { 
  display: flex;
  padding: 15px;
  justify-content: center;
  gap: 20px;
}

.filtros form {
  flex-basis: 40%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
}


.filtros form label {
  display: block;
  margin-bottom: 10px;
}

.filtros form input[type="text"],
.filtros form button[type="submit"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
}

.filtros form button {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filtros form button:hover {
  background-color: green;
}



/* Boton elminar */
.eliminar {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}

.eliminar:hover {
  background-color: darkred;
}

/* Boton Ver */
.ver {
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}

.ver:hover {
  background-color: darkgreen;
}

/* Mostrar Afición*/
.mostrar-aficion {
  display: flex;
  max-width: 800px;
  align-items: center;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 80%;
  margin: auto;
}

.mostrar-aficion span {
  font-weight: bold;
  margin: 10px;
}

.imagen-izquierda {
  margin-right: 20px;
  width: 180px;
  height: 200px;
}

.contenido-derecha {
  flex: 1;
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
  float: left;
  background-color: lightslategray;
  text-align: center;
}
ul li span.li-descripcion {
  display: block;
  width: 60%;
  float: left;
  text-align: right;
  background-color: lightgray;
  margin-bottom: 1vh;
}

h2 {
  text-align: center;

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

h1 {
  font-weight: bold;
  text-shadow: darkorchid;
}
</style>
