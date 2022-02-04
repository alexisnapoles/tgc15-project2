<template>
  <div id="app">

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="" class="navbar-item">
          <img src="" alt="">
        </a>

        <a role="button" 
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarList"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarList" class="navbar-menu">
        <div class="navbar-start"></div>
      </div>
    </nav>
    <div>
        <Home v-if="page === 'home'" />
        <BooksList v-if="page === 'books'" />

    </div>

  </div>
</template>

<!-- START SCRIPT -->
<script>
import Home from "@/components/index"
import BooksList from "@/components/BooksList"


export default {
  name: "app",
  components: {
    Home,
    BooksList,
  },
  data: function(){
    return {
      page: 'home'
    };
  },
  methods: {
    home: function () {
      this.page = 'home';
    },
    books: function () {
      this.page = 'books'
    },
    // booksCreate: function () {
    //   this.page = 'create'
    // }
  },
};
</script>


<!-- START STYLE -->
<style lang="scss">


</style>
