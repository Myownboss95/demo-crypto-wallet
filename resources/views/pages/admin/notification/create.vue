<template>
  <Head title="Create Notification" />
  <breadcrumb
    title="Create Notification"
    :crumbs="['Dashboard', 'Notification', 'Create']"
  />
  <div class="col-lg-4 m-auto">
    <div class="card shadow-lg radius-20">
      <div class="card-body">
        <form @submit.prevent="createNotification">
          <FormGroup
            name="name"
            placeholder="Notification name"
            label="Notification name"
            v-model="form.name"
          />
          <div class="col">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="form.status"
              id="remember-check"
            />
            <label class="form-check-label" for="remember-check">
              Message Enabled
            </label>
          </div>
        </div>
        <div class="mt-3 mb-3">
            <label>Message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              class="form-control"
              v-model="form.message"
            >
            </textarea>
          </div>

          <FormButton
            type="submit"
            class="w-100 btn btn-outline-primary"
            :disabled="form.processing"
          >
            <ButtonLoader text="Create Notification" :loading="form.processing" />
          </FormButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import breadcrumb from '@/views/components/layout/breadcrumb.vue';
  import FormGroup from '@/views/components/form/FormGroup.vue';
  import FormSelect from '@/views/components/form/FormSelect.vue';
  import FormButton from '@/views/components/form/FormButton.vue';
  import ButtonLoader from '@/views/components/form/ButtonLoader.vue';
  import { useForm } from '@inertiajs/inertia-vue3';
  import InputGroup from '@/views/components/form/InputGroup.vue';
  import { error } from '@/js/toast';

  const form = useForm({
    name: '',
    message: '',
    status: true,
  });
  const createNotification = (_) => {
    form.post(route('admin.notification.store'));
  };
</script>

<style>
</style>
