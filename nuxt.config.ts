// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { presetUno, presetTypography, presetWebFonts } from "unocss";

export default defineNuxtConfig({
  // generate: {
  //   routes: async () => {
  //     // /year/month/day/slug
  //     const posts = await useAsyncData('posts', () => queryContent('posts').where({
  //     }).find())

  //     return posts.map((post) => {
  //       const { year, month, day, slug } = post;
  //       return `/${year}/${month}/${day}/${slug}`;
  //     })
  //   }
  // },
  modules: ["@nuxt/content", "@unocss/nuxt"],
  unocss: {
    presets: [
      presetUno(),
      presetTypography(),
      presetWebFonts({
        provider: 'google',
        fonts: {
          sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
          serif: ["Georgia", "serif"],
          mono: ['Consolas', 'monospace'],
        },
      }),
    ],
  },
  content: {
    highlight: {
      theme: 'github-dark-dimmed'
    },

  },
  nitro: {
    prerender: {
      routes: ["/rss.xml"],
    },
  },
});
