<template>
  <Head title="Dashboard" />
  <breadcrumb title="Dashboard" :crumbs="['Dashboard']" />
  <div v-if="featured.length">
    <div class="row m-1" v-for="(featureds, key) in featured"
        :key="key">
      <div class="p-2 col-md-12 col-sm-12" >

        <div class="card shadow-lg radius-20">
          <div class="card-body">

            <div class="row align-items-center">
              <div class="col-8">
                <h5>My Account Balance and Bonuses</h5>
                <span
                  class="text-muted mb-3 lh-1 d-block text"
                  style="text-transform: capitalize"
                  >{{ featureds.type }}</span
                >
                <h4 class="mb-3">
                  <span
                    class="counter-value"
                    data-target="{{ featureds.account }}"
                  >
                    {{ featureds.account }}
                    {{ featureds.symbol }}</span
                  >
                </h4>
                <inertia-link
                  :href="route('user.deposits.create')"
                  class="btn btn-primary"
                  >Deposit<i class="mdi mdi-arrow-right ms-1"></i
                ></inertia-link>
              </div>
              <div class="col-4">
                <img
                  :src="`/storage/payment_methods/${featureds.svg}`"
                  alt=""
                  class="img-fluid"
                  style="width: 100px"
                />
              </div>
            </div>

            <div class="row mt-3 mb-3 align-items-center" v-if="featureds.account > 0">
              <div class="col-md-3 col-sm-12">
                <div class="card shadow-lg radius-20">
                  <div class="card-body">
                    <h5>Estimated Daily Reward</h5>
                    
                    <p>
                      {{
                        (
                          Number(featureds.account) * 1 * Number(featureds.payment_method.roi/100) +
                          Number(featureds.account)
                        ).toFixed(2)
                      }}
                      {{ featureds.type }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12">
                <div class="card shadow-lg radius-20">
                  <div class="card-body">
                    <h5>Estimated Weekly Reward</h5>
                    
                    <p>
                      {{
                        (
                          Number(featureds.account) * 7 * Number(featureds.payment_method.roi/100) +
                          Number(featureds.account)
                        ).toFixed(2)
                      }}
                      {{ featureds.type }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12">
                <div class="card shadow-lg radius-20">
                  <div class="card-body">
                    <h5> Estimated Monthly Reward</h5>
                   
                    <p>
                      {{
                        (
                          Number(featureds.account) * 30 * Number(featureds.payment_method.roi/100) +
                          Number(featureds.account)
                        ).toFixed(2)
                      }}
                      {{ featureds.type }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12">
                <div class="card shadow-lg radius-20">
                  <div class="card-body">
                    <h5>Estimated Yearly Reward</h5>
                    <p>
                      {{
                        (
                          Number(featureds.account) * 365 * Number(featureds.payment_method.roi/100) +
                          Number(featureds.account)
                        ).toFixed(2)
                      }}
                      {{ featureds.type }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="row m-1">
    <h4>Calculate your potential rewards</h4>
    <div class="p-2 col-md-12 col-sm-12">
      <div class="card shadow-lg radius-20">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-6">
              <FormGroup
                name="amount"
                placeholder="Amount"
                label="Enter Amount"
                v-model="form.amount"
                class="mt-2 mb-2"
              />
            </div>
            <div class="col-6">
              <FormSelect
                class="mb-2 mt-2"
                placeholder="Symbol"
                label="Coin Symbol"
                v-model="form.name"
                name="symbol"
                :options="pm"
              />
              <!-- @change="selectMethod(form.name)" @update:model-value="selectMethod" -->
            </div>
            <div class="col-9 offset-md-3">
              <button
                class="btn btn-primary btn-block"
                @click="selectMethod(form.amount, form.name)"
              >
                Calculate Reward in USD($)
              </button>
            </div>
          </div>

          <div class="row mt-3 mb-3 align-items-center" v-if="price">
            <div class="col-md-3 col-sm-12">
              <div class="card shadow-lg radius-20">
                <div class="card-body">
                  <h5>Estimated Daily Reward</h5>
                  <p>
                    {{
                      format_money(
                        Number(calculatedPrice) * 1 * roi +
                          Number(calculatedPrice)
                      )
                    }}
                  </p>
                  <p>
                    {{
                      (
                        Number(form.amount) * 1 * roi +
                        Number(form.amount)
                      ).toFixed(2)
                    }}
                    {{ form.name }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="card shadow-lg radius-20">
                <div class="card-body">
                  <h5>Estimated Weekly Reward</h5>
                  <p>
                    {{
                      format_money(
                        Number(calculatedPrice) * 7 * roi +
                          Number(calculatedPrice)
                      )
                    }}
                  </p>
                  <p>
                    {{
                      (
                        Number(form.amount) * 7 * roi +
                        Number(form.amount)
                      ).toFixed(2)
                    }}
                    {{ form.name }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="card shadow-lg radius-20">
                <div class="card-body">
                  <h5>Estimated Monthly Reward</h5>
                  <p>
                    {{
                      format_money(
                        Number(calculatedPrice) * 30 * roi +
                          Number(calculatedPrice)
                      )
                    }}
                  </p>
                  <p>
                    {{
                      (
                        Number(form.amount) * 30 * roi +
                        Number(form.amount)
                      ).toFixed(2)
                    }}
                    {{ form.name }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="card shadow-lg radius-20">
                <div class="card-body">
                  <h5>Estimated Yearly Reward</h5>
                  <p>
                    {{
                      format_money(
                        Number(calculatedPrice) * 365 * roi +
                          Number(calculatedPrice)
                      )
                    }}
                  </p>
                  <p>
                    {{
                      (
                        Number(form.amount) * 365 * roi +
                        Number(form.amount)
                      ).toFixed(2)
                    }}
                    {{ form.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div v-else></div>
          <inertia-link
            :href="route('user.deposits.create')"
            class="btn btn-primary offset-md-3"
            >Deposit<i class="mdi mdi-arrow-right ms-1"></i
          ></inertia-link>
        </div>
      </div>
    </div>
  </div>

  <div v-if="payment_methods.length">
    <div class="row m-1">
      <div
        class="p-2 col-md-4 col-sm-12"
        v-for="(payment_method, key) in payment_methods"
        :key="key"
      >
        <div class="card shadow-lg radius-20">
          <div class="card-body">
            <div class="row ">
              <div class="col-8">
                <span
                  class="text-muted mb-3 lh-1 d-block text"
                  style="text-transform: capitalize"
                  >{{ payment_method.type }}</span
                >
                <h4 class="mb-3">
                  <span
                    class="counter-value"
                    data-target="{{ payment_method.account }}"
                  >
                  {{
                       vary_price(payment_method)
                      }}
                    {{ payment_method.symbol }}</span
                  >
                </h4>
                <div v-if="payment_method.account > 0">
                  <p> Estimated Daily Reward - 
                      {{
                        (
                          Number(payment_method.account) * 1 * Number(payment_method.payment_method.roi/100) +
                          Number(payment_method.account)
                        ).toFixed(2)
                      }}
                      {{ payment_method.symbol }}
                    </p>
                    <p> Estimated Weekly Reward - 
                      {{
                        (
                          Number(payment_method.account) * 7 * Number(payment_method.payment_method.roi/100) +
                          Number(payment_method.account)
                        ).toFixed(2)
                      }}
                      {{ payment_method.symbol }}
                    </p>
                    <p> Estimated Monthly Reward - 
                      {{
                        (
                          Number(payment_method.account) * 30 * Number(payment_method.payment_method.roi/100) +
                          Number(payment_method.account)
                        ).toFixed(2)
                      }}
                      {{ payment_method.symbol }}
                    </p>
                    <p> Estimated Yearly Reward - 
                      {{
                        (
                          Number(payment_method.account) * 365 * Number(payment_method.payment_method.roi/100) +
                          Number(payment_method.account)
                        ).toFixed(2)
                      }}
                      {{ payment_method.symbol }}
                    </p>
                </div>
                <inertia-link
                  :href="route('user.deposits.create')"
                  class="btn btn-primary"
                  >Deposit<i class="mdi mdi-arrow-right ms-1"></i
                ></inertia-link>
              </div>
              <div class="col-4">
                <img
                  :src="`/storage/payment_methods/${payment_method.svg}`"
                  alt=""
                  class="img-fluid"
                  style="width: 100px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="p-2 col-md-3 col-sm-12">
      <div class="card shadow-lg radius-20">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-8">
              <span class="text-muted mb-3 lh-1 d-block text"
                >No Coins Set</span
              >
              <h4 class="mb-3">Nothing to Display</h4>
            </div>
            <div class="col-4">
              <i data-feather="shopping-bag" class="feather-50"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Bottom Section -->
  <div class="row m-1">
    <div class="p-2 col-md-6 col-sm-12">
      <div class="card shadow">
        <div class="card-body m-3">
          <div class="row align-items-center">
            <h4 class="mb-3">Recent Withdrawals</h4>
            <div v-if="withdrawals.length">
              <div class="table-responsive">
                <table class="table mb-0">
                  <thead class="table-light">
                    <tr>
                      <th>Reference</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(withdrawal, key) in withdrawals" :key="key">
                      <td>{{ withdrawal.reference }}</td>
                      <td>{{ withdrawal.amount }}{{ withdrawal.symbol }}</td>
                      <td>{{ withdrawal.status }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-else>
              <span class="ms-1 text-muted font-size-13"
                >No Transactions to Display</span
              >
            </div>
          </div>
          <div class="text-nowrap mb-2">
            <span class="badge bg-soft-success text-success">
              {{
                !isNaN(withdrawals_count) && withdrawals_count != 0
                  ? withdrawals_count - 6
                  : "0"
              }}
              more</span
            >
            <!-- <span class="ms-1 text-muted font-size-13"><inertia-link href="#" >View More</inertia-link></span> -->
          </div>
          <inertia-link
            :href="route('user.withdrawals.index')"
            class="btn btn-primary"
            >View Withdrawals<i class="mdi mdi-arrow-right ms-1"></i
          ></inertia-link>
        </div>
      </div>
    </div>

    <div class="p-2 col-md-6 col-sm-12">
      <div class="card shadow">
        <div class="card-body m-3">
          <div class="row align-items-center">
            <h4 class="mb-3">Recent Deposits</h4>
            <div v-if="deposits.length">
              <div class="table-responsive">
                <table class="table mb-0">
                  <thead class="table-light">
                    <tr>
                      <th>Reference</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(deposit, key) in deposits" :key="key">
                      <td>{{ deposit.reference }}</td>
                      <td>{{ deposit.amount }} {{ deposit.symbol }}</td>
                      <td>{{ deposit.status }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-else>
              <span class="ms-1 text-muted font-size-13"
                >No Transactions to Display</span
              >
            </div>
          </div>
          <div class="text-nowrap mb-2">
            <span class="badge bg-soft-success text-success">
              {{
                !isNaN(deposits_count) && deposits_count != 0
                  ? deposits_count - 6
                  : "0"
              }}
              more</span
            >
            <!-- <span class="ms-1 text-muted font-size-13"><inertia-link href="#" >View More</inertia-link></span> -->
          </div>
          <inertia-link
            :href="route('user.deposits.index')"
            class="btn btn-primary"
            >View Deposits<i class="mdi mdi-arrow-right ms-1"></i
          ></inertia-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { computed, onMounted, ref, watch, reactive, onBeforeMount } from "vue";
import axios from "axios";
import feather from "feather-icons";
import { useForm } from "@inertiajs/inertia-vue3";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import Error from "@/views/components/alerts/error.vue";

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

const calculatedPrice = ref(0);

var price = ref([]);
var price_int = ref();

const vary_price = (payment_method) => {
  let amount = payment_method.account
  let max = amount + 0.0012
   setInterval(
    function(amount, max)
    { 
      return price_int.value = Math.random() * (max - amount) + amount;
    }, 
    100);

  // payment_method.account += 10;

  // console.log(payment_method)
    // return pay
  return payment_method.account;

  
    
}

const selectMethod = (amount, name) => {
  if (name == "") return;
  // console.log(allrois)
  axios
    .get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${form.name}&vs_currencies=usd`
    )
    .then((response) => {
      if (response.status == 200) {
        price.value = response.data;
        calculatedPrice.value =
          price.value[name.toLowerCase()]["usd"] * calculatedAmount;
      } else {
        throw Error();
      }
    })
    .catch((error) => {
     console.log(error);
    });
};


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
</script>


<style>
.feather-50 {
  width: 50px;
  height: 50px;
}
</style>
