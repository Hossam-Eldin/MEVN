<template>
    <div>
  <div>{{$route.params.id}}</div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                post:'',
            }
        },
        created() {
/*             axios.get('')
            .then(res => {
                    this.post = res.data;
            })
            .catch(err => {
                console.log(err)
            })        */     
        },

    }
</script>

<style scoped>

</style>