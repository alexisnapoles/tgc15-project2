<template>
  <div>

      <h1>Books Section</h1>

  </div>
</template>

<script>
const BASE_API_URI = "https://silid-aklatan-api.herokuapp.com"

import axios from 'axios'

export default {
  created: async function () {
    let response = await axios.get(BASE_API_URI + '/books');
    console.log(response.data);
  }
}
</script>

<style>

</style>