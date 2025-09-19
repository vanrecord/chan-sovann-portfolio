<template>
<section id="resume">
    <div class="py-20">
        <div class="relative h-screen w-full">
            <div class="flex static mb-4 flex-wrap w-full z-20 absolute top-3">
                <div class="w-1/2 opacity-0 animate-fadeIn">
                    <div class="py-2">
                        <p class="mt-2 font-engraving">I build modern, clean, and functional web apps.</p>
                        <p class="mt-2 font-engraving">Building with Laravel, PHP, Vue, React and modern JS.</p>
                    </div>
                    <div class="flex flex-wrap w-full">
                        <div class="w-1/3 text-center border-2 border-[#4d7c0f] bg-[#3f6212] text-white rounded-2xl m-2">
                            <p class="text-1xl sm:2xl md:3xl">Years Experience</p>
                            <p class="font-bold text-2xl">5+</p>
                        </div>
                        <div class="w-1/3 text-center border-2 border-[#4d7c0f] bg-[#3f6212] text-white rounded-2xl m-2">
                            <p class="text-1xl sm:2xl md:3xl">Projects Completed</p>
                            <p class="font-bold text-2xl">7+</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 opacity-0 animate-fadeIn">
                    <div class="text-3xl font-caveat md:text-3xl font-bold text-[#808A80]">
                        <div>
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ApKKnTwcs5_ccclapPXdBg.jpeg">
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
