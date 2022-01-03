<template>
  <div class="admin-post-page">
    <section class="update-from">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';
export default {
  layout: 'admin',
  asyncData(context) {
    return get('https://nuxt-blog-bdbbe-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' + context.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data,
        }
      })
      .catch(e => context.error(e));
  },
  components: {
    AdminPostForm,
  }
}
</script>