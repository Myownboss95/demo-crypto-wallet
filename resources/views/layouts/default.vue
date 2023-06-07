<script setup>
import HeaderVue from "../components/layout/Header.vue";
import HeaderAdminVue from "../components/layout/HeaderAdmin.vue";
import SidebarVue from "../components/layout/sidebar.vue";
import SidebarAdminVue from "../components/layout/sidebaradmin.vue";
import { watch, computed, onMounted, onBeforeMount } from "vue";
import { error, success } from "@/js/toast";

// import "@/assets/css/app.css";
import { usePage } from "@inertiajs/vue3";

const is_admin = computed(() => usePage().props.auth.user.is_admin == 1);
onBeforeMount(() => {
  if (is_admin.value) {
    loadAdminCSS();
  } else {
    loadAppCSS();
  }
});
async function loadAdminCSS() {
  await import("@/assets/css/sapp.css");
}

async function loadAppCSS() {
  await import("@/assets/css/app.css");
  await import("@/assets/css/remixicon.css");
}

const props = defineProps(["errors", "flash"]);
watch(
  () => props.errors,
  (errors) => {
    if ("error" in errors && errors.error != null && errors.error != "") {
      error(errors.error);
    }
  }
);

watch(
  () => props.flash,
  (flashes) => {
    if (
      "success" in flashes &&
      flashes.success != null &&
      flashes.success != ""
    ) {
      success(flashes.success);
    } else if (
      "error" in flashes &&
      flashes.error != null &&
      flashes.error != ""
    ) {
      error(flashes.error);
    }
  }
);
</script>


<style>
</style>
<template>
  <div id="layout-wrapper" v-if="!is_admin">
    <HeaderVue />
    <SidebarVue />

    <!-- Main content -->

    <slot />
  </div>
  <div id="layout-wrapper" v-if="is_admin">
    <HeaderAdminVue />
    <SidebarAdminVue />

    <!-- Main content -->
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <!-- Page Content -->
          <slot />
          <!-- End page content -->
        </div>
        <!-- container-fluid -->
      </div>

      <!-- End Page-content -->
      <footer class="footer">
        <div class="container-fluid">
          <div class="text-end">{{ new Date().getFullYear() }} © Minia.</div>
        </div>
      </footer>
    </div>
  </div>
</template>



