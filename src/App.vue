<template>
  <div id="app">
    <header>
      <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/list">Bookshelf</router-link></li> 
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/create">Add Book</router-link></li>
      </ul>
    </nav>
    </header>
    <router-view/>
  </div>
</template>

<!-- START SCRIPT -->
<script>
export default {
  name: "app",
 };
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
