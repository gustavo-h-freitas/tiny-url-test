import axios from 'axios'
import type { CityRoot, IArticle, IUserPayload } from './types'

const wpApi = axios.create({
  baseURL: 'http://tiny-test.local'
})

export const getCities = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=9935ca1bc367475ca6854f811e8f6627`
    )

    return (data as CityRoot).features
  } catch {
    return 'Something went wrong'
  }
}

export const postUser = async (payload: IUserPayload) => {
  try {
    const response = await wpApi.post(
      '/wp-json/wp/v2/user-data',
      {
        acf: payload,
        status: 'publish',
        title: payload.username
      },
      {
        headers: {
          Authorization: 'Basic YWRtaW46VXB0WiA5bWs4IDd3SGQgeEVzSiBVd2F5IHZCTWI='
        }
      }
    )

    return response
  } catch {
    alert('Something went wrong please try later!')
  }
}

export const getArticles = async (query: string = '') => {
  try {
    const { data } = await wpApi.get(`/wp-json/wp/v2/posts?_embed&${query}`)

    return data as IArticle[]
  } catch {
    return []
  }
}
