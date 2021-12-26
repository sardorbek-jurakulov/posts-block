<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      
    </section>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput.vue';
import AppButton from '@/components/UI/AppButton.vue';
export default {
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: '',
      }
    }
  },
  methods: {
    onSave() {
      // Save the post
      console.log(this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin');
    }
  },
  components: {
    AppControlInput,
    AppButton
  }
}
</script>