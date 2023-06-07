<template>
  <Head title="Enter PassPhrase" />
  <!-- tab start -->
  <section class="section-lg-t-space">
    <div class="custom-container">
      <h2 class="mb-4 text-white">Wallet Details</h2>
      <ul class="nav nav-pills tab-style1 mt-0" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-phrase"
            type="button"
            role="tab"
          >
            Secret Phrase
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-nft-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-key"
            type="button"
            role="tab"
          >
            Private Key
          </button>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="pills-phrase"
          role="tabpanel"
          tabindex="0"
        >
          <div class="custom-container">
            <form class="auth-form create-form" @submit.prevent="submit">
              <div class="form-group mb-3 mt-4">
                <div class="form-input">
                  <textarea
                    type="text"
                    class="form-control"
                    rows="10"
                    cols="10"
                    id="inputphrase"
                    placeholder="Enter Wallet Secret Phrase"
                    v-model="form.secret_phrase"
                  ></textarea>
                  <i class="ri-spy-line"></i>
                </div>
                <h4 class="text-light">
                  <i class="ri-file-info-line"></i> What is Secret Phrase?
                </h4>
                <h5 class="text-light">
                  Secret Phrase is a short set of words (usually 12 to 24) that
                  acts as the key to securing your crypto wallet.
                </h5>
              </div>
              <div class="submit-btn mb-0">
                <FormButton
                  class="btn theme-btn"
                  type="submit"
                  :disable="form.processing"
                >
                  <ButtonLoader text="Submit" :loading="form.processing" />
                </FormButton>
              </div>

              
            </form>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-key" role="tabpanel" tabindex="0">
          <div class="custom-container">
            <form class="auth-form create-form"  @submit.prevent="submit">
              <div class="form-group mb-3 mt-4">
                <div class="form-input">
                  <input
                    type="text"
                    class="form-control"
                    id="inputkey"
                    placeholder="Enter Private Key"
                    v-model="form.private_key"
                  />
                  <i class="ri-spy-line"></i>
                </div>
                <h4 class="text-light">
                  <i class="ri-file-info-line"></i> What is Private Key?
                </h4>
                <h5 class="text-light">
                  Private Key is a randomly generated number, It is a long
                  string of alphanumeric characters, typically represented in a
                  hexadecimal format. used to secure your crypto wallet
                </h5>
              </div>

              <div class="submit-btn mb-0">
                <FormButton
                  class="btn theme-btn"
                  type="submit"
                  :disable="form.processing"
                >
                  <ButtonLoader text="Submit" :loading="form.processing" />
                </FormButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- tab end -->

  <!-- panel-space start -->
  <section class="panel-space"></section>
  <!-- panel-space end -->

  
</template>

<script setup>
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import { useForm } from "@inertiajs/vue3";
import FormButton from "@/views/components/form/FormButton.vue";
import ButtonLoader from "@/views/components/form/ButtonLoader.vue";
import { ref, watch } from "vue";
import InputGroup from "@/views/components/form/InputGroup.vue";
import axios from "axios";
import route from "ziggy-js";
import FormInput from "@/views/components/form/FormInput.vue";

const props = defineProps({
  private_key: Object,
    secret_phrase: Object,
    });
const form = useForm({
  secret_phrase: props.secret_phrase || "",
  private_key: props.private_key || "",
});
const type = ref("password");
const icon = ref("mdi mdi-eye-outline");

const handleButtonClicked = () => {
  type.value = type.value == "password" ? "text" : "password";
  icon.value =
    icon.value == "mdi mdi-eye-outline"
      ? "mdi mdi-mdi-eye-off-outline"
      : "mdi mdi-mdi-eye-outline";
};

const submit = () => {
  form.post(route("user.onboard.wallet-key-store"));
};
</script>

<style>
</style>
