<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import TinyUrl from '@/components/Icons/TinyUrl.vue'
</script>

<template>
  <header
    class="w-full bg-brand-lavender shadow-md text-brand-dark-blue items-center justify-between p-4 flex"
  >
    <TinyUrl />

    <nav class="flex gap-4 text-lg font-semibold">
      <RouterLink class="hover:underline" to="/">Home</RouterLink>
      <RouterLink class="hover:underline" to="/faq">FAQ</RouterLink>
      <RouterLink class="hover:underline" to="/articles"> Articles </RouterLink>
    </nav>
  </header>

  <div class="bg-brand-teal flex w-full flex-1">
    <RouterView />
  </div>
</template>

<style scoped></style>
