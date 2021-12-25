<template>
  <div>
    <section class="post-list">
      <app-post-preview
        id="1"
        thumbnail="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png"
        title="First Post!"
        previewText="This my first post!"
      ></app-post-preview>
      <app-post-preview
        id="2"
        thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1200px-Nuxt_logo.svg.png"
        title="Second Post!"
        previewText="This my second post!"
      ></app-post-preview>
      <app-post-preview
        id="3"
        thumbnail="https://blog.hashinteractive.com/wp-content/uploads/2020/03/nuxtserverinit-vuex.jpg"
        title="Third Post!"
        previewText="This my third post!"
      ></app-post-preview>
      <app-post-preview
        id="4"
        thumbnail="https://cosmicbeach2k.com/img/vue.js/nuxt-js-how-to-load-plugins-in-component.png"
        title="Fourth Post!"
        previewText="This my fourth post!"
      ></app-post-preview>
      <app-post-preview
        id="5"
        thumbnail="https://avatars.mds.yandex.net/i?id=f4efc7e03082ba1234a93acbf328f2c9-4283505-images-thumbs&n=13"
        title="Fifth Post!"
        previewText="This my fifth post!"
      ></app-post-preview>
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview';

export default {
  components: {
    appPostPreview: PostPreview,
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>