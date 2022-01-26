<template>
    <div>
        <div>
            <label>Title:</label>
            <input type="text" v-model="title" />
        </div>
        <div>
            <label>Author:</label>
            <input type="text" v-model="author" />
        </div>
        <div>
            <label>Summary:</label>
            <textarea type="text" v-model="summary"></textarea>
        </div>
        <div>
            <label>Genre:</label>
            <multiple-select inline-template>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <select-2 options="options" name="fiction" v-model="selected" multiple=true></select-2>
                            <pre class="code">
                                <p v-text="selected"></p>
                            </pre>
                        </div>
                    </div>
                </div>
            </multiple-select>
        </div>
    </div>
</template>

<script> 
    export default {
        // data: ()=>{
        //     return{
        //          select2data: []
        //     }
        // },
        // mounted(){
        //     this.formatOptions()
        //     let vm = this
        //     let select = $(this.$el)
        //     select 
        //         .select2({
        //             placeholder: 'Select',
        //             theme: 'bootstrap',
        //             width: '100%',
        //             allowClear: true,
        //             data: this.select2data
        //         })
        //         .on('change', () => {
        //             vm.$emit('input', select.val())
        //         })
        //         select.val(this.value)
        // },
        // component: ('select-2', {
        //     template: '<select v-bind:name="name" class="form-control" v-bind:multiple="multiple"></select>',
        //     props: {
        //         name: '',
        //         options: {
        //             Object
        //         },
        //         value: null,
        //         multiple: {
        //             Boolean,
        //             default: false
        //         }
        //     },
        // })
    }
</script>

<style lang="scss" scoped>

</style>