<template>
  <section class="mb-32 bundle-section">
    <div class="container">
      <h2 class="text-center mb-14 text-white lg:w-3/5 lg:mx-auto lg:mb-32">Discounted
        <span class="gradient-text">Corporate Training</span> Bundles
      </h2>
      <div class="flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-auto items-center justify-center md:items-stretch">
        <PricingCard v-for="i in 3" :key="i" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.gradient-text {
  background: #0CD890;
  background: linear-gradient(to bottom, #0CD890 0%, #01F0FD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bundle-section {
  background: url('@/assets/images/bundle-bg-sm.svg') no-repeat;
  background-size: 100%;
  background-blend-mode: overlay !important;
  background-position: bottom center !important;

  @media screen and (min-width: 767px) {
    background: url('@/assets/images/bundle-bg-md.svg') no-repeat;
    background-size: 100%;
  }

  @media screen and (min-width: 1200px) {
    background: url('@/assets/images/bundle-bg-lg.svg') no-repeat;
    background-size: 100%;
  }


}
</style>