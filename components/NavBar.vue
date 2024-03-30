<template>
  <nav class="bg-primary-color bg-opacity-90 border-gray-200">
    <div class="max-w-screen-2xl flex flex-wrap lg:flex-nowrap items-center justify-between mx-auto px-6 md:px-12 py-5">
      <div class="flex gap-6 items-center">
        <button data-collapse-toggle="navbar-dropdown" type="button"
          class="inline-flex items-center w-[26px] h-6 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
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
      <div class="hidden w-full lg:block md:w-auto absolute lg:relative lg:top-0 top-14" id="navbar-dropdown">
        <ul class="flex flex-col p-4 md:p-0 mt-4 border gap-5 lg:flex-row lg:mt-0 lg:border-0 bg-primary-color">
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full nav-link">Courses
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
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Business
              Services
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Service 1</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Service 2</a>
                </li>
              </ul>

            </div>
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
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Events
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Vue
                    Launch</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nuxt
                    Starter</a>
                </li>
              </ul>

            </div>
          </li>
          <li>
            <a href="#" class="nav-link">Get Certified</a>
          </li>
        </ul>
      </div>
      <div class="items-center gap-7 hidden md:flex">
        <a href="#" class="text-white">Log in</a>
        <a href="#" class="sign-up-link">Sign up</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
.nav-link {
  @apply py-2 px-3 text-light-color hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0;
}

.sign-up-link {
  padding: 20px 40px;
  border-radius: 10px;
  border: 2px solid transparent;
  background: linear-gradient(#212435, #212435) padding-box,
    linear-gradient(to right, #0BD88F, #00C2FF) border-box;
  @apply text-brand-color;

  &:hover {
    background: linear-gradient(#2B2F44, #2B2F44);
  }
}
</style>