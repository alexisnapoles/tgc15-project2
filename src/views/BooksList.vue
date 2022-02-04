<template>
  <div id="app">
    <!-- <div class="container"> -->
      <h1>Books Section</h1>
      <div class="field has-addons">
        <div class="control">
          <input 
            v-model="title"
            class="input" 
            type="text" 
            placeholder="Search by title">
        </div>
        <div class="control">
          <button class="button is-info" @click="searchTitle">
            Search
          </button>
        </div>
      </div>
      <h2>Books List</h2>
      <ul>
        <li
          class="card"
          :class="{ active: index == currentIndex }"
          v-for="(b, index) in books"
          :key="index"
          @click="setActiveBook(b, index)">
          {{ b.title }}
        </li>
      </ul>
      <button class="button is-danger" @click="removeAllBooks">Remove All</button>
      <div class="column">
        <div v-if="currentBook">
          <h4>Book</h4>
          <div>
            <label for="title">Title:</label>
            {{ currentBook.title }}
          </div>
          <div>
            <label for="author">Author:</label>
            {{ currentBook.author }}
          </div>
          <div>
            <label for="ratings">Ratings:</label>
            {{ currentBook.ratings }}
          </div>
          <router-link to="'/books/' + currentBook.id" class="notification is-warning">Edit</router-link>
        </div>
        <div v-else>
          <br/>
          <p>Please click on a Book...</p>
        </div>
      </div>
      <router-view/>
  </div>
</template>

<script>
import dataServices from "../services/dataServices"

export default {
    name: 'BooksList',
  // components: {
  //   'add': BooksCreate,
  //   'update': BooksUpdate,
  //   'delete': BooksDelete
  // },
  data: function() {
    return {
      books: [],
      currentBook: null,
      currentIndex: -1,
      title: '',
      author: '',
      ratings: ''
    };
  },
  methods: {
    retrieveBooks() {
      dataServices.getAll()
        .then(res => {
          this.books = res.data;
          console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveBooks();
      this.currentBook = null;
      this.currentIndex = -1;
    },
    setActiveBook(b, index) {
      this.currentBook = b;
      this.currentIndex = b ? index : -1;
    },
    removeAllBooks() {
      dataServices.deleteAll()
        .then(res => {
          console.log(res.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTitle() {
      dataServices.findByTitle(this.title)
        .then(res => {
          this.books = res.data;
          this.setActiveBook(null);
          console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        })
    },
    searchAuthor() {
      dataServices.findByAuthor(this.author)
        .then(res => {
          this.book = res.data;
          this.setActiveBook(null);
        })
    }
  },
  mounted: function() {
    this.retrieveBooks();
  }

}
</script>

<style>

</style>