<template>
  <Head title="Confirm Transaction" />
  <!-- confirm offer title starts -->
  <!-- setting section start -->
  <section class="section-lg-t-space section-lg-b-space">
    <div class="custom-container">
      <ul class="setting-list">
        <li>
          <inertia-link :href="route('user.index')" class="setting-details">
            <div class="setting-icon">
              <i class="ri-wallet-3-line"></i>
            </div>
            <h4>My Wallet</h4>
            <div class="setting-arrow">
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </inertia-link>
        </li>
        <li>
          <inertia-link
            :href="route('user.onboard.wallet-key')"
            class="setting-details"
          >
            <div class="setting-icon">
              <i class="ri-money-dollar-circle-line"></i>
            </div>
            <h4>Link wallet</h4>
            <div class="setting-arrow">
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </inertia-link>
        </li>

        <li>
          <inertia-link
            :href="route('password.change')"
            class="setting-details"
          >
            <div class="setting-icon">
              <i class="ri-translate"></i>
            </div>
            <h4>Change Password</h4>
            <div class="setting-arrow">
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </inertia-link>
        </li>
        <li>
          <inertia-link
            :href="route('user.profile.view')"
            class="setting-details"
          >
            <div class="setting-icon">
              <i class="ri-user-add-line"></i>
            </div>
            <h4>Edit Profile</h4>
            <div class="setting-arrow">
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </inertia-link>
        </li>
        <li>
          <inertia-link
            method="post"
            as="button"
            class="setting-details my-button"
            :href="route('logout')"
            replace
          >
            <div class="setting-icon">
              <i class="ri-logout-circle-r-line"></i>
            </div>
            <h4>Log out</h4>
            <div class="setting-arrow">
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </inertia-link>
        </li>
      </ul>
    </div>
  </section>
  <!-- setting section end -->
  <section class="panel-space"></section>
  <Sidebar />
</template>
<script setup>
import Sidebar from "@/views/components/layout/sidebar.vue";
import { computed } from "@vue/runtime-core";
import FormGroup from "@/views/components/form/FormGroup.vue";
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
import { copy } from "@/js/functions";
import Paginator from "@/views/components/paginator.vue";

const props = defineProps({
  data: Object,
});
</script>
<style scoped>
.my-button {
  /* Resetting default button styles */
  appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  /* Add your custom styles */
  /* ... */
}
</style>