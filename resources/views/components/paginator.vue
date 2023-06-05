<template>
  <div>
    <component
      v-for="(link, key) in links"
      :key="key"
      :is="link.url ? 'InertiaLink' : 'span'"
      :href="link.url"
      v-html="link.label"
      class="btn"
      :class="{
        'btn--outline-primary btn-sm': link.active,
        'btn-outline-primary btn-sm': !link.active,
        'disabled btn-sm' : !link.url
      }"
    />
  </div>
</template>

<script setup>
  const props = defineProps({
      links: Array,
      show:Boolean,
  });
</script>

<style>
.btn.disabled:hover {
    cursor:no-drop;
}
</style>
