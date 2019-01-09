<template>
  <div>

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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>   
             <button class="btn btn-info" type="button" @click="edit(15)">Edit</button>
            <button class="btn btn-dnager" type="button" @click="onDelete(15)">Delete</button>   
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
          this.posts = res.data;
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