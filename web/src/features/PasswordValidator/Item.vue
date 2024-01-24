<script setup lang="ts">
import Close from '../../components/Icons/Close.vue'
import Tick from '../../components/Icons/Tick.vue'

defineProps<{
  isValid: boolean
  label: string
}>()
</script>

<template>
  <div class="flex items-center gap-1">
    <Close v-if="!isValid" class="h-4 w-4 text-red-600" />
    <Tick v-if="isValid" class="h-5 w-5 text-green-800" />
    {{ label }}
  </div>
</template>
