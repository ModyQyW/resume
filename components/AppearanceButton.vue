<script setup lang="ts">
defineOptions({
  name: "AppearanceButton",
});

const colorMode = useColorMode();
const colorModeButtonIcon = computed(() => {
  if (colorMode.preference === "system") {
    return "i-heroicons-computer-desktop";
  }
  if (colorMode.preference === "light") {
    return "i-heroicons-sun";
  }
  return "i-heroicons-moon";
});
const handleUpdateColorMode = () => {
  if (colorMode.preference === "system") {
    colorMode.preference = "light";
    return;
  }
  if (colorMode.preference === "light") {
    colorMode.preference = "dark";
    return;
  }
  colorMode.preference = "system";
};
</script>

<template>
  <UButton
    variant="ghost"
    color="gray"
    :icon="colorModeButtonIcon"
    @click="handleUpdateColorMode"
  >
  </UButton>
</template>
