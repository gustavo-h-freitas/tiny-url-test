<script setup lang="ts">
import Chevron from '../Icons/Chevron.vue'
import { ref } from 'vue'

defineProps<{
  label: string
}>()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="relative w-full">
    <div
      v-click-outside="() => (isOpen = false)"
      @click="toggle"
      class="flex text-brand-dark-blue font-semibold text-xl cursor-pointer items-center justify-between bg-white px-4 py-2 rounded"
    >
      {{ label }}

      <Chevron :class="['w-6 h-6 transition-all duration-300', { 'rotate-180': isOpen }]" />
    </div>
  </div>
  <div
    :class="[
      isOpen ? 'open-info' : 'closed-info',
      'overflow-hidden bg-white grid  mb-4 transition-all duration-300 ease-in-out rounded-b shadow-sm top-full w-full'
    ]"
  >
    <div class="overflow-hidden">
      <div class="px-4 pb-4 pt-3 border-t border-brand-columbia-blue">
        <slot />
      </div>
    </div>
  </div>
</template>
