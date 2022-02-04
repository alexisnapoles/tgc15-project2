<template>
    <div>
        <!-- <form 
            @submit.prevent="checkForm"
            method="POST"
            autocomplete="off"> -->
            <div>
                <label for="title" class="form-label">Title:</label>
                <input
                    id="title"
                    v-model="form.title"
                    name="title"
                    type="text" 
                    class="form-control" />
                <!-- <p v-if="!titleIsValid" class="error-message">The title field is required</p> -->
            </div>
            <div>
                <label for="author" class="form-label">Author:</label>
                <input
                    id="author"
                    v-model="form.author"
                    name="author"
                    type="text" 
                    class="form-control" />
                <!-- <p v-if="!authorIsValid" class="error-message">The author field is required</p> -->
            </div>
            <div>
                <label for="summary" class="form-label">Summary:</label>
                <textarea 
                    id="summary"
                    v-model="form.summary"
                    name="summary"
                    type="text" 
                    class="form-control">
                </textarea>
                <!-- <p v-if="!summaryIsValid" class="error-message">The summary field is required</p> -->
            </div>
            <div>
                <label for="genre" class="form-label typo__label">Genre:</label>
                
            </div>
            <div>
                <label for="yearPublished" class="form-label">Year Published:</label>
                <input 
                    id="yearPublished"
                    v-model.number="form.yearPublished"
                    name="yearPublished"
                    type="text" 
                    class="form-control" />
                    <!-- <p v-if="!yearPublishedIsValid" class="error-message">The year of publication field is required</p> -->
            </div>
            <div>
                <label for="publisher" class="form-label">Publisher:</label>
                <input 
                    id="publisher"
                    v-model="form.publisher"
                    name="apublisher"
                    type="text" 
                    class="form-control" />
                    <!-- <p v-if="!publisherIsValid" class="error-message">The publisher field is required</p> -->
            </div>
            <div>
                <label for="isbn13" class="form-label">ISBN-13:</label>
                <input 
                    id="isbn13"
                    v-model.number="form.isbn13"
                    name="isbn13"
                    type="text" 
                    class="form-control" />
                    <!-- <p v-if="!isbn13IsValid" class="error-message">The ISBN-13 field is required</p> -->
            </div>
            <div>
                <label for="ratings" class="form-label">Ratings:</label>
                <!-- <validation-provider rules="required" v-slot="{ errors }"> -->
                    <input 
                    id="ratings"
                    v-model.number="form.ratings"
                    name="ratings"
                    type="text" 
                    class="form-control" />
                    <!-- <span>{{errors[0]}}</span>
                </validation-provider> -->
            </div>
            <div>
                <button 
                    v-on:click="addBook()"
                    type="submit"
                    value="submit"
                    class="btn btn-primary mb-3 my-2">
                Add Book
            </button>
            </div>
        <!-- </form> -->
        
    </div>
</template>

<script>
// import axios from 'axios'

export default {
    name: 'BooksCreate',
    components: {

    },
    // data: function() {
    //     return {
    //         form: {
    //             title: '',
    //             author: '',
    //             summary: '',
    //             genre: '',
    //             yearPublished: '',
    //             publisher: '',
    //             isbn13: '',
    //             ratings: '',
    //         },
    //     }
    // },
    // methods: {
    //     addBook: function() {
    //         axios.post('https://silid-aklatan-api.herokuapp.com/books', {
    //             headers: {
    //                 'Content-type': 'application/x-www-form-urlencoded',
    //             },
    //             body: [
    //                 this.title,
    //                 this.author,
    //                 this.summary,
    //                 this.genre,
    //                 this.yearPublished,
    //                 this.publisher,
    //                 this.isbn13,
    //                 this.ratings,
    //             ]
    //         })
            
    //     }
    // }
};
</script>

<style>

</style>