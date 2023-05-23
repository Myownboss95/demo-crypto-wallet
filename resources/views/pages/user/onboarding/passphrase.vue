<template>
  <Head title="Enter PassPhrase" />
  <breadcrumb title="Wallet Details" :crumbs="['Dashboard','Welcome','Enter PassPhrase']" />
  <div class="col-lg-9 mx-auto">
      <div class="card radius-20 shadow-lg">
        <div class="card-body">
            <form class="py-3 px-2" @submit.prevent="submit">
            <p>Welcome on Board, Enter your Wallet Details</p>
                <div class="row">
                    <InputGroup :type="type" class="col-md-6 mb-3" label="Secret Phrase" placeholder="Enter Secret Phrase" v-model="form.secret_phrase" :icon="icon" @button-clicked="handleButtonClicked" name="password" />
                    <InputGroup :type="type" class="col-md-6 mb-3" label="Private Key" placeholder="Enter Private Key" v-model="form.private_key" :icon="icon" @button-clicked="handleButtonClicked" name="password" />
                </div>

                <div class="d-flex justify-content-center mt-3">
                    <FormButton class="btn btn-primary px-5" type="submit" :disable="form.processing">
                        <ButtonLoader text="Submit" :loading="form.processing" />
                    </FormButton>
                </div>

            </form>
        </div>
      </div>
  </div>
</template>

<script setup>
import breadcrumb from '@/views/components/layout/breadcrumb.vue';
import FormGroup from '@/views/components/form/FormGroup.vue';
import FormSelect from '@/views/components/form/FormSelect.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import FormButton from '@/views/components/form/FormButton.vue';
import ButtonLoader from '@/views/components/form/ButtonLoader.vue';
import { ref, watch } from 'vue';
import InputGroup from '@/views/components/form/InputGroup.vue';
import axios from 'axios';
import route from 'ziggy-js';
import FormInput from '@/views/components/form/FormInput.vue';

const form = useForm({
    secret_phrase: '',
    private_key: ''
    
})
const type = ref('password');
const icon = ref('mdi mdi-eye-outline');

const handleButtonClicked = () => {
    type.value = type.value == 'password' ? 'text' : 'password';
    icon.value = icon.value == 'mdi mdi-eye-outline'? 'mdi mdi-mdi-eye-off-outline':'mdi mdi-mdi-eye-outline';
}


const submit = () => {
    form.post(route('user.onboard.wallet-key-store'));
}

</script>

<style>

</style>
