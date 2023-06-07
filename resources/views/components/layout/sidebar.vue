<template>
  <!-- ========== Left Sidebar Start ========== -->
  <!-- side bar start -->
  <div
    class="offcanvas sidebar-offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasLeft"
  >
    <div class="offcanvas-header">
      <!-- <img
        class="img-fluid img"
        alt="pro11"
      /> -->
      <h3>{{ username }}</h3>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="sidebar-content">
        <ul class="link-section">
          <li>
            <inertia-link :href="route('user.profile.view')" class="pages">
              <h3>My Profile</h3>
              <i class="ri-arrow-drop-right-line"></i>
            </inertia-link>
          </li>
          <li>
            <inertia-link :href="route('user.deposits.create')" class="pages">
              <h3>Deposit</h3>
              <i class="ri-arrow-drop-right-line"></i>
            </inertia-link>
          </li>
          <li>
            <inertia-link :href="route('user.index')" class="pages">
              <h3>Withdraw</h3>
              <i class="ri-arrow-drop-right-line"></i>
            </inertia-link>
          </li>
          <li>
            <inertia-link :href="route('user.index')" class="pages">
              <h3>Link Wallet</h3>
              <i class="ri-arrow-drop-right-line"></i>
            </inertia-link>
          </li>
          <li>
            <inertia-link method="post"
              as="button"
              class="pages my-button"
              :href="route('logout')"
              replace>
              <h3>Logout</h3>
              <i class="ri-arrow-drop-right-line"></i>
            </inertia-link>
          </li>

          
        </ul>
      </div>
    </div>
  </div>
  <!-- side bar end -->
  <!-- Left Sidebar End -->
  <!-- bottom navbar start -->
  <div class="navbar-menu">
    <ul>
      <li class="active">
        <inertia-link :href="route('user.index')">
          <div class="icon">
            <i class="ri-shield-fill active"></i>
            <i class="ri-shield-fill unactive"></i>
          </div>
          <span>Wallet</span>
        </inertia-link>
      </li>
      <li>
        <inertia-link :href="route('user.send.index')">
          <div class="icon">
            <i class="ri-compass-3-fill active"></i>
            <i class="ri-compass-3-fill unactive"></i>
          </div>
          <span>Transactions</span>
        </inertia-link>
      </li>
      <li>
        <a
          class="plus"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasLeft"
        >
          <i class="ri-add-line plus-icon"></i>
        </a>
      </li>
      <li>
        <inertia-link :href="route('user.profile.view')">
          <div class="icon">
            <i class="ri-layout-grid-fill active"></i>
            <i class="ri-layout-grid-fill unactive"></i>
          </div>
          <span>Profile</span>
        </inertia-link>
      </li>
      <li>
        <inertia-link :href="route('user.settings')">
          <div class="icon">
            <i class="ri-settings-5-fill active"></i>
            <i class="ri-settings-5-fill unactive"></i>
          </div>
          <span>Settings</span>
        </inertia-link>
      </li>
    </ul>
  </div>
  <!-- bottom navbar end -->
</template>

<script setup>
import { computed, onMounted } from "vue";
import feather from "feather-icons";
// import MetisMenu from "metismenujs";
import SidebarItem from "./sidebarItem.vue";
import { usePage } from "@inertiajs/vue3";

const is_admin = computed(() => usePage().props.auth.user.is_admin == 1);
const username = computed(() => usePage().props.auth.user.first_name);

const botsMenu = computed(() =>
  is_admin == true ? "Trade Bots" : "Trade Bot"
);
const stakes = computed(() => (is_admin == true ? "All Stakes" : "My Stakes"));

onMounted((_) => {
  // new MetisMenu("#side-menu");
  feather.replace();
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
  color:white;
  /* Add your custom styles */
  /* ... */
}
</style>
