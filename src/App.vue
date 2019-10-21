<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
  #app {
    font-family: monospace;
    font-size: 1.2rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }
</style>
