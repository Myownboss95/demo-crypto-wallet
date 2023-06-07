<template>
  <Head title="Profile" />
  <section class="section-t-space">
    <div class="custom-container">
      <form class="auth-form offer-form create-form" @submit.prevent="submit">
        <div class="upload-label">
          <!-- <label class="form-label mt-0 mb-0">Upload profile image</label>
          <span class="upload-file d-block">png, jpg, svg, or webp</span>
          <div class="upload-image">
            <input type="file" class="form-control" />
            <div class="upload-icon">
              <i class="ri-image-fill"></i>
              <h6>Upload</h6>
            </div>
          </div> -->

          <div class="form-group section-t-space">
            <label for="inputfullname" class="form-label">Full Name</label>
            <div class="form-input">
              <input
                type="text"
                class="form-control wo-icon"
                id="inputfullname"
                placeholder="Enter full name"
                v-model="form.first_name"
              />
            </div>
          </div>

          <div class="form-group section-t-space">
            <label for="inputemail" class="form-label">Email Address</label>
            <div class="form-input">
              <input
                readonly
                type="email"
                class="form-control wo-icon"
                id="inputemail"
                placeholder="Enter email"
                v-model="form.email"
                disabled
              />
            </div>
          </div>

          <div class="form-group section-t-space">
            <label for="inputphonenumber" class="form-label"
              >Phone Number</label
            >
            <div class="form-input">
              <input
                type="text"
                class="form-control wo-icon"
                v-model="form.phone"
                id="inputphonenumber"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div class="form-group section-t-space">
            <label for="inputcountry" class="form-label">Country</label>
            <div class="form-input">
              <input
                type="text"
                class="form-control wo-icon"
                v-model="form.country"
                id="inputcountry"
                placeholder="Enter country"
              />
            </div>
          </div>
        </div>

        <div class="submit-btn d-flex w-100 mt-5 mb-3">
          <inertia-link
            :href="route('user.index')"
            class="btn gray-btn btn-inline w-100 text-center"
            >Cancel</inertia-link>
          
          <FormButton
            class="btn theme-btn btn-inline w-100 text-center"
            type="submit"
            :disable="form.processing"
          >
            <ButtonLoader text="Update" :loading="form.processing" />
          </FormButton>
        </div>
      </form>
    </div>
    <section class="panel-space"></section>
  </section>

  
  <!-- end row -->
</template>

<script setup>
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import { computed } from "@vue/runtime-core";
import FormInput from "@/views/components/form/FormInput.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, watch } from "vue";
import axios from "axios";
import route from "ziggy-js";
import { profile_picture } from "@/js/functions";
import FormButton from "@/views/components/form/FormButton.vue";
import ButtonLoader from "@/views/components/form/ButtonLoader.vue";
import { info } from "@/js/toast";
import { copy } from "@/js/functions";

const props = defineProps({
  user: Object,
  countries: Object,
  transactions: Object,
  hostname: Object,
  referrals: Object,
});
// console.log(props.referrals);
const user = computed(() => props.user);
const countries = computed(() => props.countries);
const transactions = computed(() => props.transactions);
const referrals = computed(() => props.referrals);
const hostname = computed(() => props.hostname);

const form = useForm({
  first_name: props.user?.first_name || "",
  last_name: props.user?.last_name || "",
  email: props.user?.email || "",
  phone: props.user?.phone || "",
  country: props.user?.country || "",
  state: props.user?.state || "",
  city: props.user?.city || "",
  address: props.user?.address || "",
  zip_code: props.user?.zip_code || "",
  referral_code: props.user?.referral_code || "",
});

let states = ref({});

watch(
  () => form.country,
  (country) => {
    if (country != "") {
      axios
        .get(
          route("location.states", {
            country: props.countries[country],
          })
        )
        .then((response) => {
          if (response.status == 200) {
            states.value = response.data.states;
          } else {
            throw Error();
          }
        })
        .catch((error) => {
          error("Failed to load states, please refresh this page");
        });
    }
  }
);

const submit = () => {
  form.post(route("user.profile.update"));
};
</script>


<style scoped>
.card .user-img-wrapper {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  overflow: hidden;
}

.user-img-wrapper img {
  object-fit: cover;
}

.card {
  border-radius: 25px;
}
.ref {
  cursor: pointer;
}
</style>
