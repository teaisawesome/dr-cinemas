<template>
    <div class="login-form-container">
      <LoginForm/>
    </div>
</template>
<script>
  // @ is an alias to /src
  import LoginForm from '@/components/login/LoginForm.vue'
  export default {
    name: 'LoginView',
    components: {
        LoginForm
    }
  }
</script>