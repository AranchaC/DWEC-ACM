<script setup>

import { ref, reactive } from'vue';
import { useRouter } from "vue-router";

import servicioAficiones from '@/servicios/personal/servicioAficiones.js' ;

const rutas = useRouter();
let password = ref()
let usuario = ref()

function acceder(){

    if (usuario !== "" && password !== "") {


    servicioAficiones.findByUsuario(window.btoa(usuario.value+password.value))
        .then((response) => {

            if (response.data.length === 0) {
                alert("el usuario no existe")
                localStorage.setItem("usuario", null)
                console.log(usuario.value)
                console.log(password.value)
            }
            else {
                localStorage.setItem("usuario", usuario.value)

                //Recargar Página
                //Opción 1:  
                //location.reload();

                //Opción 2: 
                rutas.go();
            }
            // console.log(response.data.length)
                

        })
        .catch((error) => {
            alert("usuario incorrecto")
            console.log(error);
            console.log(usuario.value)
            console.log(password.value)

        })
    }  
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
