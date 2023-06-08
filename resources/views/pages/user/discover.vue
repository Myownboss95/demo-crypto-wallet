<template>
  <Head title="Discover" />
  <!-- header start -->
  <header class="section-t-space">
    <div class="custom-container">
      <div class="header-panel">
        <a href="dashboard.html">
          <i class="ri-arrow-left-s-line"></i>
        </a>
        <h3 class="middle-title">Discover</h3>
      </div>
    </div>
  </header>
  <!-- header end -->

  <div class="custom-container mt-3 mb-5 text-light">
    <div
      style="color: white"
      class="cryptohopper-web-widget text-light"
      data-id="5"
      data-news_count="500"
      data-news_length="10"
    ></div>
    <div class="search-content">
        <button class="btn theme-btn btn-inline w-50 text-center" @click="reloadPage">Click to Load News</button>
      </div>
  </div>

  <!-- confirm offer section end -->
  <section class="panel-space"></section>
  <Sidebar />
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

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://www.cryptohopper.com/widgets/js/script";
  document.body.appendChild(script);
});

const reloadPage = () =>location.reload();
</script>