<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
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
import PostPreview from '@/components/Posts/PostPreview.vue';
export default {
  components: {
    appPostPreview: PostPreview, 
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/thumbnail.png');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>