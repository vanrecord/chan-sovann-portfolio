<template>
    <header class="static fixed relative bg-white dark:bg-darker shadow-md fixed top-0 left-0 w-full z-50">
        <div class="w-full px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <div @click="goToHomepage" class="flex justify-start text-left cursor-pointer">
                    <h1 class="text-xl text-2xl md:text-3xl font-marker title-me" style="">Chan Sovann</h1>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden lg:flex items-center space-x-6">
                    <nav class="flex space-x-4">
                        <button @click="goToHomepage" class="text-gray-700 dark:text-gray-200 font-medium font-bold hover:text-[#0294BA] cursor-pointer">Home</button>
                        <button @click="goToAbout" class="text-gray-700 dark:text-gray-200 font-medium font-bold hover:text-[#0294BA] pl-4 cursor-pointer">About</button>
                        <button @click="goToSkills" class="text-gray-700 dark:text-gray-200 font-medium font-bold hover:text-[#0294BA] pl-4 cursor-pointer">Skills</button>
                        <button @click="goToResume" class="text-gray-700 dark:text-gray-200 font-medium font-bold hover:text-[#0294BA] pl-4 cursor-pointer">Resume</button>
                        <button @click="goToAchievements" class="text-gray-700 dark:text-gray-200 font-medium font-bold hover:text-[#0294BA] pl-4 cursor-pointer">Achievements</button>
                        <button @click="goToContact" class="text-gray-700 dark:text-gray-200 font-medium font-bold hover:text-[#0294BA] pl-4 cursor-pointer">Contact</button>
                    </nav>
                </div>
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
                        <SelectCountry
                          v-model="value"
                          :favoriteCountries="favoriteCountries"
                        />
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
                <button @click="goToHomepage" class="text-gray-700 dark:text-gray-200 font-medium hover:text-[#0294BA] cursor-pointer">Home</button>
                <button @click="goToAbout" class="text-gray-700 dark:text-gray-200 font-medium hover:text-[#0294BA] cursor-pointer">About</button>
                <button @click="goToSkills" class="text-gray-700 dark:text-gray-200 font-medium hover:text-[#0294BA] cursor-pointer">Skills</button>
                <button @click="goToResume" class="text-gray-700 dark:text-gray-200 font-medium hover:text-[#0294BA] cursor-pointer">Resume</button>
                <button @click="goToAchievements" class="text-gray-700 dark:text-gray-200 font-medium hover:text-[#0294BA] cursor-pointer">Achievements</button>
                <button @click="goToContact" class="text-gray-700 dark:text-gray-200 font-medium hover:text-[#0294BA] cursor-pointer">Contact</button>

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
                <div class=" flex justify-center space-x-4 mt-2">
                    <SelectCountry
                        v-model="value"
                        :favoriteCountries="favoriteCountries"
                    />
                </div>
            </nav>
        </div>
    </header>
</template>


<script>
import { ref, watch, inject, onMounted } from 'vue';
import JetDropdown from '@/Components/Dropdown.vue'
import JetDropdownLink from '@/Components/DropdownLink.vue'
import JetNavLink from '@/Components/NavLink.vue'
import JetResponsiveNavLink from '@/Components/ResponsiveNavLink.vue'
import SelectCountry from "@/Components/Form/SelectCountry.vue"

export default {
    data() {
        return {
            value: ref(localStorage.getItem('lang')??'EN'),
            favoriteCountries: [
                {label: 'EN', key:'EN', value: 'US'},
                {label: 'KH', key:'KM',value: 'KH'},
            ],
            open: true,
            activeScreen:0,
            screens:[
                {
                    name      : 'Home',
                    component : 'Home',
                    active    : true
                },
                {
                    name      : 'About',
                    component : 'About',
                    active    : false
                },
                {
                    name      : 'Skills',
                    component : 'Skills',
                    active    : false
                },
                {
                    name      : 'Resume',
                    component : 'Resume',
                    active    : false
                },
                {
                    name      : 'Achievements',
                    component : 'Achievements',
                    active    : false
                },
                {
                    name      : 'Contact',
                    component : 'Contact',
                    active    : false
                }
            ],
            company_title:this.$page.props?.company_title
        }
    },
    components: {
        JetDropdown,
        JetDropdownLink,
        JetNavLink,
        JetResponsiveNavLink,
        SelectCountry
    },
    mounted() {
        window.addEventListener('resize', this.handleResize); 
    },
    watch: {
        'value': function (newValue) {
            localStorage.setItem('lang', newValue);
            location.reload();
        }
    },
    methods: {
        toggleMenu(){
            this.open = !this.open;
        },
        handleResize(){
            if (window.innerWidth >= 1024) { // Adjust this breakpoint as needed
                this.open = true; // Keep menu open on large screens
            } else {
                this.open = false; // Hide menu on small screens
            }
        },
        goToHomepage() {
            const element = document.getElementById('homepage');
            const header = document.querySelector('header'); // Select the header element
            console.log(header)
            this.toScroll(element,header);
        },
        goToAbout() {
            const element = document.getElementById('about');
            const header = document.querySelector('header');
            this.toScroll(element,header);
        },
        goToSkills() {
            const element = document.getElementById('skills');
            const header = document.querySelector('header');
            this.toScroll(element,header);
        },
        goToResume() {
            const element = document.getElementById('resume');
            const header = document.querySelector('header');
            this.toScroll(element,header);
        },
        goToAchievements() {
            const element = document.getElementById('achievements');
            const header = document.querySelector('header');
            this.toScroll(element,header);
        },
        goToContact() {
            const element = document.getElementById('contact');
            const header = document.querySelector('header');
            this.toScroll(element,header);
        },
        toScroll(element,header){
            if (element && header) {
                const headerHeight = header.offsetHeight;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const scrollPosition = elementPosition - headerHeight;
                window.scrollTo({
                  top: scrollPosition,
                  behavior: 'smooth' // Smooth scrolling
                });
            }
        }
    }
}
</script>
<style>
    h1.title-me {
        background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(109, 189, 128, 1) 39%, rgba(84, 161, 176, 1) 74%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
