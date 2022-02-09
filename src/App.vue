<template>
  <div id="app">
    <BooksListVue/>
  </div>
</template>

<script>
import BooksListVue from "./components/BooksList.vue"


export default {
  name: 'App',
  components: {
   BooksListVue
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
