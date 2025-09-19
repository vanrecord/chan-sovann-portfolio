<template>
  <!-- class: relative -->
  <header class=" static fixed bg-[#d6d3d1] dark:bg-darker shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo / Name -->
        <div @click="goTo('Home')" class="flex justify-start text-left cursor-pointer">
          <h1 class="text-2xl md:text-3xl font-marker title-me">{{$tm('Chan Sovann')}}</h1>
        </div>
        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-6">
          <nav class="flex space-x-4">
            <button
              v-for="item in menuItems"
              :key="item.name"
              @click="setActive(item.name); goTo(item.action)"
              :class="[
                'font-medium font-bold px-4 cursor-pointer',
                activeMenu === item.name
                  ? 'text-[#0294BA] underline'
                  : 'text-gray-700 dark:text-gray-200 hover:text-[#0294BA]'
              ]"
            >
              {{ $tm(item.name) }}
            </button>
          </nav>
        </div>
        <!-- Social + Language -->
        <div class="hidden lg:flex items-center space-x-6">
          <!-- Social Media -->
          <div class="flex space-x-3 ml-4">
            <a href="https://instagram.com" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-pink-500">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-blue-700">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://t.me/username" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-blue-400">
              <i class="fab fa-telegram-plane"></i>
            </a>
            <a href="https://github.com/vanrecord" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-gray-900">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <!-- Language Selector -->
          <div class="ml-4">
            <SelectCountry v-model="value" :favoriteCountries="favoriteCountries" />
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button @click="toggleMenu" class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="open" class="lg:hidden bg-[#d6d3d1] dark:bg-darker border-t border-gray-200 dark:border-gray-700">
      <nav class="flex flex-col space-y-1 py-2 text-center">
        <button
          v-for="item in menuItems"
          :key="item.name + '-mobile'"
          @click="setActive(item.name); goTo(item.action); toggleMenu()"
          :class="[
            'font-medium px-4 py-2 cursor-pointer',
            activeMenu === item.name
              ? 'text-[#0294BA] underline'
              : 'text-gray-700 dark:text-gray-200 hover:text-[#0294BA]'
          ]"
        >
          {{ $tm(item.name) }}
        </button>

        <!-- Social Media Mobile -->
        <div class="flex justify-center space-x-4 mt-2">
          <a href="https://instagram.com" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-pink-500">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-blue-700">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://t.me/username" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-blue-400">
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a href="https://github.com/vanrecord" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-gray-900">
            <i class="fab fa-github"></i>
          </a>
        </div>

        <!-- Language Selector Mobile -->
        <div class="flex justify-center space-x-4 mt-2">
          <SelectCountry v-model="value" :favoriteCountries="favoriteCountries" />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue'
import SelectCountry from "@/Components/Form/SelectCountry.vue"

export default {
  components: { SelectCountry },
  data() {
    return {
      value: ref(localStorage.getItem('lang') ?? 'EN'),
      favoriteCountries: [
        { label: 'EN', key: 'EN', value: 'US' },
        { label: 'KH', key: 'KM', value: 'KH' }
      ],
      value: ref(localStorage.getItem('lang')??'EN'),
      open: false,
      activeMenu: 'Home',
      menuItems: [
        { name: 'Home', action: 'Home' },
        { name: 'About', action: 'About' },
        { name: 'Skills', action: 'Skills' },
        { name: 'Resume', action: 'Resume' },
        { name: 'Achievements', action: 'Achievements' },
        { name: 'Contact', action: 'Contact' }
      ]
    }
  },
  watch: {
      'value': function (newValue) {
          localStorage.setItem('lang', newValue)
          this.changeLang(newValue)
      }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    toggleMenu() {
      this.open = !this.open
    },
    setActive(name) {
      this.activeMenu = name
    },
    handleResize() {
      this.open = window.innerWidth >= 1024
    },
    goTo(screen) {
      const map = {
        Home: 'homepage',
        About: 'about',
        Skills: 'skills',
        Resume: 'resume',
        Achievements: 'achievements',
        Contact: 'contact'
      }
      const id = map[screen]
      const el = document.getElementById(id)
      if (el) {
        el.classList.remove('animate-fadeIn')
        void el.offsetWidth
        el.classList.add('animate-fadeIn')
        const headerHeight = document.querySelector('header').offsetHeight
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style>
h1.title-me {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(109, 189, 128, 1) 39%,
    rgba(84, 161, 176, 1) 74%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
