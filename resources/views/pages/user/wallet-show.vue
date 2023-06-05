<template>
  <Head title="My Wallet Details" />
  
  <!-- header start -->
   <div  v-for="(coin, key) in payment_methods" :key="key">
    <div v-if="coin.wallet_address != '' && coin.qr_code != ''">
  <header class="section-t-space">
    <div class="custom-container">
      <div class="header-panel">
        <a class="text-light" href="dashboard.html">
          <i class="ri-arrow-left-s-line"></i> Wallet
        </a>
        <h3 class="middle-title">{{ coin.type }}</h3>
        <h4 class="right-title" style="color: #adb5bd;">${{ data[coin.type] }} &nbsp;<span class="text-success">+1.24%</span></h4>
      </div>
    </div>
  </header>
  <!-- header end -->

  <!-- setting section start -->
  <span id="copyResult"></span>
  <section class="section-lg-t-space">
    <div class="custom-container">
      <div class="wallet-profile">
        <img class="img-fluid" style="height: 70px; width: 70px;" :src="`/storage/payment_methods/${coin.svg}`" alt="Bitcoin" />
        <h2>{{ coin.account === '0.0000' ? '0' : coin.account }}</h2>
        <h3>= ${{ (data[coin.type] * coin.account).toFixed(2) }}</h3>
      </div>
    </div>
  </section>
  </div>
  <div class="row" v-else>
            <div class="col-md-8 col-lg-8 col-sm-12 p-3 text-light">
              <!-- span -->
                <div class="row">
                  <p class="h5">{{ coin.symbol }} Wallet Has not been activated. Contact Admin</p>
                  
                </div>
                <!-- span end -->
              
            </div>
           
            </div>
</div>
  <!-- options starts -->
  <section class="section-t-space">
    <div class="custom-container">
      <div class="wallet-options d-flex align-items-center justify-content-center">
        <ul class="category-slide">
          <li>
            <a style="background-color: transparent;" data-bs-toggle="offcanvas" data-bs-target="#choosecoin" class="category-boxes">
              <img style="background-color: #0b65c6;" class="img-fluid cat-img" src="@/assets/images/send.png" alt="send" />
              <h5>Send</h5>
            </a>
          </li>
          <li>
            <a style="background-color: transparent;" data-bs-toggle="offcanvas" data-bs-target="#choosecoin" class="category-boxes">
              <img style="background-color: #0b65c6;" class="img-fluid cat-img" src="@/assets/images/receivewallet.png" alt="receive" />
              <h5>Receive</h5>
            </a>
          </li>
          <li>
            <a style="background-color: transparent;" href="https://paybis.com/" class="category-boxes">
              <img style="background-color: #0b65c6;" class="img-fluid cat-img" src="@/assets/images/shopping-cart.png" alt="buy" />
              <h5>Buy</h5>
            </a>
          </li>
          <li>
            <a style="background-color: transparent;" data-bs-toggle="modal" data-bs-target="#swap" class="category-boxes">
              <img style="background-color: #0b65c6;" class="img-fluid cat-img" src="@/assets/images/arrow-swap.png" alt="swap" />
              <h5>Swap</h5>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- options end -->


    <!-- table part -->
    <section class="section-lg-t-space section-lg-b-space">
    <div class="custom-container">
        <div class="accordion theme-accordion" id="accordionExample" v-for="(transaction, key) in transactions" :key="key">
        <div style="background-color: rgb(31, 30, 30); height: 25px; margin: auto; padding: 5px;">
          <h5 style="color: grey; position: relative; margin-left: 15px;">{{ new Date(transaction.created_at).toDateString() }}</h5>
        </div>
        <div class="accordion-item">
          <div class="accordion-header" id="headingOne">
            <div class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#transaction1">
              <div class="nft-horizontal-box">
                <div class="product-details">
                  <div class="product-image">
                    <img style="height: 15px; width: 15px; margin-left: 15px;" fill="#FFFFFF" class="img-fluid" src="@/assets/images/send.png" alt="send" />
                  </div>
                  <div class="product-content">
                    <div>
                      <h4>Transfer</h4>
                      <h6>ref: {{ transaction.reference }}</h6>
                    </div>
                    <div class="counter">
                      <h4>- 0.2723 BTC</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="transaction1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul class="nft-horizontal-content">
                <li>
                  <h5>Status</h5>
                  <h6 class="text-success">Completed</h6>
                </li>
                <li>
                  <h5>comfirmation</h5>
                  <h6>3/3</h6>
                </li>
                <li>
                  <h5>Value</h5>
                  <h6>$10.00</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center" v-if="transactions.length">
        <Paginator :links="links" />
      </div>
        </div>
        </section>
    <!-- end table part -->






      <div class="row card shadow-lg radius-20" v-for="(coin, key) in payment_methods" :key="key">
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
    
</template>

<script setup>
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
import Paginator from "@/views/components/paginator.vue";

const props = defineProps({
  user: Object,
    payment_methods: Object,
  transactions: Object,
});
// console.log(props.referrals);
const user = computed(() => props.user);
const coins = computed(() => props.user.accounts);
const payment_methods = computed(() => props.payment_methods);
const transactions = computed(() => props.transactions.data);
const links = computed(() => props.transactions.links);
// console.log(transactions.value)

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
