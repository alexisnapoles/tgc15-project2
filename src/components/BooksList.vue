<template>
  <div>
    <div>
      <h1>LIST OF BOOKS</h1>
    </div>
    <div>
        <b-form-input
          type="search"
          id="searchInput"
          v-model="searchQuery"
          :state="state"
          placeholder="Search by title or by author"
        >
        </b-form-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BooksList',

};
</script>

<style>
</style>