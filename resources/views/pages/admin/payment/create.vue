<template>
  <Head title="Create Payment Method" />
  <breadcrumb
    title="Create Payment Method"
    :crumbs="['Dashboard', 'Settings', 'Create Payment Method', 'Create']"
  />
  <div class="col-lg-4 m-auto">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="createPaymentPlan">
          <FormGroup
            name="name"
            placeholder="Add Coin Name"
            label="Add Coin Name"
            v-model="form.name"
          />

          <FormGroup
            name="symbol"
            placeholder="Coin Symbol"
            label="Coin Symbol"
            v-model="form.symbol"
            class="mt-3"
          />
          <FormGroup
            name="indices"
            placeholder="Indices"
            label="Indices"
            v-model="form.indices"
            class="mt-3"
          />

          <FormSelect
            id="demo"
            name="type"
            label="Enable/Disable"
            :options="{ 1: 'Enable', 0: 'Disable' }"
            v-model="form.status"
          />

          <FormGroup
            name="wallet"
            placeholder="Wallet Address"
            label="Wallet Address"
            v-model="form.wallet"
            class="mt-3"
          />
          <FormGroup
            name="start_bonus"
            placeholder="Start Bonus(Optional)"
            label="Start Bonus(Optional)"
            v-model="form.start_bonus"
            class="mt-3"
          />
          <FormGroup
            name="roi"
            placeholder="ROI"
            label="Rewards"
            v-model="form.roi"
            class="mt-3"
          />
          <FormGroup
            name="min_withdrawal"
            placeholder="Min Withdrawal"
            label="Minimum Withdrawal"
            v-model="form.min_withdrawal"
            class="mt-3"
          />
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="form.featured"
                id="remember-check"
              />
              <label class="form-check-label" for="remember-check">
                Featured Coin
              </label>
            </div>
          </div>
          <div class="mt-3 mb-3">
            <label>Coin Logo</label>
            <input
              class="form-control"
              type="file"
              @input="form.svg = $event.target.files[0]"
            />
          </div>

          <div class="mt-3 mb-3">
            <label>QR Code Upload</label>
            <input
              class="form-control"
              type="file"
              @input="form.image = $event.target.files[0]"
            />
          </div>

          <FormButton
            type="submit"
            class="w-100 btn btn-outline-primary mt-3"
            :disabled="form.processing"
          >
            <ButtonLoader
              text="Create Payment Method"
              :loading="form.processing"
            />
          </FormButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import FormButton from "@/views/components/form/FormButton.vue";
import ButtonLoader from "@/views/components/form/ButtonLoader.vue";
import { useForm } from "@inertiajs/vue3";
import InputGroup from "@/views/components/form/InputGroup.vue";
import { ref, watch } from "vue";
import axios from "axios";
import { error } from "@/js/toast";

const form = useForm({
  name: "",
  status: 1,
  indices: "",
  image: "",
  svg: "",
  wallet: "",
  price: "",
  symbol: "",
  roi: "",
  start_bonus: "",
  featured: "",
  min_withdrawal: "",
});

watch(
  () => form.symbol,
  (symbol) => {
    if (symbol != "") {
      form.symbol = symbol.toUpperCase();
    }
  }
);
watch(
  () => form.indices,
  (indices) => {
    if (indices != "") {
      form.indices = indices.toUpperCase();
    }
  }
);

const createPaymentPlan = () => {
  // console.log(form.data())
  form.post(route("admin.coins.store"));
};
</script>

<style>
</style>
