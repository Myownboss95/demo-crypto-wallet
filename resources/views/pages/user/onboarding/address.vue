<template>
  <Head title="Welcome Onboard" />
  <section class="section-t-space">
    <div class="custom-container p-5">
      <form class="auth-form create-form" @submit.prevent="submit">
        <div class="row p-3">
          <FormGroup
            class="col-md-12 py-1 "
            placeholder="First name"
            label="First name"
            v-model="form.first_name"
            name="first_name"
          />
          <FormGroup
            class="col-md-12 py-1 "
            placeholder="Last name"
            label="Last name"
            v-model="form.last_name"
            name="last_name"
          />
        </div>
        <div class="row mt-4 p-3">
          <FormGroup
            class="col-md-12 py-1 "
            placeholder="Phone"
            label="Phone number"
            v-model="form.phone"
            name="phone"
          />
          <FormSelect
            class="col-md-12 py-1 "
            placeholder="Country"
            label="Country"
            v-model="form.country"
            name="country"
            :options="prop.countries"
          />
        </div>
        <div class="row mt-4 p-3">
          <FormSelect
            class="col-md-12 py-1 "
            placeholder="State/Region"
            label="State/Region"
            v-model="form.state"
            name="state"
            :options="states"
          />
          <FormGroup
            class="col-md-12 py-1 "
            placeholder="City/Town"
            label="City/Town"
            v-model="form.city"
            name="city"
          />
        </div>
        <div class="row mt-4 p-3">
          <FormGroup
            class="col-md-12 py-1 "
            placeholder="Address"
            label="Address"
            v-model="form.address"
            name="address"
          />
          <FormGroup
            class="col-md-12 py-1 "
            placeholder="Postal/Zip code"
            label="Postal/Zip code"
            v-model="form.zip_code"
            name="zip_code"
          />
        </div>

        <div class="d-flex justify-content-center mt-3">
          <FormButton
            class="btn theme-btn btn-inline w-100 text-center"
            type="submit"
            :disable="form.processing"
          >
            <ButtonLoader text="Submit" :loading="form.processing" />
          </FormButton>
        </div>
      </form>
    </div>
  </section>
  <section class="panel-space"></section>
  <Sidebar />
</template>

<script setup>
import Sidebar from "@/views/components/layout/sidebar.vue";
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import { useForm } from "@inertiajs/vue3";
import FormButton from "@/views/components/form/FormButton.vue";
import ButtonLoader from "@/views/components/form/ButtonLoader.vue";
import { ref, watch } from "vue";
import axios from "axios";
import route from "ziggy-js";
import FormInput from "@/views/components/form/FormInput.vue";

const form = useForm({
  first_name: "",
  last_name: "",
  phone: "",
  country: "",
  state: "",
  city: "",
  address: "",
  zip_code: "",
});

const prop = defineProps(["countries"]);
let states = ref({});

watch(
  () => form.country,
  (country) => {
    if (country != "") {
      axios
        .get(
          route("location.states", {
            country: prop.countries[country],
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
  form.post(route("user.onboard.address"));
};
</script>

<style>
</style>
