<template>
  <Head title="Verification" />
  
  <section class="section-t-space">
    <div class="custom-container">
        <form class="auth-form create-form" @submit.prevent="submit">
          <p class="text-center">
            Congratulations, your address data has been stored successfully. We
            need to verify, you are who, you say you are. Please upload your
            photograph and a verification document.
          </p>

          <FormSelect
            class="my-4"
            label="Document type"
            v-model="form.type"
            name="state"
            :options="types"
          />

          <div
            v-if="form.type == 'identity' || form.type == 'licence'"
            class="d-flex justify-content-ceter row py-3 align-items-center"
          >
            <div class="col-md-12">
              <div class="placeholder d-block mb-3 shadow-lg">
                <img :src="front" alt="" class="img-fluid" />
              </div>
              <label for="" class="form-label">Front</label>
              <input
                type="file"
                class="form-control"
                @change="form.front = $event.target.files[0]"
                accept="image/*"
              />
              <Error name="front" />
            </div>
            <div class="col-md-12">
              <div class="placeholder d-block mb-3 shadow-lg">
                <img :src="back" alt="" class="img-fluid" />
              </div>
              <label for="" class="form-label">Back</label>
              <input
                type="file"
                class="form-control"
                @change="form.back = $event.target.files[0]"
                accept="image/*"
              />
              <Error name="back" />
            </div>
          </div>

          <div
            v-else-if="form.type == 'passport'"
            class="d-flex justify-content-center row py-3 align-items-center"
          >
            <div class="col-md-12">
              <div class="placeholder d-block mb-3 shadow-lg">
                <img :src="datapage" alt="" class="img-fluid" />
              </div>
              <label for="" class="form-label">Data page</label>
              <input
                type="file"
                class="form-control"
                @change="form.datapage = $event.target.files[0]"
                accept="image/*"
              />
              <Error name="datapage" />
            </div>
          </div>

          <div
            class="d-flex justify-content-center row py-3 align-items-center"
          >
            <div class="col-md-12">
              <div class="placeholder d-block mb-3 shadow-lg">
                <img :src="photograph" alt="" class="img-fluid" />
              </div>
              <label for="">Photograph</label>
              <input
                type="file"
                class="form-control"
                @change="form.photograph = $event.target.files[0]"
                accept="image/*"
              />
              <Error name="photograph" />
            </div>
          </div>

          <FormButton
            class="btn theme-btn btn-inline w-100 text-center"
            type="sumbit"
            :disabled="form.processing"
          >
            <ButtonLoader text="Upload Documents" :loading="form.processing" />
          </FormButton>
        </form>
      </div>
    <section class="panel-space"></section>
  </section>
  <Sidebar />
</template>

<script setup>
import Sidebar from "@/views/components/layout/sidebar.vue";
import breadcrumb from "@/views/components/layout/breadcrumb.vue";
import FormGroup from "@/views/components/form/FormGroup.vue";
import FormSelect from "@/views/components/form/FormSelect.vue";
import { useForm } from "@inertiajs/vue3";
import FormButton from "@/views/components/form/FormButton.vue";
import ButtonLoader from "@/views/components/form/ButtonLoader.vue";
import { ref, watch } from "vue";
import axios from "axios";
import route from "ziggy-js";
import FormInput from "@/views/components/form/FormInput.vue";
import Error from "@/views/components/alerts/error.vue";

const form = useForm({
  back: "",
  front: "",
  datapage: "",
  photograph: "",
  type: "",
});

let types = ref({
  "": "Select Document type",
  passport: "Passport",
  identity: "ID card",
  licence: "Licence",
});

let back = ref(null);
let front = ref(null);
let datapage = ref(null);
let photograph = ref(null);

watch(
  () => form.back,
  (newBack) => {
    if (newBack != "") back.value = loadUrl(newBack);
  }
);

watch(
  () => form.front,
  (newFront) => {
    if (newFront != "") front.value = loadUrl(newFront);
  }
);

watch(
  () => form.datapage,
  (newDatapage) => {
    if (newDatapage != "") datapage.value = loadUrl(newDatapage);
  }
);

watch(
  () => form.photograph,
  (newPhotograph) => {
    if (newPhotograph != "") photograph.value = loadUrl(newPhotograph);
  }
);

const loadUrl = (file) => {
  return URL.createObjectURL(file);
};

watch(
  () => form.type,
  (newType) => {
    if (newType != "identity" || newType == "licence") {
      form.reset(["back", "front"]);
    } else if (newType == "passport") {
      form.reset("passport");
    }
  }
);

const submit = () => {
  form.post(route("user.onboard.upload"));
};
</script>

<style scoped>
.placeholder {
  height: 100px;
  width: 100px;
  margin: auto;
  border-radius: 15px;
  overflow: hidden;
}

.placeholder img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
