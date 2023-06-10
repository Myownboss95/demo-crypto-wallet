<template>
  
                  <!-- Auth content -->
                  <slot />

                  
                
                

</template>

<script setup>
  import { onMounted, watch } from 'vue';
  import feather from 'feather-icons';
  import { useTheme } from '@/stores/theme';
  import { error, success } from '@/js/toast';
  import "@/assets/css/sapp.css"

  // const theme = useTheme();

  // const toggleTheme = theme.toggleTheme;

  const props = defineProps(['errors']);
  watch(
    () => props.errors,
    (errors) => {
      if ('error' in errors) {
          error(errors.error);
          delete errors.error;
      }
    }
  );

  onMounted(() => {
    // theme.initTheme();
    feather.replace();
  });
</script>

<style></style>
