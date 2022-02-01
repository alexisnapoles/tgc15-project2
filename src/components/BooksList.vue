<template>
  <div>
    <div class="container">
      <h1>Books Section</h1>

      <input type="text" v-model="title" />
      <button class="btn btn-success btn-sm" aria-current="page" v-on:click="booksCreate">+</button>
      
        <ul>
          <li v-for="(b, index) in filteredBooks" :key="index">{{b.title}}, {{b.author}}</li>
        </ul>
    </div>
    <div>
      <BooksCreate v-if="page==='create'"/>
    </div>
      
  </div>
</template>

<script>
const BASE_API_URI = "https://silid-aklatan-api.herokuapp.com"

import axios from 'axios'
import BooksCreate from '@/components/BooksCreate'

export default {
  components: {
    BooksCreate
  },
  data: function() {
    return {
      page: 'booksCreate',
      books: [],
      title: '',
    }
  },
  created: async function () {
    let response = await axios.get(BASE_API_URI + '/books');
    this.books = response.data;
    // console.log('created')
  },
  computed: {
    filteredBooks : function () {
      let filtered = this.books.filter((eachBook) => {
        return eachBook.title.toLowerCase().includes(this.title.toLowerCase())
      })
      return filtered;
    }
  },
  methods: {
    booksCreate: () => {
      this.page = 'create';
    }
  },
}
</script>

<style>

</style>