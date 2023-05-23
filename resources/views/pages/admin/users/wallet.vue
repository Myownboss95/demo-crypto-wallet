<template>
  <Head title="Wallet Details" />
  <breadcrumb
    title="User Wallet Details"
    :crumbs="['Dashboard', 'User Wallet Details']"
  />
  <span class="font-size-12">
    <InertiaLink
      :href="route('admin.users.index')"
      class="btn btn-outline-primary btn-sm border-0"
    >
      <i class="fa fa-arrow-left"></i>
      Back
    </InertiaLink>
  </span>
  <div class="row">
    <div class="col-xl-9 col-lg-8 mx-auto">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-sm order-2 order-sm-1">
              <div class="d-flex align-items-start mt-3 mt-sm-0">
                <div class="flex-shrink-0">
                  <div class="avatar-xl me-3 mr-3">
                    <img
                      :src="profile_picture(user.image)"
                      alt=""
                      class="rounded-circle header-profile-user mr-1"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                </div>
                <div class="flex-grow-1">
                  <div class="ml-3">
                    <h5 class="font-size-16 mb-1">
                      {{ user.first_name }} {{ user.last_name }}
                    </h5>
                    <p class="text-muted font-size-13">
                      {{ user.email }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul
            class="nav nav-tabs-custom card-header-tabs border-top mt-4"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link px-3 active"
                data-bs-toggle="tab"
                href="#overview"
                role="tab"
                >Wallet Details</a
              >
            </li>
          </ul>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->

      <div class="tab-content">
        <div class="tab-pane active" id="overview" role="tabpanel">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Wallet Details</h5>
            </div>
            <div class="card-body">
              <div>
                <div class="pb-3">
                  <div class="row m-5" v-for="(coin, key) in coins" :key="key">
                    <div class="col-12">
                      <div class="text-muted">
                        <!-- test -->
                        <div class="row">
                          <p class="h5">{{ coin.symbol }} Wallet Details</p>
                          <div class="col-md-6 col-sm-12 border p-1">
                            <p class="fw-bold">{{ coin.wallet_address }}</p>
                          </div>
                          <div class="col-md-4 col-sm-12 border p-1">
                            <div
                              class=""
                              v-if="coin.qr_code != null"
                            >
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
                          <div class="col-md-2 col-sm-12 border p-1 ref">
                            <span
                              class="ml-4"
                              @click="copy(coin.wallet_address)"
                              ><i class="fa fa-copy"></i>
                              <strong> Click to Copy</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 p-1">
                      <span
                        @click="showModal(user?.id, coin)"
                        class="btn btn-outline-primary btn-sm"
                      >
                        <i class="fa fa-edit"></i> Edit Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal
    title="Edit Wallet"
    :open="openModal"
    @modal-closed="openModal = false"
  >
    <div class="modal-body">
      <form @submit.prevent="submit(modalUser)">
        <div class="text-left">
          <div class="row mt-3">
            <h3>{{ modalCoin }}</h3>
            <FormGroup
              label="Enter Wallet Address"
              placeholder="Enter Wallet Address"
              v-model="form.wallet_address"
              name="wallet_address"
            />
            <label for="" class="form-label">QR Code</label>
            <input
              type="file"
              class="form-control"
              @change="form.qr_code = $event.target.files[0]"
              accept="image/*"
            />
            <Error name="qr_code" />
          </div>
          <div class="d-flex justify-content-between mt-3">
            <FormButton
              type="submit"
              class="w-100 btn btn-outline-primary mt-3"
              :disabled="form.processing"
            >
              <ButtonLoader text="Update Wallet" :loading="form.processing" />
            </FormButton>
          </div>
        </div>
      </form>
    </div>
  </Modal>
</template>

<script setup>
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import { computed } from "@vue/runtime-core";
import FormInput from "@/views/components/form/FormInput.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref, watch } from "vue";
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
});
// console.log(props.referrals);
const user = computed(() => props.user);
const coins = computed(() => props.user.accounts);
const modalUser = ref({});
const modalCoin = ref({});
const openModal = ref(false);
const field = (coin) => coin;
const fieldName = computed(() => {
  return (coin) => field(coin);
});
const labelName = computed(() => {
  return (coin) => `Enter ${field(coin)} Address`;
});

const form = useForm({
  wallet_address: "",
  qr_code: "",
  coin_id: "",
});
const showModal = (id, coin) => {
  modalCoin.value = coin.symbol;
  form.wallet_address = coin.wallet_address;
  form.coin_id = coin.payment_method_id;
  modalUser.value = id;
  openModal.value = true;
};

const closeModal = () => {
  document.querySelectorAll(".btn-close").forEach((element) => {
    element.click();
  });
};
const submit = (id) => {
  form.post(route("admin.users.wallet.update", id));
  closeModal();
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
