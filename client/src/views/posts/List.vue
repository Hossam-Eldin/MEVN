<template>
  <div>
    {{posts}}
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">text</th>
          <th scope="col">actions</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="(post, index) in posts" :key="index">
          <th scope="row">1</th>
          <td>{{post.titel}}</td>
          <td>{{post.text}}</td>
          <td>   
             <button class="btn btn-info " type="button" @click="edit(15)">Edit</button>
            <button class="btn btn-danger " type="button" @click="onDelete(15)">Delete</button>   
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: ""
    };
  },
  methods: {
    edit(id) {
      this.$router.push({ name: "onePost", params: { id: id } });
    },
  
    onDelete(id){
      axios.delete('',)
      .then(res => {

       })
      .catch(err => {

       })
    },
    fetchPosts() {
      axios
        .get("http://localhost:3000/posts/")
        .then(res => {
          console.log(res);
          this.posts = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<style scoped>
</style>