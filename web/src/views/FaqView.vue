<script setup lang="ts">
import Accordion from '@/components/Accordion/index.vue'
import { FAQMock } from '../utils/constants'
</script>

<template>
  <main class="flex-1 p-5 md:pt-16 flex justify-center">
    <div class="max-w-3xl w-full flex flex-col items-center">
      <Accordion v-for="item in FAQMock" :label="item.label" :key="item.label">
        <div>
          {{ item.content }}
        </div>
      </Accordion>
    </div>
  </main>
</template>
