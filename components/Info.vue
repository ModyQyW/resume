<script setup lang="ts">
defineOptions({
  name: "Info",
});
</script>

<template>
  <div class="flex justify-end items-center gap-2">
    <LanguageButton></LanguageButton>
    <AppearanceButton></AppearanceButton>
    <GitHubButton></GitHubButton>
    <PrintButton></PrintButton>
  </div>
</template>
