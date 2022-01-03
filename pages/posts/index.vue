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