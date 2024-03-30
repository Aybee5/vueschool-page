<template>
  <section class="container mb-24 lg:mb-14">
    <div class="flex flex-col lg:flex-row gap-12 md:gap-14 mt-8 items-center md:px-20 lg:px-0">
      <div class="flex flex-col gap-6 items-center lg:items-start">
        <h1>
          Complete
          <span>
            Vue.js training
          </span> solutions for companies
        </h1>
        <p class="text-light-color text-center lg:text-left">Training solutions designed for companies, agencies and
          organisations
          with
          developers using or who are
          considering using the Vue.js framework</p>
        <BaseButton>Talk to Sales</BaseButton>
      </div>
      <img src="@/assets/images/hero-img.png" alt="Vue Solutions">
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
h1 {
  @apply font-bold text-[40px] text-white text-center lg:text-left;

  & span {
    @apply text-brand-color
  }
}
</style>