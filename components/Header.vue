<script setup lang="ts">
defineOptions({
  name: "Header",
});
</script>

<template>
  <header
    class="sticky top-0 z-50 h-16 print:hidden border-b flex items-center justify-between gap-4"
  >
    <div class="flex-1">
      <Logo></Logo>
    </div>
    <div class="flex-1">
      <Info></Info>
    </div>
  </header>
</template>
