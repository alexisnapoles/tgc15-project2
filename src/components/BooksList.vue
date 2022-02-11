<template lang="html">
  <div>
    <div>
      <h1>LIST OF BOOKS</h1>
    </div>
    <div>
      <b-input-group class="mt-3">
        <b-form-input
          type="search"
          placeholder="Search by author or title"
          v-model="searchAuthor"
        >
        </b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success" @click="searchQuery">
            <b-icon icon="search"></b-icon>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Title</th>
          <th scope="col">Year of Publication</th>
          <th scope="col">Ratings</th>
        </tr>
      </thead>
      <tbody>
        <tr 
        v-for="(b, index) in books"
        :key="index"
        >
          <td class="book-author">{{b.author}}</td>
          <td class="book-title">{{b.title}}</td>
          <td class="book-yearPublished">{{b.yearPublished}}</td>
          <td class="book-ratings">{{b.ratings}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "BooksList",
  data() {
    return {
      books: [],
      url: "",
      title: "",
      author: "",
      summary: "",
      genre: [],
      yearPublished: "",
      publisher: "",
      isbn13: "",
      ratings: "",
      datetime: "",
    }
  },
  methods: {

  },
  computed: {
    results: function() {
      let filteredResults = this.books.filter((book) => {
        return book.author.toLowerCase().inlcudes(this.searchAuthor.toLowerCase())
      })
      return filteredResults;
    }
  },
  created: async function() {
    console.log('Component created')
    let res = await axios.get('https://silid-aklatan-api.herokuapp.com/books')
    console.log(res.data);
    this.books = res.data;
  },
  mounted: function() {
    console.log('mounted')
  }
};
</script>

<style>
</style>