<template>
  <div class="bundle-card">
    <div class="flex gap-4 mb-9">
      <img :src="`/pricing/${priceInfo?.icon}.svg`" :alt="priceInfo?.title">
      <span class="text-white text-[22px]">{{ priceInfo?.title }}</span>
    </div>
    <p class="mb-6 text-brand-color">Includes 1 year access to:</p>
    <ul class="flex flex-col gap-4">
      <li v-for="feature in priceInfo?.features" :key="feature._key" class="flex items-center justify-between gap-1.5"
        :class="{ 'opacity-20': feature.isDisabled, 'font-bold': feature.isExclusive }">
        <div class="flex">
          <img :src="`/icons/${feature.isDisabled ? 'cancel-green' : 'check'}.svg`" alt="" class="mr-4">
          <span class="text-light-color text-sm ">{{ feature.featureTitle }}</span>
        </div>
        <img v-if="!feature.isDisabled" src="/icons/info.svg" alt="" class="object-right">
      </li>
    </ul>

    <div v-if="priceInfo?.hasInfo" class="my-6 bg-brand-color bg-opacity-20 rounded-[10px] py-4 px-6 flex gap-4">
      <img src="@/assets/images/course-thumbnail.svg" alt="">
      <div class="flex flex-col">
        <span class="text-gray-color font-medium text-sm">Enough time to watch:</span>
        <span class="text-white font-medium text-lg">The Vue 3 Masterclass</span>
      </div>
    </div>

    <div class="calculation-card mt-6 mb-8">
      <div class="flex items-center gap-2.5 mb-6">
        <span class="font-bold text-[40px] text-white">$50</span>
        <span class="text-gray-color">/ seat / month</span>
      </div>
      <p class="text-white font-bold mb-3">How many licenses do you need?</p>
      <input :id="`default-range-${priceInfo?.title}`" type="range" v-model="range"
        class="w-full h-1 bg-brand-color accent-brand-color rounded-lg appearance-none cursor-pointer" max="20">
      <div class="flex items-center justify-between mb-4">
        <span class="font-medium text-sm text-gray-color">0</span>
        <span class="font-medium text-sm text-gray-color">20</span>
      </div>
      <div class="flex items-center gap-5">
        <div class="bg-[#0E0E10] bg-opacity-20 rounded-lg px-3.5 py-1 flex gap-2.5 items-center">
          <img src="@/assets/images/icons/people.svg" alt="">
          <span class="text-[#E8E6E6] font-bold text-[26px]">{{ range }}</span>
          <span class="text-[#979FAD]">seats</span>
        </div>
        <span class="text-brand-color font-medium whitespace-nowrap">{{ (range * (20) / 12).toFixed(0) }}%
          discount</span>
      </div>
    </div>
    <BaseButton class="w-full text-center">Start Learning</BaseButton>
    <a href="#" class="mt-6 text-brand-color font-medium flex items-center justify-center">Refer your manager</a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  priceInfo: Object
})
const range = ref(12);
</script>

<style scoped>
.bundle-card {
  @apply bg-dark-color px-6 py-10 bg-opacity-90 rounded-[30px] border border-solid lg:self-start;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
}

.calculation-card {
  @apply bg-primary-color rounded-2xl px-4 py-6;
}
</style>