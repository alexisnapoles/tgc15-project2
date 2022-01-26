<template>
  <div >

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
        <Books v-if="page === 'books'" />
    </div>

  </div>
</template>

<!-- START SCRIPT -->
<script>
import SignupForm from '@/components/SignupForm'
import Home from "@/components/index"
import Books from "@/components/books"

export default {
  components: {
    SignupForm,
    Home,
    Books
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
  },
};
</script>


<!-- START STYLE -->
<style>

</style>
