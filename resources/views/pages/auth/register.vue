<template>
  <Head title="Register" />
   <header>
    <div class="custom-container">
      <div class="auth-title">
        <h1>Create an Account</h1>
      </div>
    </div>
  </header>
  <!-- header start-->

  <div class="custom-container">
    <form class="auth-form" @submit.prevent="submit">
      

      <div class="form-group mb-3">
        <label for="inputusername" class="form-label">Email</label>
        <div class="form-input">
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

      <div class="form-group mb-3">
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
      <div class="form-group">
        <label for="inputConfirmPassword" class="form-label">Confirm Password</label>
        <div class="form-input">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Confirm Password"
            v-model="form.password_confirmation"
            name="password_confirmation"
          />

          <i class="ri-door-lock-line"></i>
          <Error name="password_confirmation" />
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

      <div class="division">
        <span>OR</span>
      </div>

      <h5 class="signup">
        Already have an account ?
        <inertia-link :href="route('login')"> Sign in now </inertia-link>
      </h5>
    </form>
    <!-- Sign Form end -->
  </div>
  
    
  
</template>

<script setup>
import FormGroup from "@/views/components/form/FormGroup.vue";
import { useForm } from "@inertiajs/vue3";
import InputGroup from "@/views/components/form/InputGroup.vue";
import FormButton from "@/views/components/form/FormButton.vue";
import { ref } from "@vue/reactivity";
import Error from "@/views/components/alerts/error.vue";

const type = ref("password");
const icon = ref("mdi mdi-eye-outline");

const handleButtonClicked = () => {
  console.log("here");
  type.value = type.value == "password" ? "text" : "password";
  icon.value =
    icon.value == "mdi mdi-eye-outline"
      ? "mdi mdi-mdi-eye-off-outline"
      : "mdi mdi-mdi-eye-outline";
};

const props = defineProps(["flash", "data"]);

const form = useForm({
  email: props.flash?.email || "",
  referral_code: props.data?.regToken || "",
  password: "",
  password_confirmation: "",
});

const submit = () => {
  // console.log(form.data())
  form.post(route("register"));
};
</script>

<style>
</style>
