<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="field">
                <label for="title" class="label">Title:</label>
                <input
                    id="title"
                    v-model="title"
                    name="title"
                    type="text" 
                    class="input is-normal" />
               
            </div>
            <div class="field">
                <label for="author" class="label">Author:</label>
                <input
                    id="author"
                    v-model="author"
                    name="author"
                    type="text" 
                    class="input is-normal" />
               
            </div>
            <div class="field">
                <label for="summary" class="label">Summary:</label>
                <textarea 
                    id="summary"
                    v-model="summary"
                    name="summary"
                    type="text" 
                    class="textarea">
                </textarea>
               
            </div>
            <label for="genre" class="label">Genre:</label>
            <div class="select ">
                <select v-model="genre" name="genre" id="genre">                
                    <option value="Fiction">Fiction</option>                
                    <option value="Non-Fiction">Non-Fiction</option>                
                    <option value="Mystery">Mystery</option>                
                    <option value="Thriller">Thriller</option>                
                    <option value="Sci-Fi">Sci-Fi</option>                
                    <option value="Self-help">Self-help</option>                
                    <option value="Science-and-Technology">Science and Technology</option>                
                    <option value="Business">Business</option>                
                    <option value="Travel">Travel</option>                
                    <option value="Fantasy">Fantasy</option>                
                    <option value="History">History</option>                
                    <option value="Action-and-Adventure">Action and Adventure</option>                
                    <option value="Literary">Literary</option>
                </select>                
            </div>
            <div class="field">
                <label for="yearPublished" class="label">Year Published:</label>
                <input 
                    id="yearPublished"
                    v-model.number="yearPublished"
                    name="yearPublished"
                    type="text" 
                    class="input is-normal" />
            </div>
            <div class="field">
                <label for="publisher" class="label">Publisher:</label>
                <input 
                    id="publisher"
                    v-model="publisher"
                    name="apublisher"
                    type="text" 
                    class="input is-normal" />
            </div>
            <div class="field">
                <label for="isbn13" class="label">ISBN-13:</label>
                <input 
                    id="isbn13"
                    v-model.number="isbn13"
                    name="isbn13"
                    type="text" 
                    class="input is-normal" />
            </div>
            <div class="field">
                <label for="ratings" class="label">Ratings:</label>
                    <input 
                    id="ratings"
                    v-model.number="ratings"
                    name="ratings"
                    type="text" 
                    class="input is-normal" />
            </div>
            <div class="field">
                <button 
                    @click="saveBook"
                    type="submit"
                    value="submit"
                    class="button is-info">
                Submit
            </button>
            </div>
        </div>
        <div v-else>
            <h4>Submitted successfully!</h4>
            <button class="button is-success" @click="newBook">Add</button>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import dataServices from "../services/dataServices";

export default {
    name: 'BooksCreate',
    data: function() {
        return {
            books: {
                title: '',
                author: '',
                summary: '',
                genre: [],
                yearPublished: '',
                publisher: '',
                isbn13: '',
                ratings: '',
            },
            submitted: false
        };
    },
    methods: {
        saveBook: function() {
            let data = {
                title: this.title,
                author: this.author,
                summary: this.summary,
                genre: this.genre,
                yearPublished: this.yearPublished,
                publisher: this.publisher,
                isbn13: this.isbn13,
                ratings: this.ratings,
            };
            dataServices.create(data)
                .then(res => {
                    this.books.id = res.data.id;
                    console.log(res.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        newBook: function() {
            this.submitted = false;
            this.books = {};
        }
    }
};
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>