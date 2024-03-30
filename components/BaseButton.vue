<template>
  <button class="px-10 py-5 bg-brand-color text-black rounded-[10px] font-medium">
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String
})
</script>

<style scoped></style>