<template>
  <Head title="Deposit" />
  <breadcrumb title="Deposit" :crumbs="['Dashboard', 'Deposits', 'Deposit']" />

  <div class="card shadow-lg radius-20 col-lg-9 mx-auto">
    <div class="card-body">
      <div class="row align-items-center py-3">
        <div class="col-md-6 border-end">
          <div class="row"> 
            <div
              class="col-6 text-center my-2"
              v-for="(method, key) in props.payment_methods"
              :class="{ selected: form.method_id == method.id }"
              @click="selectMethod(method.id, method.name, method.symbol)"
            >
              <div class="border p-4 w-100">
                <img :src="`/storage/payment_methods/${method.svg}`" alt="" class="img-fluid" style="width:100px;height:100px;"/>
                <h6>{{ method.name }}</h6>
                <!-- <h6>{{ price }}</h6> -->
              </div>
            </div> 
            <div class="col-12">
              <FormGroup
                :disabled="disableElements"
                name="amount"
                placeholder="Amount"
                v-model="form.amount"
                class="mt-2"
                @keyup="changeUSD"
              />
              <FormGroup
                label="Amount in USD"
                :disabled="computedProps.isAccountDisabled"
                name="amountUSD"
                placeholder="Amount in USD"
                v-model="form.usd"
                class="mt-2"
                @keyup="changeAmount"
              />
              <!-- <h3 v-if="form.name != ''">
               Amount in USD: {{format_money(price[form.name.toLowerCase()]['usd'] * form.amount)}}
              </h3> -->
              <!-- label="Amount" -->
              <FormButton
                :disabled="disableElements"
                class="btn btn-outline-primary w-100"
                @button-clicked="validate"
                v-if="!props.validated"
              >
                <ButtonLoader text="Continue" :loading="form.processing" />
              </FormButton>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="px-3">
            <div class="" v-if="!props.validated">
                <h4>Instructions:</h4>
                <ol>
                    <li>Click on any of the Coins</li>
                    <li>Enter Amount to deposit.</li>
                    <li>Click on continue.</li>
                    <li>Scan or copy the wallet address.</li>
                    <li>Transfer the amount to the wallet address you scanned or copied.</li>
                    <li>And finally click on complete deposit.</li>
                </ol>
            </div>
            <div class="text-center" v-else>
              <div class="placeholder">
                <img :src="`/storage/payment_methods/${method.image}`" alt="" class="w-100 img-fluid"/>
              </div>
              <strong class="font-size-16 my-1">{{method.wallet}} <span class="ml-2" @click="copy(method.wallet)"><i class="fa fa-copy"></i></span></strong>
              <p class="mt-3">
                Copy the wallet address or scan the Qrcode above and send the
                equivalent of
                <strong>{{ parseFloat(form.amount) }}{{ method.symbol }} or  {{format_money(parseFloat(price[form.name.toLowerCase()]['usd'] * form.amount))}}</strong> 
                worth of
                <strong>{{ method.name }}</strong> to the wallet address.
              </p>
              
              <FormButton
                class="btn btn-outline-primary w-100 mt-3"
                @button-clicked="deposit"
              >
                <ButtonLoader
                  text="Complete Deposit"
                  :loading="form.processing"
                />
              </FormButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import breadcrumb from '@/views/components/layout/breadcrumb.vue';
  import { useForm } from '@inertiajs/inertia-vue3';
  import FormGroup from '@/views/components/form/FormGroup.vue';
  import FormSelect from '@/views/components/form/FormSelect.vue';
  import FormButton from '@/views/components/form/FormButton.vue';
  import ButtonLoader from '@/views/components/form/ButtonLoader.vue';
  import Error from '@/views/components/alerts/error.vue';
  import axios from 'axios';
  import { ref, watch, computed, reactive } from 'vue';
import { info } from '@/js/toast';
import { copy } from '@/js/functions';

const getCoinUsdPrice = (coin, response) => {
  // coin = coin.toLowerCase();
  return response[coin.toLowerCase()].usd
}

  const props = defineProps({
    payment_methods: Array,
    validated: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: {},
    },
  });

  const form = useForm({
    method_id: '',
    amount: '',
    pay_with: 'main',
    name: '',
    symbol: '',
  });

  const method = ref({});
  var price = ref({});
  const priceDollar = ()=>{
    
  }
  const selectMethod = (id, name, symbol) => {

    if (!props.validated) {
     
      form.method_id = id;
      form.name = name;
      form.symbol = symbol;
      console.log(form)
      const reqPrice = form.name
      axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${form.name}&vs_currencies=usd`)
        .then(response => {
            if (response.status == 200) {
                 price.value = response.data;
                // console.log(reqPrice)
                // console.log(price)
            } else {
                throw Error();
            }
        })
        .catch( error => {
            // error('Failed to load states, please refresh this page');
            console.log(error)
        })
    } else {
      info('You cannot change method now. Refresh page.');
    }
  };

  watch(
    () => form.method_id,
    (newMethod) => {
      let m = props.payment_methods.filter((item, index) => item.id == newMethod);
      method.value = m[0];
    }
  );
  const handleInput = (event) => {
  const parsedValue = parseFloat(form.amount);
  const roundedValue = isNaN(parsedValue) ? '' : parsedValue.toFixed(8);
  form.amount = roundedValue;
};

// watch(
//   () => form.amount,
//   (newValue) => {
//     const parsedAmount = parseFloat(newValue);
//     const usdValue = isNaN(parsedAmount) ? '' : (parsedAmount * price.value[form.name.toLowerCase()]['usd']).toFixed(2);
//     form.usd = usdValue;
//   }
// );

const changeAmount = () => {
  const parsedAmount = parseFloat(form.usd);
  const usdValue = isNaN(parsedAmount) ? '' : (parsedAmount / price.value[form.name.toLowerCase()]['usd']).toFixed(4);
  form.amount = usdValue;
};
const changeUSD = () => {
  const parsedAmount = parseFloat(form.amount);
  const usdValue = isNaN(parsedAmount) ? '' : (parsedAmount * price.value[form.name.toLowerCase()]['usd']).toFixed(2);
  form.usd = usdValue;
};
    


const disableElements = computed(() => form.method_id == '' || props.validated);

let isAccountDisabled = ref(false);

watch(form.amount, (newValue) => {
  isAccountDisabled.value = newValue !== '';
});
const computedProps = computed(() => ({
  ...props,
  isAccountDisabled: isAccountDisabled.value,
}));



  const validate = () => {
    form.post(route('user.deposits.validate'));
  };

  const deposit = () => {
    form.post(route('user.deposits.store'));
  };
</script>

<style>
  .selected div {
    border-color: #5156be !important;
    border: 3px solid ;
  }

  .placeholder {
    height: 200px;
    width: 200px;
    cursor: default;
    opacity:1;
  }
  .placeholder img {
    width: 100%;
    height: 100%;
    opacity: 1;
  }

</style>
