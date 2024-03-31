<template>
  <div>
    <NavBar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
useSanity()
useSeoMeta({
  twitterTitle: 'VueSchool - Training Solutions',
  twitterDescription: 'Complete Vue.js training solutions for companies',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>