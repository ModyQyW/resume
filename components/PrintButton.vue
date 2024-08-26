<script setup lang="ts">
defineOptions({
  name: "PrintButton",
});

const handlePrint = () => {
  if (typeof window === "undefined") return;
  window.print();
};
</script>

<template>
  <UButton
    variant="ghost"
    color="gray"
    icon="i-heroicons-printer"
    @click="handlePrint"
  >
  </UButton>
</template>
