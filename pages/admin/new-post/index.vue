<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
<<<<<<< HEAD
      <form action="http://echo.htmlacademy.ru" method="">
        
      </form>
=======
      <AdminPostForm />
>>>>>>> 5b8438da6b3b9430a53f4ee12f4688bfc1954144
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';
export default {
  layout: 'admin',
  components: {
    AdminPostForm,
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>