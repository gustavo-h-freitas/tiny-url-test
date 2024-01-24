<script setup lang="ts">
import Card from '../components/Card/index.vue'
import Button from '../components/Button/index.vue'
import CityAutoComplete from '../features/CityAutoComplete/index.vue'
import PasswordValidator from '../features/PasswordValidator/index.vue'
import LoadingSpin from '../components/Icons/LoadingSpin.vue'
import { postUser } from '../utils/service'
import { ref } from 'vue'
import router from '../router'

const username = ref('')
const password = ref('')
const city = ref('')
const isPasswordValid = ref(false)
const isLoading = ref(false)

const handleSubmit = async () => {
  if (!username.value || !isPasswordValid.value || !city.value) {
    return alert('Please fill all fields properly!')
  }
  isLoading.value = true

  await postUser({
    username: username.value,
    password: password.value,
    city: password.value
  })

  alert('Account created successfully!')
  isLoading.value = false

  router.push('/articles')
}
</script>

<template>
  <main class="flex-1 flex justify-center p-5 md:items-center">
    <Card class="max-w-lg w-full h-fit">
      <div>
        <div class="flex flex-col gap-1 mb-4">
          <label class="font-semibold" for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            autocomplete="off"
            placeholder="John Doe"
            class="py-1 px-2 rounded border focus:border-brand-dark-blue border-brand-teal transition-all duration-300 outline-none"
          />
        </div>

        <div class="flex flex-col gap-1 mb-4">
          <label class="font-semibold" for="pwd">Password:</label>
          <input
            type="password"
            id="pwd"
            autocomplete="off"
            v-model="password"
            placeholder="********"
            class="py-1 px-2 rounded border focus:border-brand-dark-blue border-brand-teal transition-all duration-300 outline-none"
          />
          <PasswordValidator
            :password="password"
            @is-valid="(value) => (isPasswordValid = value)"
          />
        </div>

        <CityAutoComplete @update-city="(value) => (city = value)" />

        <Button class="float-right" @click="handleSubmit">
          <LoadingSpin v-if="isLoading" class="h-6 w-8" />
          {{ !isLoading ? 'Submit' : '' }}
        </Button>
      </div>
    </Card>
  </main>
</template>
