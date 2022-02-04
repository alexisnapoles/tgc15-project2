<template>
  <div id="app">
    <div id="nav">
      |
      <router-link to="/">Home</router-link> |
      <router-link to="/list">Bookshelf</router-link> | 
      <router-link to="/about">About</router-link> |
      <router-link to="/create">Add Book</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<!-- START SCRIPT -->
<script>
export default {
  name: "app",
 };
</script>


<!-- START STYLE -->
<style scoped>
#app {
  font-family: "Avenir", Helvitica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: goldenrod;
}
</style>

<!-- 
    component functional render match component path 
    without this cannot change page
    render active page w/o refreshing
    small refetch needed small data
    faster when comes page changes
    render content page if content === 'component page'
    converted to <a> tag

    ========
    USAGE:
    router-link === internal links
    a tag === external link
-->