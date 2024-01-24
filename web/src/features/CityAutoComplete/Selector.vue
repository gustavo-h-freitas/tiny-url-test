<script setup lang="ts">
import { Feature } from '../../utils/types'
import LoadingSpin from '../../components/Icons/LoadingSpin.vue'

const props = defineProps<{
  isLoading: boolean
  data: string | Feature[]
  showOptions: boolean
}>()

const emit = defineEmits<{
  (e: 'selected-city', value: string): void
}>()
</script>

<template>
  <div
    :class="[
      showOptions ? 'open-info' : 'closed-info',
      'absolute overflow-hidden bg-white grid transition-all duration-300 ease-in-out rounded-b shadow-sm top-full w-full'
    ]"
  >
    <div class="overflow-hidden">
      <div class="py-3">
        <LoadingSpin class="w-10 h-10" v-if="isLoading" />

        <div class="flex flex-col px-2" v-if="!isLoading && Array.isArray(data) && data.length > 0">
          <button
            v-for="{ properties } in data"
            class="border-b border-brand-teal mb-1 pb-1 font-semibold text-left"
            :key="properties.place_id"
            @click="() => emit('selected-city', properties.city || properties.name)"
          >
            {{ properties.city || properties.name }}
          </button>
        </div>

        <div class="px-2" v-if="!isLoading && Array.isArray(data) && data.length === 0">
          <p>No city was found! :(</p>
        </div>

        <div class="px-2" v-if="!isLoading && typeof data === 'string'">
          {{ data }}
        </div>
      </div>
    </div>
  </div>
</template>
