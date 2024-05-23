<template>
  <nav class="bg-white p-5">
    <div
      class="max-w-7xl flex justify-between items-center mx-auto px-2 sm:px-6 lg:px-8"
    >
      <div class="flex items-center justify-center gap-4">
        <img src="/assets/images/logo.svg" alt="XCat" class="h-8 w-auto" />
        <p class="font-mrs-wintermouse text-2xl">XCat</p>
      </div>

      <div class="flex gap-8">
        <custom-link
          v-for="route in routes"
          :key="route.to"
          :to="route.to"
          :text="route.text"
        />
      </div>

      <div>
        <button
          :class="[
            'bg-mirage-600 hover:bg-mirage-700',
            'text-white font-linear-medium py-2 px-4',
            'rounded-xl drop-shadow-sm shadow-inner transition-all',
          ]"
        >
          Sign In
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "MainNavbar",
  components: {
    CustomLink: defineAsyncComponent(() => import("../components/link.vue")),
  },
  computed: {
    routes() {
      return [
        { to: "categories", text: "Categories" },
        { to: "donate", text: "Donate" },
        { to: "privacy-policy", text: "Privacy Policy" },
        { to: "account", text: "Account" },
      ];
    },
  },
});
</script>

<style scoped>
@font-face {
  font-family: "MrWintermouse";
  src: url("../../../../public/assets/fonts/MrsWintermouse.ttf")
    format("truetype");
}
.font-mrs-wintermouse {
  font-family: "MrWintermouse", sans-serif;
}
</style>
