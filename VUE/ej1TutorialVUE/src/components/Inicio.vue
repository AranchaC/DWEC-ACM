<script setup>

  defineProps({
    msg: {
      type: String,
      required: true
    }
  })

  import { ref, reactive } from 'vue'

  // Variables de estilos:
  const tituloRojo = ref('titulo')
  const textoPurple = ref('texto')
  const estiloBoton = ref('boton')

  const mensaje = ref('¡HOLA MUNDO!')
  const contador = reactive({ 
    cuenta: 0 ,
    limite: 100
  })
  contador.cuenta=3
  contador.limite=1000
  mensaje.value = "Hola Arancha."

  function incremento() {
    contador.cuenta++;
  }

  const texto = ref('')

  const increible = ref(true)
  function descubre () {
    increible.value = !increible.value
  }

  //Ej 7:
  let id = 0;
  const dni = ref('')
  const nuevo = ref('')
  const lista = ref([
    { id: id++, dni:"55555555B", texto: 'HTML' },
    { id: id++, dni:"11111111B", texto: 'JavaScript' },
    { id: id++, dni:"88888888B", texto: 'Vue' }
  ])


  function anadeNuevo() {
    lista.value.push({
      dni: dni.value,
      texto: nuevo.value
    })
    nuevo.value = '';
    dni.value = '';
  }

  function borrar(index) {
    lista.value = lista.value.filter((t) => t !== index)
  }

  function limpiar() {
    nuevo.value = '';
    dni.value = '';
  }

</script>

<template>
  <div>

    <h1 :class="tituloRojo">{{ mensaje }}</h1>
	  <p>La cuenta es: {{ contador.cuenta }}</p>
    <p>El límite es: {{ contador.limite }}</p>

    <button :class="estiloBoton" @click="incremento">La cuenta es: {{ contador.cuenta }}</button>
    <br><br>

    <input v-model="texto" placeholder="Escribe aquí.">
    <p :class="textoPurple">Tu texto es: {{ texto }}</p>
    <br><br>

    <button @click="descubre">Descubre</button>
    <h1 v-if="increible">¡VUE es increíble!</h1>
    <h1 v-else>Oh no 😢</h1>
    <br><br>

    <!-- ej7 -->
    <!-- <form @submit.prevent="anadeNuevo">
      <label for="">Texto</label>
      <input v-model="nuevo">
      <label for="">DNI</label>
      <input v-model="dni">
      <button>Añade</button>  
    </form>
    <button @click="limpiar">Limpiar datos</button>  

    <ul>
      <li v-for="elemento in lista" :key="elemento.dni">
        {{ elemento.dni }} - {{ elemento.texto }}
        <button @click="borrar(elemento)">X</button>
      </li>
    </ul> -->

  </div>
</template>

<style scoped>
  .titulo {
    color: red;
  }

  .texto {
    color: purple;
    font-weight: bold;
  }

  .boton {
    background-color: aqua;
    &:hover{
      background-color: violet;
    }
  }

  input{
    display: block;
  }

</style>
