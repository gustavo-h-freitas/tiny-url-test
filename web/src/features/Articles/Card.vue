<script setup lang="ts">
import { IArticle } from '../../utils/types'
import { RouterLink } from 'vue-router'

defineProps<{
  data: IArticle
}>()
</script>

<template>
  <a :href="data.link" class="bg-brand-lavender w-full rounded shadow">
    <img
      :src="data._embedded['wp:featuredmedia'][0].source_url"
      :alt="data.title.rendered"
      class="w-full h-44 aspect-video rounded-t object-cover"
    />

    <div class="p-3">
      <p class="line-clamp-1 text-brand-dark-blue font-semibold text-lg">
        {{ data.title.rendered }}
      </p>
    </div>
  </a>
</template>
