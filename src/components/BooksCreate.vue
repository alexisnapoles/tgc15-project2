<template>
    <div>
        <form 
            @submit="checkForm"
            method="POST">
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                <li 
                    v-for="error in errors"
                    :error="error"
                    :key="error">{{ error }}</li>
                </ul>
            </p>
            <div>
                <label class="form-label">Title:</label>
                <input
                    id="title"
                    v-model="title"
                    name="title"
                    type="text" 
                    class="form-control" />
            </div>
            <div>
                <label class="form-label">Author:</label>
                <input
                    id="author"
                    v-model="author"
                    name="author"
                    type="text" 
                    class="form-control" />
            </div>
            <div>
                <label class="form-label">Summary:</label>
                <textarea 
                    id="summary"
                    v-model="summary"
                    name="summary"
                    type="text" 
                    class="form-control">
                </textarea>
            </div>
            <div>
                <label class="form-label">Genre:</label>
                <select 
                    id="genre"
                    v-model="genre"
                    name="genre">
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="mystery">Mystery</option>
                    <option value="business">Business</option>
                    <option value="travel">Travel</option>
                </select>
            </div>
            <div>
                <label class="form-label">Year Published:</label>
                <input 
                    id="yearPublished"
                    v-model="yearPublished"
                    name="yearPublished"
                    type="text" 
                    class="form-control" />
            </div>
            <div>
                <label class="form-label">Publisher:</label>
                <input 
                    id="publisher"
                    v-model="publisher"
                    name="apublisher"
                    type="text" 
                    class="form-control" />
            </div>
            <div>
                <label class="form-label">ISBN-13:</label>
                <input 
                    id="isbn13"
                    v-model="isbn13"
                    name="isbn13"
                    type="text" 
                    class="form-control" />
            </div>
            <div>
                <label class="form-label">Ratings:</label>
                <input 
                    id="ratings"
                    v-model="ratings"
                    name="ratings"
                    type="text" 
                    class="form-control" />
            </div>
        </form>
        <button 
            type="submit"
            value="submit"
            class="btn btn-primary mb-3 my-2">
            Add Book
        </button>
    </div>
</template>

<script> 
    export default {
        name: 'BooksCreate',
        data: function() {
            return {
            errors: [],
               title: '',
               author: '',
               summary: '',
               genre: [],
               yearPublished: '',
               publisher: '',
               isbn13: '',
               ratings: '',
            }
        },
        methods: {
            checkForm: function(e) {
                if (
                    this.title && 
                    this.author &&
                    this.summary &&
                    this.genre &&
                    this.yearPublished &&
                    this.publisher &&
                    this.isbn13 &&
                    this.ratings) {
                    return true;
                }
                this.errors = [];

                if (!this.title) {
                    this.errors.push('Title required.');
                }
                if (!this.author) {
                    this.errors.push('Author required.');
                }
                if (!this.summary) {
                    this.errors.push('Summary required.');
                }
                if (!this.genre) {
                    this.errors.push('Genre required.');
                }
                if (!this.yearPublished) {
                    this.errors.push('Year of Publication required.');
                }
                if (!this.publisher) {
                    this.errors.push('Publisher required.');
                }
                if (!this.isbn13) {
                    this.errors.push('ISBN-13 required.');
                }
                if (!this.ratings) {
                    this.errors.push('Ratings required.');
                }
                e.preventDefault();
            }
        }

    };
</script>

<style lang="scss" scoped>

</style>