<template>
    <!-- header start -->
  <header>
    <div class="custom-container">
      <div class="auth-title">
        <h1>Enter New Password</h1>
      </div>
    </div>
  </header>
  <!-- header end -->

  <!-- new password section start-->
  <div class="custom-container">
    <form class="auth-form" @submit.prevent="resetPassword">
      <div class="form-group">
        <label for="inputPassword" class="form-label">New Password</label>
        <div class="form-input mb-4">
          <input type="password" class="form-control" id="inputPassword" placeholder="Enter New Password" name="password" v-model="form.password" />
          <i class="ri-door-lock-line"></i>
        </div>
      </div>

      <div class="form-group mb-4">
        <label for="inputPassword" class="form-label">Confirm Password</label>
        <div class="form-input">
          <input type="password" name="password_confirmation" class="form-control" id="inputnewPassword" placeholder="Enter Confirm Password"  v-model="form.password_confirmation"/>
          <i class="ri-door-lock-line"></i>
        </div>
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
        <span v-else>Continue</span>
      </ButtonVue>
      </div>
    </form>
  </div>
  <!-- new password section end -->


</template>

<script setup>
import authVue from "@/views/layouts/auth.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import ButtonVue from "@/views/components/form/FormButton.vue";
import { useForm } from "@inertiajs/vue3";
import route from "ziggy-js";
import { watch } from "vue";
import { error } from "@/js/toast";

const props = defineProps(["errors"]);

watch(
  () => props.errors,
  (errors) => {
    console.log(errors);
    if ("email" in errors) {
      error(errors.email);
    }
  }
);

const resetPassword = () => {
  const routeParams = route().params;

  form
    .transform((data) => ({
      ...data,
      email: routeParams.email,
      token: routeParams.token,
    }))
    .post(route("password.update"));
};

const form = useForm({
  password: "",
  password_confirmation: "",
});
</script>

<style>
</style>
