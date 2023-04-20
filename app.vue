<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    this.$accessor.setEmail("mounted");
  },
  computed: {
    email() {
      return this.$accessor.email;
    },
  },
});
</script>

<template>
  <main>{{ $accessor.email }}</main>
</template>
