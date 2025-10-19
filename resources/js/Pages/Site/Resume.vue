<template>
<section id="resume">
    <div class="py-20">
        <div class="container mx-auto flex flex-col items-center">
            <!-- Heading -->
            <div class="pb-4 w-full text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center">
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-3 mt-1 block" viewBox="0 0 1213 73">
                <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z" fill="#492917"/>
                </svg>
            </div>
            <div class="mt-6 space-y-4">
                <h3 class="text-xl lg:text-2xl font-bold text-center">Work Experience</h3>
                <div class="md:grid md:grid-cols-2 md:gap-8 relative">
                    
                    <div class="text-right pr-6 md:border-r border-gray-300">
                        <p class="font-bold text-left md:text-end tracking-wide text-base lg:text-xl mb-1.5">2021 - Now</p>
                        <p class="text-left md:text-end text-sm lg:text-base">PHP + Laravel + API + Javascript + Vue js</p>
                    </div>

                    <div class="mt-3 md:mt-0">
                        <p class="font-semibold text-base lg:text-xl mb-1.5">Project</p>
                        <p class="text-sm leading-relaxed"></p>
                        <ul class="list-disc list-inside text-sm lg:text-base leading-relaxed tracking-wider">
                            <li class="leading-8">Completed many tasks of system Pethyoeung</li>
                            <li class="leading-8">Completed many tasks of system Pethyoeung BMS</li>
                            <li class="leading-8">Completed development of Pethyoeung BMS with Face Scan Machine</li>
                        </ul>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="mt-6 space-y-4">
                <h3 class="text-xl lg:text-2xl font-bold text-center">Education</h3>
                <div class="md:grid md:grid-cols-2 md:gap-8 relative">
                    <!-- Left Column -->
                    <div class="text-right pr-6 md:border-r border-gray-300">
                        <p class="font-bold text-left md:text-end tracking-wide text-base lg:text-xl mb-1.5">2017–2021</p>
                        <p class="text-left md:text-end text-sm lg:text-base">Bachelor is Degree in Computer Science</p>
                    </div>

                    <!-- Right Column -->
                    <div class="pl-6 mt-2 md:mt-0">
                        <p class="font-semibold text-base lg:text-xl mb-1.5">Royal University of Phnom Penh</p>
                        <p class="text-sm lg:text-base leading-relaxed tracking-wider leading-8">Coursework included programming, web development, databases, web design.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</section>
</template>

<script>
import {
    defineComponent
} from 'vue'
import {
    isDark,
    toggleDarkMode,
} from '@/Composables'
import { useI18n } from "vue-i18n";
import { lang } from "@/Lang";

export default defineComponent({
    props: {
        
    },

    components: {
    },
    setup(){
        const {
            tm
        } = useI18n({
            inheritLocale: true,
            messages: lang
        })
        return {
            tm
        }
    },
    data() {
        return {
            showingNavigationDropdown: false,
            isDark: {
                isDark
            }.isDark
        }
    },
})
</script>
