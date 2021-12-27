<template>
  <div class="posts-page">
    <app-post-list :posts="loadedPosts"></app-post-list>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  components: {
    appPostList: PostList,
  },
  fetch(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
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
      }, 1000);
      // reject(new Error());
    })
    .then(data => {
      context.store.commit('setPost', data.loadedPosts);
    })
    .catch(e => {
      context.error(new Error());
    });
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>