<template>
  <div class="admin-post-page">
    <section class="update-from">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';
import axios from 'axios';
export default {
  layout: 'admin',
  asyncData(context) {
    return get('https://nuxt-blog-bdbbe-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' + context.params.id + '.json')
      .then()
      .catch(e => context.error(e)) {
      loadedPost: {
        author: 'Sardorbek',
        title: 'My awesome Post',
        content: 'Super amazing, thanks for that!',
        thumbnailLink: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
      }
    }
  },
  components: {
    AdminPostForm,
  }
}
</script>