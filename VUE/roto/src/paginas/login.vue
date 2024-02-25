<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from "sweetalert2"
import servicioAficiones from '@/servicios/personal/servicioAficiones';

/**Variables */
let usuario = ref()
const rutas = useRouter()
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

function acceder(){
    if(usuario.value!="" && password.value!=""){
    servicioAficiones.findByUsuario(window.btoa(usuario.value+password.value))
    .then((res)=>{
        if(res.data.length===0){
            error("el usuario no existe")
            //localStorage.setItem("usuario",null)
        }else{
            localStorage.setItem("usuario",usuario.value)
            rutas.go();
            correcto("has iniciado sesión")
        }
    })
    .catch((er)=>{
      error("algo ha salido mal")
      console.error(er);
    })
    } 

}
</script>

<template>
<h2>Iniciar Sesión</h2>
<form action="#" method="post" @submit.prevent="acceder()">
    <div>
        <label for="username">Nombre de Usuario:</label>
        <input v-model="usuario" type="text" id="username" name="username">
    </div>

    <div>
        <label for="password">Contraseña</label>
        <input v-model="password" type="password" id="password" name="password" >
    </div>
    <button>Inicar sesión</button>
   
</form>
</template>
