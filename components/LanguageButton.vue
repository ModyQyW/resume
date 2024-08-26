<script setup lang="ts">
defineOptions({
  name: "LanguageButton",
});

const { locale } = useI18n();

const options = [
  {
    icon: "i-flagpack-cn",
    label: "简体中文",
    value: "zh-CN",
  },
  {
    icon: "i-flagpack-us",
    label: "English",
    value: "en-US",
  },
];
</script>

<template>
  <USelectMenu
    v-model="locale"
    :options="options"
    value-attribute="value"
    class="[&>.group]:w-36"
  >
    <UButton
      color="gray"
      variant="ghost"
      icon="i-heroicons-globe-alt"
    ></UButton>
    <template #option="{ option: language }">
      <UIcon :name="language.icon"></UIcon>
      <span class="truncate">{{ language.label }}</span>
    </template>
  </USelectMenu>
  <!-- <VDropdown :distance="8">
    <Button>
      <span class="i-heroicons-globe-alt" :title="$t('language')"></span>
    </Button>
    <template #popper>
      <div class="p-2">
        <Button
          v-close-popper
          v-for="item of dropdownItems"
          :key="item.label"
          class="p-2 w-full gap-2 text-sm"
          :class="{
            'font-bold': locale === item.value,
          }"
          @click="handleChangeLocale(item.value)"
        >
          <span :class="item.icon" style="width: 1.608em"></span>
          <span>{{ item.label }}</span>
        </Button>
      </div>
    </template>
  </VDropdown> -->
</template>
