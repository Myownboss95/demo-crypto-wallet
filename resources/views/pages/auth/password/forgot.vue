<template>
    <!-- header start -->
  <header>
    <div class="custom-container">
      <div class="auth-title">
        <h1>Forgot Password</h1>
      </div>
    </div>
  </header>
  <!-- header end -->

  <!-- forgot password start-->
  <div class="custom-container">
    <form class="auth-form" @submit.prevent="sendInstructions">
      <div class="form-group">
        <label for="inputusername" class="form-label">Email</label>
        <div class="form-input">
          
          <input type="email" v-model="form.email" class="form-control" id="inputusername" placeholder="Enter Your Email" />
          <Error name="password_confirmation" />
          
          <i class="ri-mail-line"></i>
        </div>
      </div>

      <div class="submit-btn">
        <FormButton
        class="btn theme-btn"
        type="submit"
        :disabled="form.processing"
      >
        <span
          class="spinner-border spinner-border-sm"
          v-if="form.processing"
        ></span>
        <span v-else>Send OTP</span>
      </FormButton>
      </div>
    </form>
  </div>
  <!-- forgot password end -->

 
</template>

<script setup>
import FormButton from "@/views/components/form/FormButton.vue";
import { useForm } from "@inertiajs/vue3";
import { watch } from "vue";
import { info } from "@/js/toast";
import FormGroup from "@/views/components/form/FormGroup.vue";
import Error from "@/views/components/alerts/error.vue";

const props = defineProps(["flash"]);

watch(
  () => props.flash,
  (newValue) => {
    info(newValue.status);
  }
);

const form = useForm({
  email: "",
});

const sendInstructions = () => {
  form.post(route("password.email"));
};
</script>


<style>
</style>
