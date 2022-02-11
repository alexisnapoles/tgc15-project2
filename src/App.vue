<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <img
          src="./assets/logoSA.png"
          alt="logo"
          class="d-inline-block align-center"
          width="50px"
        />
        Silid Aklatan
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><b-link to="/">Home</b-link></b-nav-item>
          <b-nav-item><b-link to="/list">Bookshelf</b-link></b-nav-item>
          <b-nav-item><b-link to="/about">About</b-link></b-nav-item>
          <b-nav-item><b-link to="/create">Add Book</b-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
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
  text-align: auto;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
