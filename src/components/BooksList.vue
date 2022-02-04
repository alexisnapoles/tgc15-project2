<template>
  <div>
    <div class="container">
      <h1>Books Section</h1>
      <input
        class="form-control" 
        type="text" 
        v-model="title" 
      />
      <button 
        class="btn btn-success btn-sm" 
        v-on:click="component='add'">
        Add
      </button>
      <button 
        class="btn btn-success btn-sm" 
        v-on:click="component='update'">
        Update
      </button>
      <button 
        class="btn btn-success btn-sm" 
        v-on:click="component='delete'">
        Delete
      </button>
      <component v-bind:is="component"></component>
      <div>
        <ul>
          <li 
            v-for="(b, index) in filteredBooks" 
            :key="index">
              {{b.title}} <br/> 
              {{b.author}} <br/>
              {{b.ratings}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BooksCreate from '@/components/BooksCreate'
import BooksUpdate from '@/components/BooksUpdate'
import BooksDelete from '@/components/BooksDelete'
const BASE_API_URI = "https://silid-aklatan-api.herokuapp.com"
import axios from 'axios'


export default {
  components: {
    'add': BooksCreate,
    'update': BooksUpdate,
    'delete': BooksDelete
  },
  data: function() {
    return {
      component: 'BooksList',
      books: [],
      title: '',
      ratings: ''
    }
  },
  // created before rendering
  created: async function () {
    let response = await axios.get(BASE_API_URI + '/books');
    this.books = response.data;
    // console.log('created')
  },
  computed: {
    filteredBooks : function () {
      let filtered = this.books.filter((eachBook) => {
        return eachBook.title
                .toLowerCase()
                .includes(this.title.toLowerCase())
      })
      return filtered;
    }
  },
}
</script>

<style>

</style>