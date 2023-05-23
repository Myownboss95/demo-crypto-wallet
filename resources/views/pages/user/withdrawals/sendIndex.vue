<template>
  <Head title="Sent" />
  <breadcrumb title="Send" :crumbs="['Dashboard', 'Sent']" />
  <div class="card shadow-lg col-lg-9 mx-auto radius-20">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Reference</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody v-if="deposits.length">
            <tr v-for="(deposit, key) in deposits" :key="key">
              <td>{{ deposit.reference }}</td>
              <td>{{ deposit.amount }} {{ deposit.symbol }}</td>
              <td>
                {{ deposit.status }}
                <div class="body">
                  <div class="traffic-light">
                    <div id="light" :class="Red(deposit.status)"></div>
                    <div id="light" :class="Yellow(deposit.status)"></div>
                    <div id="light" :class="Green(deposit.status)"></div>
                  </div>
                </div>
              </td>
              <td>{{ new Date(deposit.created_at).toDateString() }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="10" class="text-muted text-center">
                No withdrawals found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center" v-if="deposits.length">
        <Paginator :links="links" />
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import { computed } from "vue";
import Paginator from "@/views/components/paginator.vue";

const props = defineProps({
  deposits: Object,
});
const deposits = computed(() => props.deposits.data);
const links = computed(() => props.deposits.links);
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
