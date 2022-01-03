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
          loadedPost: { ...res.data, id: context.params.postId },
        }
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then(() => {
          this.$router.push('/admin');
        })
    },
  },
  components: {
    AdminPostForm,
  }
}
</script>