<template>
  <Head title="Sent" />
  <!-- table part -->
    <section class="section-lg-t-space section-lg-b-space">
    <div class="custom-container">
      <div v-for="(transaction, key) in transactions" :key="key">
      <div class="accordion theme-accordion" :id="`accordionExample${transaction.id}`" >
        <div style="background-color: rgb(31, 30, 30); height: 25px; margin: auto; padding: 5px;">
          <h5 style="color: grey; position: relative; margin-left: 15px;">{{ new Date(transaction.created_at).toDateString() }}</h5>
        </div>
        <div class="accordion-item">
          <div class="accordion-header" id="headingOne">
            <div class="accordion-button collapsed" data-bs-toggle="collapse" :data-bs-target="`#transaction${transaction.id}`">
              <div class="nft-horizontal-box">
                <div class="product-details">
                  <div class="product-image">
                    <img style="height: 15px; width: 15px; margin-left: 15px;" fill="#FFFFFF" class="img-fluid" src="@/assets/images/send.png"  v-if="transaction.type=='send'" :alt="transaction.type" />
                    <img style="height: 15px; width: 15px; margin-left: 15px;" fill="#FFFFFF" class="img-fluid" src="@/assets/images/receivewallet.png"  v-if="transaction.type=='deposit'" :alt="transaction.type" />
                    <img style="height: 15px; width: 15px; margin-left: 15px;" fill="#FFFFFF" class="img-fluid" src="@/assets/images/arrow-swap.png"  v-if="transaction.type=='withdrawal'" :alt="transaction.type" />


                  </div>
                  <div class="product-content">
                    <div>
                      <h4>{{  transactionType(transaction.type) }}</h4>
                      <h6>ref: {{ transaction.reference }}</h6>
                     
                    </div>
                    <div class="counter">
                         <div class="body" style="background-color: #ececec00">
                            <div class="traffic-light">
                                <div id="light" :class="Red(transaction.status)"></div>
                                <div id="light" :class="Yellow(transaction.status)"></div>
                                <div id="light" :class="Green(transaction.status)"></div>
                            </div>
                        </div>
                        
                      <h4> <span v-if="transaction.type == 'deposit'">
                        +</span>
                        <span v-else>-</span> {{ (transaction.amount).toFixed(2) }}{{ transaction.symbol }}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :id="`transaction${transaction.id}`" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul class="nft-horizontal-content">
                <li>
                  <h5>Status</h5>
                  <h6 class="text-success" :class="Red(transaction.status) ||Yellow(transaction.status) || Green(transaction.status)" style="background-color: inherit !important">{{ transaction.status }}</h6>
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
      </div>
      <div class="d-flex justify-content-center" v-if="transactions.length">
        <Paginator :links="links" />
      </div>
        </div>
        </section>
    <!-- end table part -->
</template>

<script setup>
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import { computed } from "vue";
import Paginator from "@/views/components/paginator.vue";

const props = defineProps({
  transactions: Object,
});
const transactions = computed(() => props.transactions.data);
const links = computed(() => props.transactions.links);
  // Compute the class based on the item's condition
const Yellow = (status) => {
    if (status == 'pending') return 'yellow';
};
    const Green = (status) => {
        if (status == 'successful') return 'green';
    };
    const Red = (status) => {
        if (status == 'failed') return 'red';
    };
  const depositType = computed(() => transactionType(type));
  const transactionType = (type) => type;

  const confirmation = (status) => {
    return (status == 'failed') ? 1 :
          ((status == 'pending') ? 2:  ((status == 'successful') ? 3:0)
          )
        
}
</script>

<style scoped>
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
}
.yellow {
  background-color: #facf5a !important;
}
.red {
  background-color: #bf4733 !important;
}
</style>
