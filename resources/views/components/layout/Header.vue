<template>
  
  <!-- header start -->
  <header class="section-t-space">
    <div class="custom-container">
      <div class="header-panel">
        <a href="">
          <i class="ri-notification-2-line"></i>
        </a>
        <a href="">
          <i class="ri-equalizer-line"></i>
        </a>
      </div>
    </div>
  </header>
  <!-- header end -->
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import feather from "feather-icons";
import { useTheme } from "@/stores/theme";
import { usePage } from "@inertiajs/vue3";
import { profile_picture } from "@/js/functions";
import { router } from "@inertiajs/vue3";
import route from "ziggy-js";

const user = computed(() => usePage().props.auth.user);
const is_admin = user.value.is_admin;

const locales = ref([
  {
    name: "English",
    short_name: "en",
    flag: "us.jpg",
  },
  {
    name: "Spanish",
    short_name: "es",
    flag: "spain.jpg",
  },
  {
    name: "German",
    short_name: "de",
    flag: "germany.jpg",
  },
  {
    name: "Italian",
    short_name: "it",
    flag: "italy.jpg",
  },
]);

const loadFlag = (flag) => {
  return `/storage/flags/${flag}`;
};

const locale = computed(() => usePage().props.app.locale);

const activeLocale = computed(
  () => locales.value.filter((loc) => loc.short_name == locale.value)[0]
);

const setLocale = (locale) =>
  router.post(route("set-locale", locale.short_name));

const theme = useTheme();

const appName = import.meta.env.VITE_APP_NAME;

// const toggleMode = theme.toggleTheme;

onMounted((_) => {
  theme.initTheme();
  feather.replace();
});

const toggleSidebar = (_) => {
  var body = document.body;
  var e = body.getAttribute("data-sidebar-size");
  body.classList.toggle("sidebar-enable");
  if (992 <= window.innerWidth) {
    if (null == e || e == "lg") {
      body.setAttribute("data-sidebar-size", (e = "sm"));
    } else {
      body.setAttribute("data-sidebar-size", (e = "lg"));
    }
    localStorage.setItem("sidebar-size", e);
  }
};
</script>

<style>
#notification-items-wrapper {
  max-height: 250px;
  overflow-y: scroll;
}
</style>
