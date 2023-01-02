<template>
  <a v-if="isExternal" :href="to" target="_blank">
    <slot />
  </a>
  <router-link v-else v-bind="$props">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps<{ to: string }>();
const isExternal = computed(
  () => typeof props.to === "string" && props.to.startsWith("http")
);
</script>
