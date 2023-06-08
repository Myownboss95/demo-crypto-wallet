<template>
    <Head title="Browser" />

    <!-- header start -->
  <header class="section-t-space">
    <div class="custom-container">
      <div class="header-panel">
        <inertia-linl :href="route('user.index')">
          <i class="ri-arrow-left-s-line"></i>
        </inertia-linl>
        <h3 class="middle-title">Browser</h3>
      </div>
    </div>
  </header>
  <!--header end -->

  <!-- empty search starts -->
  <section class="search-section section-t-space">
    <div class="custom-container">
      <form class="auth-form search-head">
        <div class="form-group">
          <div class="form-input">
            <input type="text" class="form-control" id="inputsearch" placeholder="Search" />
            <i class="ri-search-line"></i>
          </div>

          <a class="btn filter-button">
            <i class="ri-equalizer-line"></i>
          </a>
        </div>
      </form>
      <div class="search-content">
        <img class="img-fluid search-img" src="@/assets/images/search.png" alt="search" />
        <h3>Empty Browser History</h3>
      </div>
    </div>
  </section>
  <!-- empty Notification end -->

  <!-- confirm offer section end -->
  <section class="panel-space"></section>
  <Sidebar/>
</template>
<script setup>
import Sidebar from "@/views/components/layout/sidebar.vue";
    import { useForm } from "@inertiajs/vue3";
    import { ref, watch, reactive, onMounted } from "vue";
    import axios from "axios";
    import route from "ziggy-js";
    import { profile_picture } from "@/js/functions";
    import FormButton from "@/views/components/form/FormButton.vue";
    import ButtonLoader from "@/views/components/form/ButtonLoader.vue";
    import Error from "@/views/components/alerts/error.vue";
    import { info } from "@/js/toast";
    import { router } from "@inertiajs/vue3";

   
</script>