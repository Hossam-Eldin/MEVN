<template>
  <div id="app">
    <div id="nav">
        <app-header></app-header>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
   <router-view/>
     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header/header.vue'

export default {
  name:'app',
      components: {
      'app-header': Header
    },
      created () {
      this.$store.dispatch('tryAutoLogin')
      //this.$store.dispatch('checkToken')
    }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
