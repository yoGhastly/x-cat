<template>
  <router-link :to="{ name: to }" class="text-mirage-950 hover:text-mirage-700">
    {{ text }}
  </router-link>
</template>

<script setup lang="ts">
import { defineProps, defineComponent } from "vue";

interface LinkProps {
  to: string;
  text: string;
}

defineProps<LinkProps>();
defineComponent({
  name: "CustomLink",
});
</script>
