<script setup>

import { ref, reactive } from'vue';
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

import servicioAficiones from '@/servicios/personal/servicioAficiones.js' ;

const rutas = useRouter();
let password = ref()
let usuario = ref()

//función acceder - inicio sesión
function acceder(){
    if (usuario.value !== "" && password.value !== ""){
        servicioAficiones
            .findByUsuario(window.btoa(usuario.value+password.value))
            .then((res) => {
                if(res.data.length !== 0){
                    localStorage.setItem("usuario", usuario.value)
                    rutas.go()
                    correcto("has iniciado sesión")
                } else {
                    error("usuario o contraseña incorrecto")
                }
            }) .catch((err) => {
                error("fallo")
            })
    }
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
    title: mensaje
  })
}
</script>

<template>
    <div class="form-container">
        <h2>Iniciar Sesión</h2>
        <form action="#" method="post" @submit.prevent="acceder()">
            <div class="form-group">
                <label for="username">Nombre de Usuario:</label>
                <input v-model="usuario" type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input v-model="password" type="password" id="password" name="password" required>
            </div>
            <button type="submit">Acceder</button>
        </form>
    </div>

</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.form-container {
    width: 300px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.form-container h2 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    font-weight: bold;
}

.form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}


</style>
