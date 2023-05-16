<template>
  <Head title="Notifications" />
  <breadcrumb title="Notifications" :crumbs="['Dashboard', 'Notifications']" />

  <div class="card shadow col-lg-10 mx-auto">
    <div class="card-body">
        <div class="text-end">

            <InertiaLink :href="route('admin.notification.create')" class="btn btn-outline-primary">
                <i class="fa fa-plus"></i>
                Add Notification
            </InertiaLink>
        </div>
        <div class="table-responsive">
          <table class="table">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Message</th>
                      <th>Status</th>
                      <th>Actions</th>
                      
                  </tr>
              </thead>

              <tbody v-if="notifications.length">
                  <tr v-for="(notification, key) in notifications" :key="key">
                      <td>{{notification.name}}</td>
                      <td>{{notification.message}}</td>
                      <td>{{notification.status==1?'Activated':'Deactivated'}}</td>
                      <td>
                          <InertiaLink :href="route('admin.notification.edit',notification.id)" class="btn btn-outline-primary btn-sm">
                              <i class="fa fa-edit"></i>
                          </InertiaLink>

                          <InertiaLink method="delete" :href="route('admin.notification.destroy',notification.id)" class="btn btn-outline-danger btn-sm" as="button">
                              <i class="fa fa-trash"></i>
                          </InertiaLink>
                      </td>
                  </tr>
              </tbody>
              <tbody v-else>
                <tr>
                    <td colspan="9" class="text-muted text-center">No notifications found</td>
                </tr>
              </tbody>
          </table>
        </div>
        <div class="d-flex justify-content-center" v-if="notifications.length">
            <Paginator :links="links" />
        </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumb from '@/views/components/layout/breadcrumb.vue';
import { computed } from '@vue/runtime-core';
import Paginator from '@/views/components/paginator.vue';

const props = defineProps({
    notifications: Object,
});

const links = computed(() => props.notifications.links);
const notifications = computed(() => props.notifications.data);

</script>

<style>

</style>
