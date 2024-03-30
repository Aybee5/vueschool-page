<template>
  <section class="about-section container">
    <div class="">
      <div class="about-card">
        <img src="@/assets/images/logo-alone.svg" alt="VueSchool Logo" class="w-20 md:w-36 lg:w-72">
        <div>
          <h2 class="text-white mb-4 text-2xl">About Vue School corporate training</h2>
          <p class="text-light-color text-sm">School is the #1 training resource for Vue.js and has provided the most
            comprehensive
            Vue.js video library in
            the world to over 140,000 developers. Private individuals and small to enterprise companies have used our
            services to develop their skills since 2016. </p>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex mt-16 mb-44 gap-8 flex-wrap items-center justify-center">
      <img v-for="i in 6" src="@/assets/images/icons/partner.svg" alt="Google">
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.about-card {
  @apply bg-dark-color flex gap-6 flex-col items-center md:items-start md:flex-row md:gap-6 lg:gap-10 p-6 bg-opacity-90 text-center md:text-left rounded-[30px] border border-solid lg:p-10;
  border: 1px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
}
</style>