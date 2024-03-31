<template>
  <nav class="bg-primary-color bg-opacity-90 border-gray-200">
    <div class="max-w-screen-2xl flex flex-wrap lg:flex-nowrap items-center justify-between mx-auto px-6 md:px-12 py-5">
      <div class="flex gap-6 items-center">
        <button @click="showMobileMenu = !showMobileMenu" data-collapse-toggle="navbar-dropdown" type="button"
          class="inline-flex items-center w-[26px] h-6 justify-center text-sm text-white rounded-lg lg:hidden hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-dropdown" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <a href="#" class="flex items-center">
          <img src="@/assets/images/logo.svg" class="" alt="VueSchool Logo" />
        </a>
      </div>
      <div class=" w-full lg:block order-1 lg:order-none lg:w-auto" id="navbar-dropdown"
        :class="{ 'hidden': !showMobileMenu }">
        <ul
          class="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row gap-5 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-primary-color">
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="nav-link">Courses
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg></button>
          </li>
          <li>
            <a href="#" class="nav-link">Plans</a>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="nav-link">Business
              Services
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg></button>

          </li>
          <li>
            <a href="#" class="nav-link">Learning Paths</a>
          </li>
          <li>
            <a href="#" class="nav-link">Hiring</a>
          </li>
          <li>
            <a href="#" class="nav-link">Articles</a>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="nav-link">Events
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg></button>

          </li>
          <li>
            <a href="#" class="nav-link">Get Certified</a>
          </li>
          <li class="items-center flex flex-col w-full gap-7 md:hidden">
            <a href="#" class="nav-link text-center !block">Log in</a>
            <a href="#" class="sign-up-link block text-center w-full">Sign up</a>
          </li>
        </ul>
      </div>
      <div class="items-center gap-7 hidden md:flex">
        <a href="#" class="nav-link !text-light-color">Log in</a>
        <a href="#" class="sign-up-link">Sign up</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const showMobileMenu = ref(false)
</script>

<style scoped>
.nav-link {
  @apply flex items-center justify-between w-full py-2 px-3 text-dark-color lg:text-light-color hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-brand-color md:p-0;
}

.sign-up-link {
  @apply text-brand-color whitespace-nowrap;
  padding: 20px 40px;
  border-radius: 10px;
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #0BD88F, #00C2FF) border-box;

  @media screen and (min-width: 767px) {
    background: linear-gradient(#212435, #212435) padding-box,
      linear-gradient(to right, #0BD88F, #00C2FF) border-box;
  }

  &:hover {
    background: linear-gradient(#2B2F44, #2B2F44);
  }
}
</style>