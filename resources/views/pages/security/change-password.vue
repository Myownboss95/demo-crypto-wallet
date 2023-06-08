<template>
  <Head title="Change password" />
  <header>
    <div class="custom-container">
      <div class="auth-title">
        <h1>New Password</h1>
      </div>
    </div>
  </header>
  <!-- header end -->

  <!-- new password section start-->
  <div class="custom-container">
    <form class="auth-form" @submit.prevent="changePassword">
      <div class="form-group">
        <label for="inputPassword" class="form-label">Old Password</label>
        <div class="form-input mb-4">
          <FormGroup
            type="password"
            name="old_password"
            placeholder="Enter old password"
            v-model="form.old_password"
          />

          <i class="ri-door-lock-line"></i>
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="form-label">New Password</label>
        <div class="form-input mb-4">
          <FormGroup
            type="password"
            name="password"
            placeholder="Enter new password"
            v-model="form.password"
          />
          <i class="ri-door-lock-line"></i>
        </div>
      </div>

      <div class="form-group mb-4">
        <label for="inputPassword" class="form-label">Confirm Password</label>
        <div class="form-input">
          <FormGroup
            type="password"
            name="password_confirmation"
            placeholder="Enter new password again"
            v-model="form.password_confirmation"
          />

          <i class="ri-door-lock-line"></i>
        </div>
      </div>

      <div class="submit-btn d-flex w-100 mt-5 mb-3">
        <inertia-link
          :href="route('user.index')"
          class="btn gray-btn btn-inline w-100 text-center"
          >Cancel</inertia-link
        >

        <FormButton
          type="submit"
          class="btn theme-btn btn-inline w-100 text-center"
        >
          <ButtonLoader :loading="form.processing" text="Update Password" />
        </FormButton>
      </div>
    </form>
  </div>
  <!-- new password section end -->
  <section class="panel-space"></section>
  <Sidebar />
</template>

<script setup>
import Sidebar from "@/views/components/layout/sidebar.vue";
import Breadcrumb from "@/views/components/layout/breadcrumb.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormButton from "@/views/components/form/FormButton.vue";
import ButtonLoader from "@/views/components/form/ButtonLoader.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
  old_password: "",
  password: "",
  password_confirmation: "",
});

const changePassword = () => {
  form.post(route("password.change"), {
    onSuccess: () => form.reset(),
  });
};
</script>

<style>
</style>
