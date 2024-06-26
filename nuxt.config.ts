// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.css"],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Rubik: [400, 500, 700],
    },
  },
  modules: [
    "@nuxtjs/sanity",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/seo",
  ],
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true,
    apiVersion: process.env.NUXT_SANITY_API_VERSION || "2024-03-15",
  },
  site: {
    url: "https://vueschool-page.netlify.app",
    name: "VueSchool Page",
    description: "Complete Vue.js training solutions for companies",
    defaultLocale: "en",
  },
});
