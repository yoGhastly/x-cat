<template>
  <main-navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  components: {
    MainNavbar: defineAsyncComponent(
      () => import("@/modules/ui/layout/navbar.vue")
    ),
  },
});
</script>

<style>
#app {
  font-family: "Braun Linear Regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
