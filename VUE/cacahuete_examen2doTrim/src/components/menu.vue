<script setup>
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { ref } from "vue";

const props = defineProps({
  titulo: String,
  links: Array,
});

const rutas = useRouter()

//variable usuario que cojo del local para mostrar en info-usuario
let usuario
if (localStorage.getItem("usuario") !== null){
  usuario = localStorage.getItem("usuario")
}

//función cerrar sesión
function cerrarSesion(){
  localStorage.removeItem("usuario")
  //recargo página
  rutas.go()
}

</script>


<template>
  <h1>{{ titulo }}</h1>

  <div class="info-usuario">
    Bienvenid@ : {{ usuario }}
    <button @click="cerrarSesion">Cerrar Sesion</button>
  </div>
  <nav class="menu">
    <RouterLink
      v-for="enlace in props.links"
      :key="enlace"
      :to="{ name: enlace }"
    >
      <span class="enlace-menu"> {{ enlace }} </span>
    </RouterLink>
  </nav>
</template>

<style scoped>
.info-usuario {
  width: 100;
  text-align: right;
}
.menu {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 3px;
}
h1 {
  text-align: center;
  font-size: 3vh;
}

.menu > a {
  flex-basis: 20%;
  text-align: center;
  background-color: #000;
  border: 1px solid gray;
  color: #fff;
  padding: 15px;
  text-decoration: none;
  text-align: center;
}

span.enlace-menu:hover {
  background-color: #fff;
  color: #000;
  border-radius: 30px;
  padding: 20px;
  border: 5px solid grey;
}
nav {
  margin-bottom: 2vh;
}

button {
  display: inline-block;
  /* width: 30px; */
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>