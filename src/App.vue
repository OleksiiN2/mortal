<template>
  <div id="app">
    
    <selectWindow/>
  </div>
</template>

<script>
import selectWindow from './components/selectWindow.vue'

export default {
  name: 'App',
  components: {
    selectWindow
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
  margin-top: 60px;
}
html{
   background: grey;
}
</style>
