<template>
  <main>
    <div class="svgContainer">
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
    </div>
    <BundleSection />
    <WorkshopSection />
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
.svgContainer {

  background: url('@/assets/images/current-sm.svg') no-repeat;
  background-position: bottom center;
  background-blend-mode: overlay;
  background-size: contain;


  @media screen and (min-width: 767px) {
    background: url('@/assets/images/current-md.svg') no-repeat;
    background-position: bottom center;
    background-size: contain;
  }

  @media screen and (min-width: 1200px) {
    background: url('@/assets/images/current-lg.svg') no-repeat;
    background-size: contain;
    background-position: bottom center;
  }

}
</style>