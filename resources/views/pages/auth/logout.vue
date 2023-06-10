<template>
  <!-- header start -->
  <header>
    <div class="custom-container">
      <div class="auth-title">
        <h1>You are Logged Out</h1>
      </div>
    </div>
  </header>
  <!-- header end -->
  <div class="custom-container">
    <div class="submit-btn" style="margin-top: 120px; margin-bottom: 10px">

    <inertia-link
            :href="route('login')"
            class="btn theme-btn w-100"
            replace
            >
                Login Again
            </inertia-link>
    </div>
    <div class="division">
        <span>OR</span>
      </div>
    <h5 class="signup">
      <span
          class="text-primary fw-semibold cursor-pointer text-center"
          :href="route('front.index')"
          @click="goHome"
        >
          Or go back home <i class="bx bx-home"></i>
      </span>
      </h5>
  </div>




 
</template>

<script setup>
import authVue from '@/views/layouts/auth.vue';
import { onBeforeMount } from "vue";
  onBeforeMount(() => {
  
  import("@/assets/css/app.css");
 
});

  const goHome = ()=>window.location.replace(route('front.index'))
</script>

<script>
  export default {
    layout: authVue,
  };
</script>
<style>
</style>
