<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="30">
    <h1>{{titulo}}</h1>
    <p :style="colorTotal">Mi total: {{total}}</p>
     <button @click="accionAccion(5)">Aumentar</button>
      <BotonDisminuir />
     <p> {{$store.state.otra}}</p>
    
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';//siempre que se mapee el state para traer alguna propiedad hacerlo de las propiedades computadas
import BotonDisminuir from '../components/BotonDisminuir'
//LAS MUTACIONES SE HACEN DESDE METODOS NO DE COMPUTED
export default {
  name: 'Home',
  components: {
    BotonDisminuir
  },
  data() {
    return {
      titulo: 'Mi proyecto con vuex'
    }
  },
  methods: {
    ...mapActions(['accionAccion'])
  },
  computed : {
    ...mapState(['total']), 
    colorTotal() {
      return this.total>=100? {'color': 'green'} : {'color': 'red'}
    }
    //operador de propagación hace que podamos acceder a un objeto
    // dentro de el podemos preguntar por las propiedades que tienen dentro
  }
}
</script>
