<template>
    <Head title="Confirm Transaction" />
<!-- confirm offer title starts -->
  <section class="section-lg-t-space">
    <div class="custom-container">
      <div class="wallet-profile">
        <h2>- {{ data.amount }} {{ data.symbol }}</h2>
        <h3>= ${{ (data.usd).toFixed(2) }}</h3>
      </div>
    </div>
  </section>
  <!-- confirm offer title end -->

  <!-- confirm offer section starts -->
  <section class="section-t-space">
    <div class="custom-container">
      <div class="confirm-offer-details">
        <div class="message-body">
          <ul style="margin-top: -10px;" class="notification-listing">
            <li>
              <div class="notification-details">
                <div class="notification-content">
                  <div>
                    <h4>Asset</h4>
                  </div>
                  <div>
                    <h6>{{ data.symbol }}</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="notification-details">
                <div class="notification-content">
                  <div>
                    <h4>From</h4>
                  </div>
                  <div>
                    <h6>Main Wallet ( {{ data.user_address }} )</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="notification-details">
                <div class="notification-content">
                  <div>
                    <h4>To</h4>
                  </div>
                  <div>
                    <h6>{{ data.address }}</h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="confirm-offer-details">
        <div class="message-body">
          <ul style="margin-top: -10px;" class="notification-listing">
            
            <li>
              <div class="notification-details">
                <div class="notification-content">
                  <div>
                    <h4>Max Total</h4>
                  </div>
                  <div>
                    <h4>${{ (data.usd).toFixed(2) }}</h4>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
<form class="auth-form" target="_blank">
        
        <div class="submit-btn d-flex w-100 mt-5">
        <FormButton
                :disabled="disableElements"
                class="btn btn-inline theme-btn w-100 text-center"
                @button-clicked="send"
              >
                <ButtonLoader text="Confirm" :loading="form.processing" />
              </FormButton>
        </div>
      </form>
      
    </div>
  </section>
  <!-- confirm offer section end -->
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
    data: Object,
    });
const data = computed(() => props.data);
    // console.log(data.value)
    const form = useForm({
        method_id: data.method_id,
        amount: data.amount,
        address: data.address,
    });
   const send = () => {
            form.post(route("user.confirm.store"));
            };
</script>