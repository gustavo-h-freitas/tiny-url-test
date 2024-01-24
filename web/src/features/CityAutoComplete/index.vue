<script setup lang="ts">
import Selector from './Selector.vue'

import { ref } from 'vue'
import { getCities } from '../../utils/service'
import { Feature } from '../../utils/types'

let timeout: NodeJS.Timeout | null = null
const data = ref<Feature[] | string>([])
const isLoading = ref(false)
const input = ref('')
const showOptions = ref(false)

const emits = defineEmits<{
  (e: 'update-city', value: string): void
}>()

const handleUpdate = async () => {
  if (timeout) {
    clearTimeout(timeout)
  }

  timeout = setTimeout(async () => {
    isLoading.value = true
    showOptions.value = true
    data.value = await getCities(input.value)
    isLoading.value = false
  }, 500)
}

const updateText = (value: string) => {
  input.value = value
  showOptions.value = false
  emits('update-city', input.value)
}
</script>

<template>
  <div class="flex flex-col gap-1 mb-4 relative" v-click-outside="() => (showOptions = false)">
    <label class="font-semibold" for="city">City:</label>
    <input
      type="text"
      v-model="input"
      placeholder="São Paulo, Brazil"
      id="city"
      @input="handleUpdate"
      autocomplete="off"
      class="py-1 px-2 rounded border focus:border-brand-dark-blue border-brand-teal transition-all duration-300 outline-none"
    />

    <Selector
      :show-options="showOptions"
      :data="data"
      :is-loading="isLoading"
      @selected-city="updateText"
    />
  </div>
</template>
