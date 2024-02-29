<script setup>
import servicioAficiones from "@/servicios/personal/servicioAficiones.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
import router from "@/router/index.js";
import Swal from "sweetalert2";

/* Creamos variable usuario */
let usuario = ref("");
let contrasenia = ref("");

//varible que se usa para recargar página.
const rutas = useRouter();

function iniciar() {
  if (usuario !== "" && contrasenia !== "") {
    servicioAficiones
      //compruebo clave concantenando usuario y contraseña
      //la clave se compone de nombre+contraseña
      //de esta manera comprobamos tanto el usuario como la contraseña.
      .findByUsuario(window.btoa(usuario.value+contrasenia.value))
      .then((response) => {
          if (response.data.length !== 0){
            //si lo que encuentra, la respuesta no es 0, añado el valor usuario al local
            // y recargo página.
            localStorage.setItem("usuario", usuario.value)
            rutas.go()
          } else {
            //si la respuesta es nula, mensaje de error.
            informacionError("Usuario o contraseña incorrectos.")
          }
      })
      .catch((error) => {
        informacionError("algo ha salido mal")
        console.error(error);
      });
  }
}

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
  <form action="">
    <label>
      Usuario:
      <input type="text" v-model="usuario" placeholder="usuario" />
    </label>
    <label>
      Contraseña
      <input
        type="password"
        v-model="contrasenia"   
        placeholder="Contraseña"
      />
    </label>
    <button @click.prevent="iniciar()">Iniciar</button>
  </form>
</template>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  
}

form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;  
}

form  button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

form button:hover {
  background-color: #0056b3;
}
</style>