<script setup lang="ts">
import { computed } from 'vue'
import { validators } from './validator'
import PasswordValidatorItem from './Item.vue'

const props = defineProps<{
  password: string
}>()

const emits = defineEmits<{
  (e: 'is-valid', value: boolean): void
}>()

const validOptions = computed(() => {
  const options = [
    { validator: props.password.length >= 8, label: 'At least 8 characters long' },
    { validator: validators.lowerCase.test(props.password), label: 'Contain 1 lower case leter' },
    { validator: validators.upperCase.test(props.password), label: 'Contain 1 upper case leter' },
    { validator: validators.specialChar.test(props.password), label: 'Contain 1 special character' }
  ]

  emits(
    'is-valid',
    options.every((item) => item.validator)
  )

  return options
})
</script>

<template>
  <div v-if="password">
    <PasswordValidatorItem
      v-for="({ label, validator }, index) in validOptions"
      :key="`validator-${index}`"
      :label="label"
      :is-valid="validator"
    />
  </div>
</template>
