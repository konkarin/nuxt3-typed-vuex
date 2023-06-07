<script lang="ts">
import { defineComponent } from "#imports";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return { t };
  },
  mounted() {
    this.$accessor.setEmail("mounted@gmail.com");
    this.$accessor.resetEmail();
  },
  computed: {
    email() {
      return this.$accessor.email;
    },
  },
});
</script>

<template>
  <div>email: {{ $accessor.email }}</div>
  <div>i18n: {{ $t("hoge") }}</div>
  <div>useI18n: {{ t("hoge") }}</div>
</template>
