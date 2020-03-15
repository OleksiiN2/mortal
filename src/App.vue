<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
   name: 'App'  
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
  background-image: linear-gradient(  rgb(167,167,167), rgb(81,81,81) );
  background-size:cover; 
  background-repeat: repeat;
}

</style>
