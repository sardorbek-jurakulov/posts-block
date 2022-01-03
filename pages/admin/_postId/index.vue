<template>
  <div class="admin-post-page">
    <section class="update-from">
      <AdminPostForm 
        :post="loadedPost" 
        @submit=""/>
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
  components: {
    AdminPostForm,
  }
}
</script>