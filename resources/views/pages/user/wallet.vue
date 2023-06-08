<template>
  <Head title="My Wallet Details" />
  
  <div class="row">
    <div class="col-xl-11 col-lg-11 mx-auto">
      <!-- end card -->

      <div class="row card shadow-lg radius-20" v-for="(coin, key) in coins" :key="key">
        <div class="col card-body">
          <div class="row" v-if="coin.wallet_address != '' && coin.qr_code != ''">
            <div class="col-md-8 col-lg-8 col-sm-12 p-3 text-muted">
              <!-- span -->
                <div class="row">
                  <p class="h4">{{ coin.symbol }} Wallet Details</p>
                  <span
                  class="text-muted mb-3 lh-1 d-block h6"
                  style="text-transform: capitalize; text-align: left">
                   You have {{ coin.account === '0.0000' ? '0' : coin.account }}{{ coin.symbol }} = {{ (data[coin.type] * coin.account).toFixed(2) }}USD
                  <hr>
                  1{{ coin.symbol }} - {{ data[coin.type] }}USD
                  </span>
                  <div class="col-md-8 col-sm-12 border">
                    <p class="fw-bold">{{ coin.wallet_address }}</p>
                  </div>

                  <div class="col-md-4 col-sm-12 border ref">
                    <span class="ml-4" @click="copy(coin.wallet_address)"
                      ><i class="fa fa-copy"></i>
                      <strong> Click to Copy</strong>
                    </span>
                  </div>
                </div>
                <!-- span end -->
              
            </div>
            <div class="col-md-4 col-sm-12 p-3">
              <div class="" v-if="coin.qr_code != null">
                <img
                  :src="`/storage/user_wallets/${coin.qr_code}`"
                  alt=""
                  class="w-100 img-fluid"
                />
              </div>
              <div v-else>
                <p class="fw-bold">No Image Yet</p>
              </div>
            </div>
            </div>
            <div class="row" v-else>
            <div class="col-md-8 col-lg-8 col-sm-12 p-3 text-muted">
              <!-- span -->
                <div class="row">
                  <p class="h5">{{ coin.symbol }} Wallet Has not been activated. Contact Admin</p>
                  
                </div>
                <!-- span end -->
              
            </div>
           
            </div>
          </div>
        
      </div>
    </div>
  </div>
  <section class="panel-space"></section>
  <Sidebar />
</template>

<script setup>
import Sidebar from "@/views/components/layout/sidebar.vue";
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import { computed } from "@vue/runtime-core";
import FormInput from "@/views/components/form/FormInput.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, watch, reactive, onMounted } from "vue";
import Modal from "@/views/components/modal.vue";
import axios from "axios";
import route from "ziggy-js";
import { profile_picture } from "@/js/functions";
import FormButton from "@/views/components/form/FormButton.vue";
import ButtonLoader from "@/views/components/form/ButtonLoader.vue";
import Error from "@/views/components/alerts/error.vue";
import { info } from "@/js/toast";
import { copy } from "@/js/functions";

const props = defineProps({
  user: Object,
  payment_methods: Object,
});
// console.log(props.referrals);
const user = computed(() => props.user);
const coins = computed(() => props.user.accounts);
const payment_methods = computed(() => props.payment_methods);

const data = reactive([]);
 onMounted( async () => {
   props.payment_methods.forEach( async (method) => {
     const { type } = method;
      try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${type}&vs_currencies=usd`
    );

    if (response.status === 200) {
      data[type] = response.data[type.toLowerCase()]['usd'];
     } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
      
      });
    });
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
