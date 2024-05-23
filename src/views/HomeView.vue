<template>
  <div class="max-w-6xl border border-black flex justify-center mx-auto">
    <h1 class="text-4xl font-linear-medium text-center leading-[60px] max-w-md">
      Organize Your
      <img
        src="/assets/images/twitter_x.svg"
        alt="X(Twitter)"
        class="w-10 h-10 inline border"
      />
      <span class="line-through text-mirage-200">Twitter</span>
      Bookmarks with XCat
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>
