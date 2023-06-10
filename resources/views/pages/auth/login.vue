<template>
  <Head title="Login" />
  <!-- header start -->
  <header>
    <div class="custom-container">
      <div class="auth-title">
        <h1>Sign In</h1>
      </div>
    </div>
  </header>
  <!-- header end -->

  <!-- Sign section start -->
  <div class="custom-container">
    <form class="auth-form" @submit.prevent="login">
      <div class="form-group">
        <label for="inputemail" class="form-label">Email</label>
        <div class="form-input mb-4">
          <input
            type="text"
            class="form-control"
            id="inputemail"
            placeholder="Enter Email Address"
            v-model="form.email"
            name="
          email"
          />

          <i class="ri-user-line user"></i>
          <Error name="email" />
        </div>
      </div>

      <div class="form-group">
        <label for="inputPassword" class="form-label">Password</label>
        <div class="form-input">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Enter Your Password"
            v-model="form.password"
            name="password"
          />

          <i class="ri-door-lock-line"></i>
          <Error name="password" />
        </div>
      </div>

      <div class="forgot">
        <inertia-link :href="route('password.request')"
          >Forgot password?</inertia-link
        >
      </div>

      <div class="submit-btn">
        <ButtonVue
          class="btn theme-btn"
          type="submit"
          :disabled="form.processing"
        >
          <span
            class="spinner-border spinner-border-sm"
            v-if="form.processing"
          ></span>
          <span v-else>Log In</span>
        </ButtonVue>
      </div>
      <div class="division">
        <span>OR</span>
      </div>

      <h5 class="signup">
        Haven't registered?
        <inertia-link :href="route('register')"> Signup now </inertia-link>
      </h5>
    </form>
  </div>
  <!-- Sign section end-->
</template>

<script setup>
import { ref } from "vue";
import ButtonVue from "@/views/components/form/FormButton.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormLabel from "@/views/components/form/FormLabel.vue";
import { useForm } from "@inertiajs/vue3";
import InputGroup from "@/views/components/form/InputGroup.vue";
import Error from "@/views/components/alerts/error.vue";

let type = ref("password");
let icon = ref("mdi mdi-eye-outline");

const toggleType = (_) => {
  type.value = type.value == "password" ? "text" : "password";
  icon.value =
    icon.value == "mdi mdi-eye-outline"
      ? "mdi mdi-eye-off-outline"
      : "mdi mdi-eye-outline";
};

const form = useForm({
  email: "",
  password: "",
  remember: false,
});

const login = () => {
  form
    .transform((data) => ({
      ...data,
      remember: data.remember ? "on" : "",
    }))
    .post(route("login"), {
      replace: true,
    });
};
</script>

<style>
</style>
