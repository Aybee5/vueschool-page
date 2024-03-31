<template>
  <footer class="container mb-32">
    <div class="flex gap-12 md:gap-16 lg:gap-32 flex-col lg:flex-row lg:justify-between">
      <div class="flex items-center justify-center gap-8 flex-col lg:w-1/2 lg:justify-start lg:items-start">
        <img src="@/assets/images/logo.svg" alt="Vue School" class="w-[268px] h-[88px]">
        <p class="text-white text-center lg:text-left">Thanks to fine people like you, Vue School can proudly sponsor
          Evan and the
          future of
          Vue.js by
          being a
          Platinum Patreon</p>
        <span class="text-[#737B98] font-medium text-[22px]">FOLLOW US IN SOCIAL MEDIA</span>
        <div class="flex gap-3 md:gap-11 lg:gap-14">
          <a href="#" target="_blank">
            <img src="@/assets/images/icons/social/facebook.svg" alt="Facebook">
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/icons/social/twitter.svg" alt="Twitter">
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/icons/social/github.svg" alt="GitHub">
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/icons/social/linkedin.svg" alt="Linkedin">
          </a>
          <a href="#" target="_blank">
            <img src="@/assets/images/icons/social/youtube.svg" alt="Youtube">
          </a>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8 grow">
        <div v-for="(footer, index) in footerLinks" :key="index"
          class="flex items-center md:items-start flex-col lg:self-center" :class="footer.class">
          <span class="text-gray-header font-medium mb-5 text-[22px] uppercase">{{ footer.title }}</span>
          <ul class="flex flex-col gap-4 items-center md:items-start">
            <li v-for="(link, index) in footer.links" :key="index">
              <a :href="link.link" class="text-white">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  {
    title: 'Products',
    links: [
      {
        text: 'Courses',
        link: '#'
      },
      {
        text: 'Workshops',
        link: '#'
      },
      {
        text: 'Vue Masterclass',
        link: '#'
      }
      ,
      {
        text: 'Mastering Nuxt',
        link: '#'
      }
    ],
    class: "lg:order-1"
  },
  {
    title: 'CORPORATE',
    links: [
      {
        text: 'Corporate Training',
        link: '#'
      },
      {
        text: 'Developer Recruitment',
        link: '#'
      },
      {
        text: 'Course Development',
        link: '#'
      }
      ,
      {
        text: 'On-site Workshops',
        link: '#'
      },
      {
        text: 'Consulting',
        link: '#'
      },
      {
        text: 'Affiliate Programs',
        link: '#'
      },
    ],
    class: "lg:order-4"

  },
  {
    title: 'CONNECT WITH US',
    links: [
      {
        text: 'About Us',
        link: '#'
      },
      {
        text: 'Careers',
        link: '#'
      },
      {
        text: 'Contact Us',
        link: '#'
      }
    ],
    class: "lg:order-5"
  },
  {
    title: 'EVENTS',
    links: [
      {
        text: 'Vue.js Nation',
        link: '#'
      },
      {
        text: 'Nuxt Nation',
        link: '#'
      },
      {
        text: 'Vue.js Forge',
        link: '#'
      }
    ],
    class: "lg:order-2"

  },
  {
    title: 'RESOURCES',
    links: [
      {
        text: 'Articles',
        link: '#'
      },
    ],
    class: "lg:order-6"
  },
  {
    title: 'PRICING',
    links: [
      {
        text: 'Plans',
        link: '#'
      },
    ],
    class: "lg:order-3"

  },

]
</script>

<style scoped></style>