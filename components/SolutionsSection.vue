<template>
  <section class="container">
    <div class="my-[120px] flex flex-col lg:flex-row">
      <div class="flex flex-col items-center lg:items-start lg:gap-8">
        <p class="text-center gradient-text font-medium">YOUR #1 SOURCE OF VUE.JS COURSES</p>
        <h2 class="text-white text-center lg:text-left">Full Stack <span class="gradient-text">
            Vue Training
          </span>
          Solutions</h2>
      </div>
      <div class="flex gap-6 grow lg:gap-16 items-center justify-center">
        <div class="flex flex-col items-center">
          <span class="text-[64px] font-medium gradient-text">{{ content.lessons }}</span>
          <span class="text-light-color text-sm flex gap-2.5 whitespace-nowrap">
            <img src="@/assets/images/icons/play.svg" />
            Video Lessons
          </span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-[64px] font-medium gradient-text">{{ content.courses }}</span>
          <span class="text-light-color text-sm flex gap-2.5">
            <img src="@/assets/images/icons/wallet.svg" />
            Courses</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-[64px] font-medium gradient-text">{{ content.hours }}</span>
          <span class="text-light-color text-sm flex gap-2.5 whitespace-nowrap">
            <img src="@/assets/images/icons/clock.svg" />
            15 hours</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  content: Object
})
</script>

<style scoped>
.gradient-text {
  background: #0CD890;
  background: linear-gradient(to bottom, #0CD890 0%, #01F0FD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>