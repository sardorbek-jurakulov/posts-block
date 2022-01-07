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
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  asyncData(context) {
    return context.app.$axios.$get(process.env.baseUrl + '/posts/' + context.params.postId + '.json')
      .then(data => {
        return {
          loadedPost: { ...data, id: context.params.postId },
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