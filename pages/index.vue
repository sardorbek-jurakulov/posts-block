<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <app-post-list :posts="loadedPost"></app-post-list>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';
export default {
  data() {
    return {
      loadedPost: [],
    };
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: [
          {
            id: '1',
            title: 'First Post',
            previewText: 'This is our first post!',
            thumbnail: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
          },
          {
            id: '2',
            title: 'Second Post',
            previewText: 'This is our second post!',
            thumbnail: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
          },
          {
            id: '3',
            title: 'Third Post',
            previewText: 'This is our third post!',
            thumbnail: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
          },
          {
            id: '4',
            title: 'Fourth Post',
            previewText: 'This is our fourth post!',
            thumbnail: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
          },
          {
            id: '5',
            title: 'Fifth Post',
            previewText: 'This is our fifth post!',
            thumbnail: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129668669/original/aac8282bcfe964e60b0753c8c8b04efe23a42207/design-you-static-website-in-vuejs-ans-nuxtjs.png',
          }
        ]
      });
    }, 1500);
  },
  components: {
    appPostList: PostList, 
  },
  created() {
    
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
</style>