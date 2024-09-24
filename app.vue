<script setup lang="ts">
const { locale, t } = useI18n();
watch(
  locale,
  () => {
    useHead({
      title: t("base.name") + " - " + t("base.title"),
    });
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="container max-w-4xl mx-auto *:px-5 *:sm:px-10 *:md:px-15 *:lg:px-20 *:xl:px-25 *:xl:px-30"
  >
    <Header></Header>
    <Main></Main>
  </div>
</template>
