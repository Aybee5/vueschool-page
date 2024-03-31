<template>
  <main>
    <div class="svgContainer">
      <HeroSection :content="heroContent" />
      <AboutSection />
      <SolutionsSection :content="solutionContent" />
    </div>
    <BundleSection :content="bundleContent" />
    <WorkshopSection />
  </main>
</template>

<script setup lang="ts">
import { type IndexSectionType } from "@/types/indexContent";
const query = groq`*[_type == "indexPage"]`
const { data: content, refresh } = await useSanityQuery<Array<IndexSectionType>>(query)

const heroContent = computed(() => {
  const heroContent = content.value?.[0].indexPageSections[0]
  return {
    title: {
      start: heroContent?.compositeHeading?.headingStart,
      span: heroContent?.compositeHeading?.emphasizedText,
      end: heroContent?.compositeHeading?.headingEnd
    },
    description: heroContent?.description,
    cta: heroContent?.cta,
  }
})

const solutionContent = computed(() => {
  const solutionContent = content.value?.[0].indexPageSections[1]
  return {
    lessons: solutionContent?.lessons,
    courses: solutionContent?.courses,
    hours: solutionContent?.hours
  }
})

const bundleContent = computed(() => {
  const pricingTypes = {
    'basic': {
      icon: 'leaf',
      hasInfo: false
    },
    'professional': {
      icon: 'rocket',
      hasInfo: true,
    },
    'premium': {
      icon: 'bolt',
      hasInfo: false
    }
  }
  const bundleContent = content.value?.[0].indexPageSections.filter(section => section._type === 'pricingCard')
    .map((section) => {
      return {
        features: section.features,
        title: section.title,
        icon: pricingTypes[section.title?.toLocaleLowerCase()].icon,
        hasInfo: pricingTypes[section.title?.toLocaleLowerCase()].hasInfo
      }
    })
  return bundleContent
})
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