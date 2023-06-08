<template>
  <Head title="Dashboard" />
  <header class="section-t-space">
    <div class="custom-container">
      <div class="header-panel">
        <a href="">
          <i class="ri-notification-2-line"></i>
        </a>
        <a href="">
          <i class="ri-equalizer-line"></i>
        </a>
      </div>
    </div>
  </header>
  <!-- <breadcrumb title="Dashboard" :crumbs="['Dashboard']" /> -->
  <!-- setting section start -->
  <span id="copyResult"></span>
  <section class="section-lg-t-space">
    <div class="custom-container">
      <div class="wallet-profile">
        <h2 style="font-size: 40px">{{ totalAmount }}</h2>
        <h5 class="mt-3" style="font-size: 15px; color: #adb5bd">
          Wallet Balance
        </h5>
      </div>
    </div>
  </section>

  <!-- options starts -->
  <section class="section-t-space">
    <div class="custom-container">
      <div
        class="wallet-options d-flex align-items-center justify-content-center"
      >
        <ul class="category-slide">
          <li>
            <!-- data-bs-toggle="offcanvas" data-bs-target="#choosecoin" -->
            <a
              style="background-color: transparent"
              class="category-boxes"
              @click="showElement"
            >
              <img
                style="background-color: #0b65c6"
                class="img-fluid cat-img"
                src="@/assets/images/send.png"
                alt="send"
              />
              <h5>Send</h5>
            </a>
          </li>
          <li>
            <a
              style="background-color: transparent"
              class="category-boxes"
              @click="showElement"
            >
              <img
                style="background-color: #0b65c6"
                class="img-fluid cat-img"
                src="@/assets/images/receivewallet.png"
                alt="receive"
              />
              <h5>Receive</h5>
            </a>
          </li>
          <li>
            <a
              style="background-color: transparent"
              href="https://paybis.com/"
              class="category-boxes"
            >
              <img
                style="background-color: #0b65c6"
                class="img-fluid cat-img"
                src="@/assets/images/shopping-cart.png"
                alt="buy"
              />
              <h5>Buy</h5>
            </a>
          </li>
          <li>
            <a
              style="background-color: transparent"
              data-bs-toggle="modal"
              data-bs-target="#swap"
              class="category-boxes"
            >
              <img
                style="background-color: #0b65c6"
                class="img-fluid cat-img"
                src="@/assets/images/arrow-swap.png"
                alt="swap"
              />
              <h5>Swap</h5>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- options end -->

  <!-- wallet start -->
  <section class="section-lg-t-space section-lg-b-space">
    <div class="custom-container">
      <div class="category-detail-tab">
        <ul class="nav nav-tabs tab-style2" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="token-tab"
              data-bs-toggle="tab"
              data-bs-target="#token-tab-pane"
              type="button"
              role="tab"
            >
              Tokens
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="nft-tab"
              data-bs-toggle="tab"
              data-bs-target="#nft-tab-pane"
              type="button"
              role="tab"
            >
              NFTs
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="token-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <ul class="token-box" v-if="payment_methods.length">
            <li v-for="(featureds, key) in payment_methods" :key="key">
              <inertia-link
                :href="route('user.wallet.show', featureds.payment_method_id)"
                class="token-details"
              >
                <div class="token-icon">
                  <img
                    :src="`/storage/payment_methods/${featureds.svg}`"
                    alt=""
                    style="height: 50px; width: 50px"
                  />
                </div>
                <div style="margin-left: 20px">
                  <h3 class="text-light">{{ featureds.type }}</h3>
                  <h5 style="color: #adb5bd; margin-top: 5px">
                    {{
                      (data[featureds.type] * 1).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                    }}
                    <span class="text-success">+ {{ randomNumber }}%</span>
                  </h5>
                </div>
                <div class="token-price">
                  <div>
                    <h3 class="text-light">
                      {{
                        featureds.account === "0.0000" ? "0" : featureds.account
                      }}
                      {{ featureds.symbol }}
                    </h3>
                    <h5
                      style="color: #adb5bd; margin-top: 5px; text-align: right"
                    >
                      {{
                        (
                          data[featureds.type] * featureds.account
                        ).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      }}
                    </h5>
                  </div>
                </div>
              </inertia-link>
            </li>
          </ul>
        </div>
        <div
          class="tab-pane fade"
          id="nft-tab-pane"
          role="tabpanel"
          tabindex="0"
        >
          <div style="margin-top: -60px" class="empty-tab">
            <img
              class="img-fluid bell"
              style="height: 150px; width: 150px"
              src="@/assets/images/nft-coming-soon.png"
              alt="coming soon"
            />
            <h3>Coming Soon</h3>
            <h4>Store and exchange NFTs</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- wallet end -->

  <!-- panel-space start -->
  <section class="panel-space"></section>
  <!-- panel-space end -->
  <!-- Dashboard Send And Receive Choose Coin-->
  <!-- :style="{ visibility: elementVisibility }" -->
  <!-- class="offcanvas theme-offcanvas share-offcanvas offcanvas-bottom px-4 pb-4 h-auto" -->

  <div
    :class="[
      'offcanvas',
      'theme-offcanvas',
      'share-offcanvas',
      'offcanvas-bottom',
      'px-4',
      'pb-4',
      'h-auto',
      { show: isElementVisible },
    ]"
    tabindex="-1"
    id="choosecoin"
    style="visibility: visible !important"
  >
    <div class="offcanvas-header">
      <div class="header-panel">
        <h3 class="text-white middle-title">Select Coin</h3>
        <!-- data-bs-dismiss="offcanvas" aria-label="Close" -->
        <a
          class="right-title"
          @click="handleClickOutside"
          style="
            cursor: pointer;
            color: white;
            font-size: 15px;
            font-weight: bold;
          "
        >
          Done
        </a>
      </div>
    </div>
    <div style="max-width: 700px; margin: 0 auto" class="offcanvas-body">
      <div class="custom-container">
        <ul class="token-box">
          <li v-for="(featureds, key) in payment_methods" :key="key">
            <inertia-link
              :href="route('user.wallet.show', featureds.payment_method_id)"
              class="token-details"
            >
              <div class="token-icon">
                <img
                  :src="`/storage/payment_methods/${featureds.svg}`"
                  alt=""
                  style="height: 50px; width: 50px"
                />
              </div>
              <div style="margin-left: 20px">
                <h3 class="text-light">{{ featureds.type }}</h3>
                <h5 style="color: #adb5bd; margin-top: 5px">
                  {{
                    (data[featureds.type] * 1).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                  }}
                  <span class="text-success">+ {{ randomNumber }}%</span>
                </h5>
              </div>
              <div class="token-price">
                <div>
                  <h3 class="text-light">
                    {{
                      featureds.account === "0.0000" ? "0" : featureds.account
                    }}
                    {{ featureds.symbol }}
                  </h3>
                  <h5
                    style="color: #adb5bd; margin-top: 5px; text-align: right"
                  >
                    {{
                      (data[featureds.type] * featureds.account).toLocaleString(
                        "en-US",
                        {
                          style: "currency",
                          currency: "USD",
                        }
                      )
                    }}
                  </h5>
                </div>
              </div>
            </inertia-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Dashboard Send Choose Coin End-->
  <section class="panel-space my-5"></section>
  <Sidebar />
</template>

<script setup>
import Sidebar from "@/views/components/layout/sidebar.vue";
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import { Head } from "@inertiajs/vue3";
import { computed, onMounted, ref, watch, onBeforeMount } from "vue";
import axios from "axios";
import feather from "feather-icons";
import { useForm } from "@inertiajs/vue3";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import Error from "@/views/components/alerts/error.vue";
import { reactive } from "@vue/reactivity";
import { router } from "@inertiajs/vue3";
// import { format_money } from "@/scripts/mixins/money";

const props = defineProps({
  userMainBalance: Number,
  userRefBalance: Number,
  userInvestedBalance: Number,
  withdrawals_count: Number,
  withdrawals: Object,
  deposits_count: Number,
  deposits: Object,
  num_buyTrades: Number,
  buyTrades: Object,
  num_sellTrades: Number,
  sellTrades: Object,
  trade_profits: Number,
  active_trades: Number,
  payment_methods: Object,
  featured: Object,
});
onMounted(() => {
  const offCanvasLeft = document.getElementById("offCanvasLeft");
  if (offCanvasLeft) {
    offCanvasLeft.classList.remove("show");
  }
  feather.replace();
});

const userMainBalance = computed(() => props.userMainBalance);
const userRefBalance = computed(() => props.userRefBalance);
const userInvestedBalance = computed(() => props.userInvestedBalance);

const withdrawals_count = computed(() => props.withdrawals_count);
const withdrawals = computed(() => props.withdrawals);
const deposits_count = computed(() => props.deposits_count);
const deposits = computed(() => props.deposits);
const featured = computed(() => props.featured);
const num_buyTrades = computed(() => props.num_buyTrades);
const buyTrades = computed(() => props.buyTrades);
const num_sellTrades = computed(() => props.num_sellTrades);
const sellTrades = computed(() => props.sellTrades);
const trade_profits = computed(() => props.trade_profits);
const activeTrades = computed(() => props.active_trades);
const payment_methods = computed(() => props.payment_methods);
import { format_money } from "@/scripts/mixins/money";

const pm = computed(() => {
  let pms = { "": "Choose Coin" };
  props.payment_methods.forEach(function (method) {
    pms[method.type] = method.type;
  });
  return pms;
});

const form = useForm({
  name: "",
  amount: "",
});

const normalPrice = ref(0);
const calculatedPrice = ref(0);

var price = reactive({});
const selectMethod = (amount, name) => {
  if (name == "" || amount == "") return;
};
const randomNumber = ref(null);

const generateRandomNumber = () => {
  const min = 0.01;
  const max = 1.99;
  return (Math.random() * (max - min) + min).toFixed(2);
};
const data = reactive([]);
onMounted(async () => {
  randomNumber.value = generateRandomNumber();
  props.payment_methods.forEach(async (method) => {
    const { type } = method;
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${type}&vs_currencies=usd`
      );

      if (response.status === 200) {
        data[type] = response.data[type.toLowerCase()]["usd"];
      } else {
        throw new Error();
      }
    } catch (error) {}
  });
});

let calculatedAmount = "";
watch(
  () => form.amount,
  (amount) => {
    calculatedAmount = amount;
  }
);
let roi = ref(0);
watch(
  () => form.name,
  (name) => {
    axios
      .get(route("user.get.roi", name))
      .then((response) => {
        if (response.status == 200) {
          roi.value = response.data.data / 100;
        } else {
          throw Error();
        }
      })
      .catch((error) => console.log(error));
  }
);

const formatAmount = async (value, type) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${type}&vs_currencies=usd`
    );

    if (response.status === 200 && response.data[type.toLowerCase()]) {
      return value;
      data.value = true;
    } else {
      throw new Error();
    }
  } catch (error) {
    // console.log(error);
  }
};
const totalAmount = computed(() => {
  let sum = 0;
  props.payment_methods.forEach((featureds) => {
    const amount = data[featureds.type] * featureds.account;
    sum += amount;
  });
  return format_money.methods.format_money(sum);
});

const isElementVisible = ref(false);

function showElement() {
  isElementVisible.value = true;
}
function handleClickOutside(event) {
  if (isElementVisible.value) {
    isElementVisible.value = false;
  }
}

// const isModalVisible = ref(false);
// function showModal() {
//       isModalVisible.value = true;
//     }
</script>


<style>
.feather-50 {
  width: 50px;
  height: 50px;
}
</style>
