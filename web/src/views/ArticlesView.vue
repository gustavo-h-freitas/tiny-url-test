<script setup lang="ts">
import { ref } from 'vue'
import { getArticles } from '../utils/service'
import { IArticle } from '../utils/types'
import ArticleCard from '../features/Articles/Card.vue'
import LoadingSpin from '../components/Icons/LoadingSpin.vue'

const articles = ref<IArticle[]>([])
const isLoading = ref(true)

const getArticlesPage = async () => {
  const data = await getArticles()
  articles.value = data

  isLoading.value = false
}

getArticlesPage()
</script>

<template>
  <div class="flex-1 justify-center md:pt-16 flex p-5">
    <div
      v-if="articles.length && !isLoading"
      class="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-5 h-fit"
    >
      <ArticleCard v-for="item in articles" :key="item.id" :data="item" />
    </div>

    <div v-if="isLoading">
      <LoadingSpin class="text-brand-lavender h-24 w-24" />
    </div>

    <div v-if="!isLoading && !articles.length">
      <h3 class="text-xl text-center font-bold text-brand-lavender">
        Seems like we don't have any articles yet.
      </h3>
    </div>
  </div>
</template>
