<template>
  <Head title="Profile" />
  <header class="section-t-space">
    <div class="custom-container">
      <div class="header-panel">
        <a onclick="window.history.go(-1); return false;">
          <i class="ri-arrow-left-s-line"></i>
        </a>
        <h3 class="middle-title">Send & Withdraw</h3>
      </div>
    </div>
  </header>
  <!-- header end -->

  <!-- nft time-duration section start -->
  <section class="section-t-space">
    <div class="custom-container">
      <form class="auth-form offer-form create-form" @submit.prevent="submit">
        <label class="form-label pt-15">Select Coin</label>
        <div class="search-during nft-content d-block">
          <div class="row g-3">
            <div class="col-5">
              <div class="auth-form create-form">
                <select
                  class="form-select mt-0"
                  v-model="form.method_id"
                  @change="selectMethod"
                >
                  <option
                    :value="coin.payment_method_id"
                    v-for="(coin, key) in props.coins"
                    :key="key"
                  >
                    {{ coin.type }}
                  </option>
                </select>
              </div>
            </div>

            <div class="col-7">
              <div class="auth-form">
                <input
                  type="number"
                  class="form-control"
                  id="amount2"
                  placeholder="Amount"
                  v-model="form.amount"
                />
              </div>
            </div>
          </div>
          <h5 v-if="form.method_id!='' && form.amount != ''">
            = {{ format_money(data[form.type] * form.amount) }}
          </h5>
          <!-- real time value-->
        </div>

        <label class="form-label pt-15">Wallet ID</label>
        <div class="search-during nft-content d-block">
          <div class="form-group section-t-space">
            <div class="form-input">
              <input
                type="text"
                class="form-control wo-icon"
                id="inputwalletid"
                placeholder="Enter wallet ID"
                v-model="form.address"
              />
            </div>
          </div>
        </div>
        <div class="submit-btn d-flex w-100 mt-5 mb-3">
          <inertia-link
            :href="route('user.index')"
            class="btn gray-btn btn-inline w-100 text-center"
            >Cancel</inertia-link
          >

          <FormButton
            class="btn theme-btn btn-inline w-100 text-center"
            type="submit"
            :disable="form.processing"
          >
            <ButtonLoader text="Complete" :loading="form.processing" />
          </FormButton>
        </div>
      </form>
    </div>
  </section>
  <!-- nft time-duration section end -->

  <section class="panel-space"></section>

  <!-- end row -->
</template>

<script setup>
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import { computed, onMounted } from "@vue/runtime-core";
import FormInput from "@/views/components/form/FormInput.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, watch, onBeforeMount } from "vue";
import axios from "axios";
import route from "ziggy-js";
import { profile_picture } from "@/js/functions";
import FormButton from "@/views/components/form/FormButton.vue";
import ButtonLoader from "@/views/components/form/ButtonLoader.vue";
import { info } from "@/js/toast";
import { reactive } from "@vue/reactivity";
import { copy } from "@/js/functions";

const props = defineProps({
  user: Object,
  coins: Object,
});
const form = useForm({
  method_id: "",
  amount: "",
  address: "",
    type: "",
  symbol: "",
});
const data = reactive([]);
onMounted(async () => {
  props.coins.forEach(async (method) => {
    const { type } = method;
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${type}&vs_currencies=usd`
      );

      if (response.status === 200) {
        data[type] = response.data[type.toLowerCase()]["usd"];
        // console.log(data[type]);
      } else {
        throw new Error();
      }
    } catch (error) {
      // console.log(error);
    }
  });
});
// console.log(props.referrals);
const user = computed(() => props.user);
var price = ref({});
// const selected = ref({});
const coins = computed(() => props.coins);


watch(
  () => form.method_id,
    (id) => {
        const result = props.coins.filter(coin => coin.payment_method_id === id);
        form.type = (result[0].type);
        form.symbol = (result[0].symbol);
        // console.log(data[form.type])
  }
);

const submit = () => {
    // return console.log(form.data());
  form.post(route("user.withdraw.store"));
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
