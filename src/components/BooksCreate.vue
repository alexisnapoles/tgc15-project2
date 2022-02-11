<template>
  <div id="">
    <h1>ADD BOOKS</h1>
    <form action="POST">
      <!------------ URL ------------>
      <div class="form-group">
        <label for="inputImageUrl">Image URL:</label>
        <input
          type="url"
          class="form-control"
          id="inputUrl"
          v-model="url"
        />
      </div>
      <!------------ TITLE ------------>
      <div class="form-group">
        <label for="inputTitle">Title:</label>
        <input
          type="text"
          class="form-control"
          id="inputTitle"
          v-model="title"
        />
      </div>
      <!------------ AUTHOR ------------>
      <div class="form-group">
        <label for="inputAuthor">Author:</label>
        <input
          type="text"
          class="form-control"
          id="inputTitle"
          v-model="author"
        />
      </div>
      <!------------ SUMMARY ------------>
      <div class="form-group">
        <label for="inputSummary">Summary:</label>
        <textarea type="text" class="form-control" id="inputSummary" />
      </div>
      <!------------ GENRE ------------>
      <div class="form-group">
        <label for="inputGenre">Genre:</label>
        
      </div>
      <!------------ YEAR PUBLISHED ------------>
      <div class="form-group">
        <label for="inputYearPublished">Year of Publication:</label>
        <input
          type="number"
          class="form-control"
          id="inputYearPublished"
          v-model="yearPublished"
        />
      </div>
      <!------------ PUBLISHER ------------>
      <div class="form-group">
        <label for="inputPublisher">Publisher:</label>
        <input
          type="text"
          class="form-control"
          id="inputPublisher"
          v-model="publisher"
        />
      </div>
      <!------------ ISBN13 ------------>
      <div class="form-group">
        <label for="inputIsbn13">ISNB-13:</label>
        <input
          type="number"
          class="form-control"
          id="inputIsbn13"
          v-model="isbn13"
        />
      </div>
      <!------------ RATINGS ------------>
      <div>
      <label for="ratings">Ratings:</label>
      <b-form-input
        id="ratings"
        v-model="value"
        type="range"
        min="0"
        max="5"
        step="0.1"
      ></b-form-input>
      <div class="mt-2">Value: {{ value }}</div>
    </div>
      <!------------ RATINGS ------------>
      <div>
      <label for="datetime">Created At:</label>
      <b-form-input
        id="datetime"
        v-model="datetime"
        type="datetime-local"
      ></b-form-input>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BooksCreate',
  data() {
    return {
      value: ''
    }
  }
};
</script>

<style>
</style>