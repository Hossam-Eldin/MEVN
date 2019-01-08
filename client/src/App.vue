<template>
  <div id="app">
    <div id="nav">
        <app-header></app-header>
    </div>
    <router-view/>
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
