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
  const nuevo = ref('')
  const lista = ref([
    { id: id++, texto: 'HTML' },
    { id: id++, texto: 'JavaScript' },
    { id: id++, texto: 'Vue' }
  ])

  function anadeNuevo() {
    lista.value.push({
      id: id++,
      texto: nuevo.value
    })
    nuevo.value = '';
  }

  function borrar(index) {
    lista.value.splice(index, 1);
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

    <form @submit.prevent="anadeNuevo">
      <input v-model="nuevo">
      <button>Añade</button>    
    </form>
    <ul>
      <li v-for="elemento in lista" :key="texto.id">
        {{ elemento.texto }}
        <button @click="borrar(index)">X</button>
      </li>
    </ul>

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

</style>
