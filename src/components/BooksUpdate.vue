<template>
    <div>
        <div v-if="currentBook" class="update-form">
            <h4>Book Details</h4>
            <form>
                <div class="field">
                    <label for="title" class="label">Title:</label>
                    <input
                        id="title"
                        v-model="currentBook.title"
                        name="title"
                        type="text" 
                        class="input is-normal" />
                </div>
                <div class="field">
                    <label for="author" class="label">Author:</label>
                    <input
                        id="author"
                        v-model="currentBook.author"
                        name="author"
                        type="text" 
                        class="input is-normal" />
                </div>
                <div class="field">
                    <label for="summary" class="label">Summary:</label>
                    <textarea 
                        id="summary"
                        v-model="currentBook.summary"
                        name="summary"
                        type="text" 
                        class="textarea">
                    </textarea>
                </div>
                <div class="field">
                    <label for="genre" class="label">Genre:</label>
                    <div class="select ">
                        <select v-model="currentBook.genre" name="genre" id="genre">                
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
                </div>
                <div class="field">
                    <label for="yearPublished" class="label">Year Published:</label>
                    <input 
                        id="yearPublished"
                        v-model.number="currentBook.yearPublished"
                        name="yearPublished"
                        type="text" 
                        class="input is-normal" />
                </div>
                <div class="field">
                    <label for="publisher" class="label">Publisher:</label>
                    <input 
                        id="publisher"
                        v-model="currentBook.publisher"
                        name="apublisher"
                        type="text" 
                        class="input is-normal" />
                </div>
                <div class="field">
                    <label for="isbn13" class="label">ISBN-13:</label>
                    <input 
                        id="isbn13"
                        v-model.number="currentBook.isbn13"
                        name="isbn13"
                        type="text" 
                        class="input is-normal" />
                </div>
                <div class="field">
                    <label for="ratings" class="label">Ratings:</label>
                        <input 
                        id="ratings"
                        v-model.number="currentBook.ratings"
                        name="ratings"
                        type="text" 
                        class="input is-normal" />
                </div>
            </form>
            <button class="tag is-danger"
                    @click="deleteBook">
            Delete
            </button>
            <button class="tag is-success"
                    @click="updateBook"
                    type="submit">
            Update
            </button>
            <p>{{ message }}</p>
        </div>
        <div v-else>
            <br/>
            <p>Please click on a Book...</p>
        </div>
    </div>
</template>

<script setup>
import dataServices from '../services/dataServices';

export default {
    name: 'BooksUpdate',
    data: function () {
        return {
            currentBook: null,
            message: '',
        };
    },
    methods: {
        getBook(_id) {
            dataServices.get(_id)
                .then(res => {
                    this.currentBook = res.data;
                    console.log(res.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        updateBook() {
            dataServices.update(this.currentBook._id, this.currentBook)
                .then(res => {
                    console.log(res.data);
                    this.message = 'Book successfully upated!';
                })
                .catch(e => {
                    console.log(e);
                });
        },
        deleteBook() {
            dataServices.delete(this.currentBook._id)
                .this(res => {
                    console.log(res.data);
                    this.$router.push({ name: 'BooksList' })
                    // this.message = "Book deleted!"
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
    mounted: function() {
        this.message = '';
        this.getBook(this.$route.params._id)
    }
};
</script>

<style scoped>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>