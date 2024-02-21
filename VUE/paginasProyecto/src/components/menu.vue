<script setup>
import { RouterLink} from 'vue-router';
import { useRouter } from "vue-router";
import {ref} from "vue";

const props = defineProps({
    "titulo":String,
    "links":Array,
})

let usuario 
if (localStorage.getItem("usuario") != null){
    usuario = localStorage.getItem("usuario")
}

const rutas = useRouter();

function cerrarSesion(){
    localStorage.removeItem('usuario');
    location.reload();
    alert("Has cerrado sesión.")
}


</script>

<template> 
    <h1>{{ titulo }}</h1>
    <h3 v-if="usuario">Sesión iniciada como:  {{ usuario }}</h3>
    <div v-if="usuario" class="form-container">
        <button type="submit" @click="cerrarSesion">Cerrar sesión</button>
    </div>

    <nav>
        <RouterLink
         v-for="enlace in props.links"
         :key="enlace"
         :to="{ name: enlace }">
           <span class="enlace-menu"> {{ enlace }} </span>
        </RouterLink>        
    </nav>
</template>

<style scoped>

.form-container {
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 5px;
}
span.enlace-menu{
    display:inline-block;
    padding:5px 10px;
    background-color:#000;
    border:1px solid #000;
    text-align:center;
    color:#fff;    
}
span.enlace-menu:hover{
    background-color:#fff;
    color:#000;
}
nav{
    margin-bottom: 2vh;
    display: flex;
    justify-content: space-evenly;
    background-color: #000;
}

</style>