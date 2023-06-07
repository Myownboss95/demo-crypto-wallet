<template>
  <Head title="My Wallet Details" />

  <!-- header start -->
  <div v-for="(coin, key) in payment_methods" :key="key">
    <div v-if="coin.wallet_address != '' && coin.qr_code != ''">
      <header class="section-t-space">
        <div class="custom-container">
          <div class="header-panel">
            <inertia-link class="text-light" :href="route('user.index')">
              <i class="ri-arrow-left-s-line"></i> Wallet
            </inertia-link>
            <h3 class="middle-title">{{ coin.type }}</h3>
            <h4 class="right-title" style="color: #adb5bd">
              ${{ data[coin.type] }} &nbsp;<span class="text-success"
                >+1.24%</span
              >
            </h4>
          </div>
        </div>
      </header>
      <!-- header end -->

      <!-- setting section start -->
      <span id="copyResult"></span>
      <section class="section-lg-t-space">
        <div class="custom-container">
          <div class="wallet-profile">
            <img
              class="img-fluid"
              style="height: 70px; width: 70px"
              :src="`/storage/payment_methods/${coin.svg}`"
              alt="Bitcoin"
            />
            <h2>{{ coin.account === "0.0000" ? "0" : coin.account }}</h2>
            <h3>= ${{ (data[coin.type] * coin.account).toFixed(2) }}</h3>
          </div>
        </div>
      </section>
    </div>
    <div class="row" v-else>
      <div class="col-md-8 col-lg-8 col-sm-12 p-3 text-light">
        <!-- span -->
        <div class="row">
          <p class="h5">
            {{ coin.symbol }} Wallet Has not been activated. Contact Admin
          </p>
        </div>
        <!-- span end -->
      </div>
    </div>

    <!-- options starts -->
    <section class="section-t-space">
      <div class="custom-container">
        <div
          class="wallet-options d-flex align-items-center justify-content-center"
        >
          <ul class="category-slide">
            <li>
              <!-- data-bs-toggle="offcanvas"
                data-bs-target="#send-coin" -->
              <a
                style="background-color: transparent"
                class="category-boxes"
                @click="showModal(coin)"
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
              <!-- data-bs-toggle="offcanvas"
                data-bs-target="#receive-coin" -->
              <a
                style="background-color: transparent"
                @click="showModalRecieve(coin)"
                class="category-boxes"
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
          </ul>
        </div>
      </div>
    </section>
  </div>
  <!-- options end -->

  <!-- table part -->
  <section class="section-lg-t-space section-lg-b-space">
    <div class="custom-container">
      <div
        class="accordion theme-accordion"
        id="accordionExample"
        v-for="(transaction, key) in transactions"
        :key="key"
      >
        <div
          style="
            background-color: rgb(31, 30, 30);
            height: 25px;
            margin: auto;
            padding: 5px;
          "
        >
          <h5 style="color: grey; position: relative; margin-left: 15px">
            {{ new Date(transaction.created_at).toDateString() }}
          </h5>
        </div>
        <div class="accordion-item">
          <div class="accordion-header" id="headingOne">
            <div
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              :data-bs-target="`#transaction${transaction.id}`"
            >
              <div class="nft-horizontal-box">
                <div class="product-details">
                  <div class="product-image">
                    <img
                      style="height: 15px; width: 15px; margin-left: 15px"
                      fill="#FFFFFF"
                      class="img-fluid"
                      src="@/assets/images/send.png"
                      v-if="transaction.type == 'send'"
                      :alt="transaction.type"
                    />
                    <img
                      style="height: 15px; width: 15px; margin-left: 15px"
                      fill="#FFFFFF"
                      class="img-fluid"
                      src="@/assets/images/receivewallet.png"
                      v-if="transaction.type == 'deposit'"
                      :alt="transaction.type"
                    />
                    <img
                      style="height: 15px; width: 15px; margin-left: 15px"
                      fill="#FFFFFF"
                      class="img-fluid"
                      src="@/assets/images/arrow-swap.png"
                      v-if="transaction.type == 'withdrawal'"
                      :alt="transaction.type"
                    />
                  </div>
                  <div class="product-content">
                    <div>
                      <h4>{{ transactionType(transaction.type) }}</h4>
                      <h6>ref: {{ transaction.reference }}</h6>
                    </div>
                    <div class="counter">
                      <div class="body" style="background-color: #ececec00">
                        <div class="traffic-light">
                          <div
                            id="light"
                            :class="Red(transaction.status)"
                          ></div>
                          <div
                            id="light"
                            :class="Yellow(transaction.status)"
                          ></div>
                          <div
                            id="light"
                            :class="Green(transaction.status)"
                          ></div>
                        </div>
                      </div>

                      <h4>
                        <span v-if="transaction.type == 'deposit'"> +</span>
                        <span v-else>-</span> {{ transaction.amount.toFixed(2)
                        }}{{ transaction.symbol }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            :id="`transaction${transaction.id}`"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="nft-horizontal-content">
                <li>
                  <h5>Status</h5>
                  <h6
                    class="text-success"
                    :class="
                      Red(transaction.status) ||
                      Yellow(transaction.status) ||
                      Green(transaction.status)
                    "
                    style="background-color: inherit !important"
                  >
                    {{ transaction.status }}
                  </h6>
                </li>
                <li>
                  <h5>Confirmation</h5>
                  <h6>{{ confirmation(transaction.status) }}/3</h6>
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

  <!-- Offcanvas Send Coin -->
  <div
    :class="[
      'offcanvas',
      'theme-offcanvas',
      'share-offcanvas',
      'offcanvas-bottom',
      'px-4',
      'pb-4',
      'h-auto',
      { show: isSendModalVisible },
    ]"
    tabindex="-1"
    id="send-coin"
    style="visibility: visible !important"
  
  >
    <div class="offcanvas-header">
      <div class="header-panel">
        <a
          class="right-title"
          @click="closeSendModal"
          style="
            cursor: pointer;
            color: white;
            font-size: 15px;
            font-weight: bold;
          "
        >
          Cancel
        </a>
        <h3 class="text-white left-title">Send {{ coinPop.symbol }}</h3>
      </div>
    </div>
    <div style="margin: 0 auto" class="offcanvas-body">
      <form class="auth-form" target="_blank">
        <div class="form-group">
          <div class="form-input">
            <FormGroup
              :disabled="disableElements"
              name="address"
              placeholder="Wallet Address"
              v-model="form.address"
            />

            <i class="ri-qr-scan-2-line"></i>
          </div>
          <div style="margin-top: 5px" class="form-input">
            <FormGroup
              :disabled="disableElements"
              name="amount"
              type="number"
              placeholder="Amount"
              v-model="form.amount"
              class="mt-2"
            />
            <i class="ri-send-plane-line"></i>
          </div>
        </div>
        <div class="submit-btn">
          <FormButton
            :disabled="disableElements"
            class="btn theme-btn"
            @button-clicked="send"
          >
            <ButtonLoader text="Next" :loading="form.processing" />
          </FormButton>
        </div>
      </form>
    </div>
  </div>
  <!-- Offcanvas Send Coin End -->

  <div
    :class="[
      'offcanvas',
      'theme-offcanvas',
      'share-offcanvas',
      'offcanvas-bottom',
      'px-4',
      'pb-4',
      'h-auto',
      { show: isReceiveModalVisible },
    ]"
    tabindex="-1"
    id="receive-coin"
    style="visibility: visible !important"
  >
    <div class="offcanvas-header">
      <div class="header-panel">
        <a
          class="right-title"
          @click="closeReceiveModal"
          style="
            cursor: pointer;
            color: white;
            font-size: 15px;
            font-weight: bold;
          "
        >
          <i class="ri-close-line"></i>
        </a>
        <h3 class="text-white left-title">Receive {{ coinPop.symbol }}</h3>
      </div>
    </div>
    <div style="margin: 0 auto" class="offcanvas-body">
      <div
        style="
          background-color: white;
          border-radius: 10px;
          max-width: 250px;
          padding: 15px 15px;
        "
        class="offer-title"
      >
        <img
          class="img-fluid"
          style="width: 220px; height: 220px"
          :src="`/storage/user_wallets/${coinPop.qr_code}`"
          alt="Qr Code"
        />
        <h4 style="word-wrap: break-word; margin-bottom: -3px">
          {{ coinPop.wallet_address }}
        </h4>
      </div>
    </div>
    <div style="margin: 0 auto" class="offcanvas-body">
      <div class="offer-title">
        <h4 style="word-wrap: break-word">
          Send only ( {{ coinPop.symbol }} ) to this address. Sending any other
          coin may result in permanent loss.
        </h4>
      </div>
    </div>
    <div style="margin: 0 auto" class="offcanvas-body">
      <div
        class="wallet-options d-flex align-items-center justify-content-center"
      >
        <ul class="category-slide">
          <li>
            <div
              style="background-color: transparent"
              class="category-boxes"
              @click="copy(coinPop.wallet_address)"
            >
              <img
                style="background-color: #0b65c6"
                class="img-fluid cat-img"
                src="@/assets/images/copy.png"
                alt="copy"
              />

              <h5>Copy</h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <section class="panel-space"></section>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import FormGroup from "@/views/components/form/FormGroup.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, watch, reactive, onMounted } from "vue";
import axios from "axios";
import route from "ziggy-js";
import { profile_picture } from "@/js/functions";
import FormButton from "@/views/components/form/FormButton.vue";
import ButtonLoader from "@/views/components/form/ButtonLoader.vue";
import Error from "@/views/components/alerts/error.vue";
import { info } from "@/js/toast";
import { router } from "@inertiajs/vue3";
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
onMounted(async () => {
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
    } catch (error) {
      console.log(error);
    }
  });
});

// Compute the class based on the item's condition
const Yellow = (status) => {
  if (status == "pending") return "yellow";
};
const Green = (status) => {
  if (status == "successful") return "green";
};
const Red = (status) => {
  if (status == "failed") return "red";
};
const depositType = computed(() => transactionType(type));
const transactionType = (type) => type;

const confirmation = (status) => {
  return status == "failed"
    ? 1
    : status == "pending"
    ? 2
    : status == "successful"
    ? 3
    : 0;
};
const openModal = ref(false);
const modalCoin = ref({});
const form = useForm({
  method_id: "",
  amount: "",
  address: "",
  usd: "",
});
const disableElements = computed(() => form.method_id == "");

const coinPop = ref({});
const showModal = (coin) => {
  // return console.log(coin);
  modalCoin.value = coin.symbol;
  coinPop.value = coin;
  form.method_id = coin.payment_method_id;
  form.usd = data[coin.type];
  showSendModal();
  // console.log(form.usd)

  //   openModal.value = true;
};
const showModalRecieve = (coin) => {
  // return console.log(coin);
  modalCoin.value = coin.symbol;
  coinPop.value = coin;
  form.method_id = coin.payment_method_id;
  form.usd = data[coin.type];
  showReceiveModal();
  // console.log(form.usd)

  //   openModal.value = true;
};
const send = () => {
  form.post(route("user.send.store"));
};

const closeModal = () => {
  document.querySelectorAll(".btn-close").forEach((element) => {
    element.click();
  });
};

const isSendModalVisible = ref(false);
const isReceiveModalVisible = ref(false);

function showSendModal() {
  isSendModalVisible.value = true;
}
function showReceiveModal() {
  isReceiveModalVisible.value = true;
}
function closeSendModal(event) {
  if (isSendModalVisible.value) {
    isSendModalVisible.value = false;
  }
}
function closeReceiveModal(event) {
  if (isReceiveModalVisible.value) {
    isReceiveModalVisible.value = false;
  }
}
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
:root {
  --green: #96c432;
  --yellow: #facf5a;
  --red: #bf4733;
}

.body {
  display: inline;
  margin: 0;
  height: 50px;
  width: 100px;
  background-color: #ececec;
}

.traffic-light {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin: 0px;
  padding: 10px 10px;
  height: 30px;
  width: 100px;
  border-radius: 8px;
  background-color: #d0d0d0;
}

#light {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #3c3c48;
  /* margin: 20px; */
}

.green {
  background-color: #96c432 !important;
  color: #96c432 !important;
}
.yellow {
  background-color: #facf5a !important;
  color: #facf5a !important;
}
.red {
  background-color: #bf4733 !important;
  color: #bf4733 !important;
}
</style>