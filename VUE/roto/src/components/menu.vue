<script setup>
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { ref } from 'vue';

const props = defineProps({
  "titulo": String,
  "links": Array,
});

let usuario;
if(localStorage.getItem("usuario")!=null){
  console.log("alerta de sesion iniciada")
  usuario= localStorage.getItem("usuario")
}

const rutas = useRouter();

function cerrarSesion() {
localStorage.removeItem("usuario");
rutas.go();
}
</script>

<template>
  <h3 v-if="usuario">Sesion iniciada con: {{ usuario }}</h3>
  <div v-if="usuario">
    <button type="submit" @click="cerrarSesion">Cerrar Sesión</button>
  </div>

  <nav>
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
span.enlace-menu {
  display: inline-block;
  width: 33%;
  padding: 5px 10px;
  background-color: #000;
  border: 1px solid #000;
  text-align: center;
  color: #fff;
}
span.enlace-menu:hover {
  background-color: #fff;
  color: #000;
}
nav {
  margin-bottom: 2vh;
}
</style>
