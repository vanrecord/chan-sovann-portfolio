<template>
<section id="about">
    <div class="py-8">
        <div class="container mx-auto flex flex-col items-center">
            <!-- Heading -->
            <div class="pb-4 w-full text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center">
                About
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-3 mt-1 block" viewBox="0 0 1213 73">
                <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z" fill="#492917"/>
                </svg>
            </div>
            <!-- Intro Text -->
            <div class="px-6 md:px-10 text-center font-engraving max-w-3xl">
                I’m a Senior Web Developer with a passion for creating scalable, user-friendly web applications. With years of experience, I work across the full stack using Laravel, PHP, Vue, React and modern JavaScript frameworks, while also making use of Linux command-line tools to streamline workflows and enhance productivity.
                I specialize in turning ideas into polished digital solutions — from building clean and intuitive frontends to designing robust, secure, and high-performance backends.
            </div>
            <!-- Content Section -->
            <div class="mt-10 flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-8 gap-6">
                <!-- Image Section -->
                <div class="w-full md:w-1/2 flex justify-center md:justify-end opacity-0 animate-fadeIn">
                    <img
                        class="rounded-2xl shadow-lg"
                        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ApKKnTwcs5_ccclapPXdBg.jpeg"
                        alt="Profile"
                    >
                </div>
                <!-- Text Section -->
                <div class="w-full md:w-1/2 font-engraving justify-center md:justify-end opacity-0 animate-fadeIn border-2 bg-white rounded-2xl">
                    <div class="w-full p-5 flex ">
                        <div class="w-1/2">
                            <div class="text-[#808A80]">Name</div>
                            <label class="">Chan Sovann</label>
                        </div>
                        <div class="w-1/2">
                            <div class="text-[#808A80]">Phone</div>
                            <label class="">+855 67474447</label>
                        </div>
                    </div>
                    <div class="w-full p-5 flex ">
                        <div class="w-1/2">
                            <div class="text-[#808A80]">Occupation</div>
                            <label class="">Senior Web Developer</label>
                        </div>
                        <div class="w-1/2">
                            <div class="text-[#808A80]">Nationality</div>
                            <label class="">Khmer</label>
                        </div>
                    </div>
                    <div class="w-full p-5 flex ">
                        <div class="w-1/2">
                            <div class="text-[#808A80]">Email</div>
                            <label class="">vanrecord1122@gmail.com</label>
                        </div>
                        <div class="w-1/2">
                            
                        </div>
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
