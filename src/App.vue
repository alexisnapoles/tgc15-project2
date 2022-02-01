<template>
  <div id="app">

    <div class="container-fluid">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <button class="nav-link" aria-current="page" v-on:click="home">Home</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" v-on:click="books">Books</button>
                </li>
            </ul>
        </div>

    <div>
        <Home v-if="page === 'home'" />
        <BooksList v-if="page === 'books'" />
        <!-- <BooksCreate v-if="page === 'create'" /> -->
    </div>

  </div>
</template>

<!-- START SCRIPT -->
<script>
// import SignupForm from '@/components/SignupForm'
import Home from "@/components/index"
import BooksList from "@/components/BooksList"
// import BooksCreate from '@/components/BooksCreate'

export default {
  name: "app",
  components: {
    // SignupForm,
    Home,
    BooksList,
    // BooksCreate
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
<style>

</style>
