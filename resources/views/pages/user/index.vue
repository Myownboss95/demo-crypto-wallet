<template>
  <Head title="Dashboard" />
  <breadcrumb title="Dashboard" :crumbs="['Dashboard']" />
  <div v-if="payment_methods.length">
    <div class="row m-1" >
      <div class="p-3 col-md-4 col-sm-12" v-for="(featureds, key) in payment_methods"
        :key="key" >

        <div class="card shadow-lg radius-20">
          <div class="card-body">

            <div class="row align-items-center">
              <div class="col-3 p-0">
                <img
                  :src="`/storage/payment_methods/${featureds.svg}`"
                  alt=""
                  class="img-fluid"
                  style="width: 100px"
                />
              </div>
              <div class="col-3 p-0">
                <span
                  class="mb-3 lh-1 d-block h6"
                  style="text-transform: capitalize"
                  >{{ featureds.type }}</span>

                 <span
                  class="text-muted mb-3 lh-1 d-block text"
                  style="text-transform: capitalize"
                  > {{ data[featureds.type] }} USD</span>
               
                <!-- <inertia-link
                  :href="route('user.deposits.create')"
                  class="btn btn-primary"
                  >Deposit<i class="mdi mdi-arrow-right ms-1"></i
                ></inertia-link> -->
              </div>
              <div class="col-6 pe-3 ">
                <div class="text-right">
                 <h4 class="mb-3" style="text-align: right">
                  <span
                    class="counter-value"
                    data-target="{{ featureds.account }}"
                   >
                   {{ featureds.account === '0.0000' ? '0' : featureds.account }} {{ featureds.symbol }}
                  </span
                  >
                </h4>
                <span
                  class="text-muted mb-3 lh-1 d-block text"
                  style="text-transform: capitalize; text-align: right"
                  > {{ (data[featureds.type] * featureds.account).toFixed(2) }} USD</span>
                  </div>
              </div>
              
            </div>

            

          </div>
        </div>

      </div>
    </div>
  </div>

 

 
</template>

<script setup>
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { computed, onMounted, ref, watch, onBeforeMount } from "vue";
import axios from "axios";
import feather from "feather-icons";
import { useForm } from "@inertiajs/inertia-vue3";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import Error from "@/views/components/alerts/error.vue";
import { reactive } from '@vue/reactivity';

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


const pm = computed(() => {
  let pms = { "": "Choose Coin" };
  props.payment_methods.forEach(function (method) {
    pms[method.type] = method.type;
    // console.log(pms);
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
const selectMethod =  (amount, name) => {
  if (name == "" || amount == "") return;
  // price.value[name] = amount
  // axios
  //   .get(
  //     `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd`
  //   )
  //   .then((response) => {
  //     if (response.status == 200 && response.data[name.toLowerCase()]) {
  //       price.value[name] = response.data[name.toLowerCase()]['usd'];
  //       } else {
  //       throw Error();
  //     }
  //   })
  //   .catch((error) => {
  //    console.log(error);
  //   });
};
// const formattedAmount = computed(() => {
//       return (amount, symbol) => {
//         return selectMethod(amount, symbol);
//       };
//     });

//  onMounted(() => {
//       const methodsArray = Array.from(props.payment_methods);
//    for (const method of methodsArray) {
//         // console.log(method)
//         selectMethod(method.amount, method.name);
//       }
//     });
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
      console.log(data['Bitcoin'])
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
      
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
  ()=>form.name,
  (name)=>{
    axios.get(
      route('user.get.roi', name)
    )
    .then(
      (response) => {
        if (response.status == 200) {
          roi.value = response.data.data/100;
          // console.log(roi.value)
        } else{
          throw Error();
        }
      }
    )
    .catch((error)=>console.log(error))
  });


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
    console.log(error);
  }
};

</script>


<style>
.feather-50 {
  width: 50px;
  height: 50px;
}
</style>
