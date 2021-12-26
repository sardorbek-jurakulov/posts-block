<template>
  <div class="posts-page">
    <app-post-list isAdmin></app-post-list>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  components: {
    appPostList: PostList,
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