<template>
    <div>
        <form @submit.prevent="onSubmit" enctype="multipart/form-data" > 


        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" v-model="title" >
        </div>

        <div class="form-group">
                <label for="text">Text</label>
                <textarea v-model="text" id="text" class="form-control"></textarea>
        </div>
        
        <div class="form-group">
            <label for="image">Image</label>
            <input type="file" ref="image" @change="onChange" id="image">
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary"> Save</button>
        </div>


        </form>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                title:null,
                text:null,
                image:null
            }
        },
        methods: {
            onChange(event) {
                this.image  = event.image.files[0];
                console.log(this.image);
            },
            onSubmit() {
                  
                let formData = new FormData();
               // formData.append('image', this.image);
                formData.append('title', this.title);
                formData.append('text', this.text);


                 axios.post('http://localhost:3000/posts/create', formData)
                .then(res  =>  {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })                  
            }
        },
    }
</script>

<style scoped>

</style>