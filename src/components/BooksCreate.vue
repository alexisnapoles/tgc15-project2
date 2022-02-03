<template>
    <div>
        <form >
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    v-model="title" />
            </div>
            <div>
                <label>Author:</label>
                <input 
                    type="text" 
                    v-model="author" />
            </div>
            <div>
                <label>Summary:</label>
                <textarea 
                    type="text" 
                    v-model="summary">
                </textarea>
            </div>
            <div>
                <label>Genre:</label>
                
            </div>
            <div>
                <label>Year Published:</label>
                <input 
                    type="text" 
                    v-model="yearPublished" />
            </div>
            <div>
                <label>Publisher:</label>
                <input 
                    type="text" 
                    v-model="publisher" />
            </div>
            <div>
                <label>ISBN-13:</label>
                <input 
                    type="text" 
                    v-model="isbn13" />
            </div>
            <div>
                <label>Ratings:</label>
                <input 
                    type="text" 
                    v-model="ratings" />
            </div>
        </form>
    </div>
</template>

<script> 
    export default {
       
    }
</script>

<style lang="scss" scoped>

</style>