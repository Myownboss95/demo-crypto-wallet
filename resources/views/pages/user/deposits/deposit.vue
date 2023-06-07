<template>
  <!-- header start -->
  <header>
    <div class="art-header-panel" :style="divStyle">
      <div class="panel">
        <inertia-link :href="route('user.index')">
          <i class="ri-arrow-left-s-line"> </i>
        </inertia-link>
        <div class="header-name">
          <h3 style="color: white">Receive & Deposit</h3>
        </div>
      </div>
    </div>
  </header>
  <!-- header end -->

  <!-- deposit crypto start -->
  <section class="section-lg-t-space section-b-space">
    <div class="custom-container">
      <div class="category-detail-tab">
        <ul class="nav nav-tabs tab-style2" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="collect-tab"
              data-bs-toggle="tab"
              data-bs-target="#crypto"
              type="button"
              role="tab"
            >
              Cypto
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="created-tab"
              data-bs-toggle="tab"
              data-bs-target="#fiat"
              type="button"
              role="tab"
            >
              Fiat
            </button>
          </li>
        </ul>

        <div class="tab-content tab w-100" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="crypto"
            role="tabpanel"
            tabindex="0"
          >
            <div
              class="accordion theme-accordion"
              id="accordionExample"
              v-if="payment_methods.length"
            >
              <div
                class="accordion-item"
                v-for="(featureds, key) in payment_methods"
                :key="key"
              >
                <div
                  :class="[
                    'accordion-header',
                    { show: isSendModalVisible },
                  ]"
                  :id="`heading${featureds.id}`"
                  @click="toggleModal"
                >
                  <div
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsetwo"
                  >
                    <div class="nft-horizontal-box">
                      <div class="product-details">
                        <div class="product-image">
                          <img
                            :src="`/storage/payment_methods/${featureds.svg}`"
                            alt=""
                            style="height: 50px; width: 50px"
                          />
                        </div>
                        <div class="product-content">
                          <div>
                            <h4>{{ featureds.type }}</h4>
                          </div>
                          <div class="counter">
                            <h4>
                              {{
                                featureds.account === "0.0000"
                                  ? "0"
                                  : featureds.account
                              }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapsetwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="custom-container">
                      <div class="wallet-profile">
                        <img
                          class="img-fluid"
                          style="height: 100px; width: 100px"
                          :src="`/storage/user_wallets/${featureds.qr_code}`"
                          alt="Qr Code"
                        />
                        <h4>{{ featureds.type }} ( {{ featureds.symbol }} )</h4>
                        <div style="width: 200px" class="wallet-id">
                          <h5 style="overflow: hidden; text-overflow: ellipsis">
                            {{ featureds.wallet_address }}
                          </h5>
                          <button
                            type="button"
                            class="btn"
                            @click="copy(featureds.wallet_address)"
                          >
                            <i class="ri-file-copy-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <input
                      type="text"
                      style="display: none"
                      value="0x52d892bc11E9755F924W1DB0aP6981C7650b824F"
                      id="copywallet"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="fiat" role="tabpanel">
            <div style="margin-top: -60px" class="empty-tab">
              <img
                class="img-fluid bell"
                style="height: 150px; width: 150px"
                :src="`${props.imageUrl2}`"
                alt="coming soon"
              />
              <h3>Coming Soon</h3>
              <h4>Deposit Fiat directly into your account</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="panel-space"></section>
</template>
<script setup>
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import { Head } from "@inertiajs/vue3";
import { computed, onMounted, ref, watch, onBeforeMount } from "vue";
import { usePage } from "@inertiajs/vue3";
import feather from "feather-icons";
import { reactive } from "@vue/reactivity";
import { router } from "@inertiajs/vue3";
import { copy } from "@/js/functions";

const props = defineProps({
  payment_methods: Object,
  imageUrl: Object,
  imageUrl2: Object,
});
onMounted(() => {
  feather.replace();
});

const payment_methods = computed(() => props.payment_methods);

const isElementVisible = ref(false);

function showElement() {
  isElementVisible.value = true;
}
function handleClickOutside(event) {
  if (isElementVisible.value) {
    isElementVisible.value = false;
  }
}

const divStyle = computed(() => ({
  backgroundImage: `url(${props.imageUrl})`,
}));
const isSendModalVisible = ref(false);
function toggleModal() {
    // isSendModalVisible.value == false ?
    //     isSendModalVisible.value = true :
    //     isSendModalVisible.value = false 
    //     ;
        isSendModalVisible.value = !isSendModalVisible.value;

    
}
</script>