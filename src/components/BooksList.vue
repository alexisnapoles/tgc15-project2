<template>
  <div id="app">
    <!-- <div class="container"> -->
      <h1>Books Section</h1>
      <div class="field has-addons search-edit">
        <div class="control">
          <input 
            v-model="title"
            class="" 
            type="text" 
            placeholder="Search by title">
        </div>
        <div class="control">
          <button class="" @click="searchTitle">
            Search
          </button>
        </div>
      </div>
      <h2>Books List</h2>
      <ul class="box">
        <li
          class=""
          :class="{ active: index == currentIndex }"
          v-for="(b, index) in books"
          :key="index"
          @click="setActiveBook(b, index)">
          {{ b.title }}
        </li>
      </ul>
      <button class="" @click="removeAllBooks">Remove All</button>
      <div class="column">
        <div v-if="currentBook" class="media-left">
          <div class="">
            <label for="title"><strong>Title:</strong></label>
            {{ currentBook.title }}
          </div>
          <div>
            <label for="author"><strong>Author:</strong></label>
            {{ currentBook.author }}
          </div>
          <div>
            <label for="ratings"><strong>Ratings:</strong></label>
            {{ currentBook.ratings }}
          </div>
          <router-link :to="'/update/'+ currentBook._id" class="tag is-medium is-warning">Edit</router-link>
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
import server from "../server/server"

export default {
  name: 'BooksList',
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
      server.getAll()
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
    searchTitle() {
      server.findByTitle(this.title)
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
      server.findByAuthor(this.author)
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
