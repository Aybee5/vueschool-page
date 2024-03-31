<template>
  <section class="mb-28">
    <div class="flex flex-col">
      <div class="flex items-center justify-between lg:mb-16 container gap-1">
        <h2 class="text-white text-center mb-14 lg:mb-0 md:text-left">Available Workshops</h2>
        <BaseButton class="hidden lg:flex w-60  items-center text-center justify-center whitespace-nowrap">See all the
          workshops
        </BaseButton>

      </div>
      <div class="flex items-center overflow-auto  mb-10 gap-2 md:gap-7 workshop-card-container">
        <div class="min-w-[335px] md:min-w-[570px] mb-5" v-for="i in 4" :key="i">
          <div class="flex gap-3 items-center workshop-card-head">
            <img src="@/assets/images/icons/calender.svg" alt="">
            <span class="font-medium text-light-color">
              December 14th - 11:00 AM (GMT-3)
            </span>
          </div>
          <div class="workshop-card-body">
            <div class="flex gap-9 mb-5">
              <div class="flex gap-3 text-sm text-[#737B98]">
                <img src="@/assets/images/icons/play-gray.svg" alt="" class="">
                <span>LIVE Training</span>
              </div>
              <div class="flex gap-3 text-sm text-[#737B98]">
                <img src="@/assets/images/icons/clock-gray.svg" alt="">
                <span>15 Hours</span>
              </div>
            </div>
            <h3 class="text-2xl font-medium text-light-color mb-3">Vue.js Fundamentals</h3>
            <p class="text-[#737B98] mb-5 text-sm">A progressive framework for building user interfaces. Unlike other
              monolithic frameworks, Vue is designed
              from the ground up to be incrementally...</p>
            <div class="mt-5 flex gap-3 items-center">
              <img src="@/assets/images/icons/avatar.svg" alt="">
              <span class="text-[#737B98] text-sm">Steve Popoola</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <BaseButton class="flex w-4/5 md:w-1/2 items-center text-center justify-center lg:hidden">See all the workshops
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.workshop-card-container {

  width: 100%;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 640px) {

    max-width: 640px;
    padding-right: 15px;

  }

  @media (min-width: 768px) {

    max-width: 768px;
    padding-right: 40px;
    padding-left: 40px;

  }

  @media (min-width: 1024px) {

    max-width: 1024px;
    padding-left: 0;
  }

  @media (min-width: 1280px) {

    max-width: 1280px;

  }

  @media (min-width: 1536px) {

    max-width: 1536px;

  }
}

.workshop-card-head {
  @apply rounded-[30px] rounded-br-none rounded-bl-none;
  padding: 24px 16px 24px 16px;
  background: linear-gradient(90deg, rgba(79, 8, 230, 0.5) 0%, rgba(255, 73, 117, 0.5) 96.56%);
}

.workshop-card-body {
  padding: 35px 16px;
  @apply bg-[#2B2F44] bg-opacity-90;
}
</style>