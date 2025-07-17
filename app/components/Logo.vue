<script setup lang="ts">
defineOptions({
  name: "Logo",
});
</script>

<template>
  <div class="flex items-center gap-2">
    <NuxtImg src="/w.svg" alt="Logo" class="w-8 h-8" />
    <h1 class="text-2xl font-medium">{{ $t("resume") }}</h1>
  </div>
</template>
