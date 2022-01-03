<template>
  <div class="admin-post-page">
    <section class="update-from">
      <AdminPostForm 
        :post="loadedPost" 
        @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';
import axios from 'axios';
export default {
  layout: 'admin',
  asyncData(context) {
    return axios.get('https://nuxt-blog-bdbbe-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' + context.params.postId + '.json')
      .then(res => {
        return {
          loadedPost: res.data,
        }
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedPost) {
      axios.put('https://nuxt-blog-bdbbe-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' + this.$route.params.postId + '.json', editedPost)
        .then(res => {
          this.$router.push('/admin');
        })
        .catch(e => console.log(e));
    },
  },
  components: {
    AdminPostForm,
  }
}
</script>