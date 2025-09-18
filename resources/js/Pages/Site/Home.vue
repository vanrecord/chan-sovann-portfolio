<template>
<section>
    <div class="py-20">
        <div class="relative h-screen w-full">
            <div class="flex flex-col md:flex-row items-center justify-between w-full z-20 absolute top-3">
              <!-- Text Section -->
                <div class="w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0 text-center md:text-left">
                    <div class="h-16 font-caveat text-2xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-[#808A80]">
                        <span>{{ displayText }}</span>
                    </div>
                    <div class="py-2">
                        <p class="mt-2 font-engraving">I build modern, clean, and functional web apps.</p>
                        <p class="mt-2 font-engraving">Building with Laravel, PHP, Vue, React and modern JS.</p>
                    </div>
                    <div class="flex flex-wrap justify-center md:justify-start w-full">
                        <div class="w-1/3 sm:w-1/3 sm:w-1/3 text-center border-2 bg-[#0294BA] text-white rounded-2xl m-2 p-2">
                            <p class="font-bold text-2xl md:text-3xl">5+</p>
                            <label class="text-lg sm:text-sm md:2xl">Years Experience</label>
                        </div>
                        <div class="w-1/3 sm:w-1/3 sm:w-1/3 text-center border-2 bg-[#0294BA] text-white rounded-2xl m-2 p-2">
                            <p class="font-bold text-2xl md:text-3xl">7+</p>
                            <label class="text-lg sm:text-sm md:2xl">Projects Completed</label>
                        </div>
                    </div>
                </div>
                <!-- Image Section -->
                <div class="w-full md:w-1/2 flex justify-center md:justify-end px-4 md:px-8">
                    <img
                        class="w-4/5 sm:w-4/5 md:w-full lg:w-4/5 xl:w-4/5 2xl:w-[700px] max-w-full rounded-2xl shadow-lg"
                        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ApKKnTwcs5_ccclapPXdBg.jpeg"
                        alt="Profile"
                    >
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import {
    defineComponent,ref
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
    mounted() {
        let index = 0
        let isDeleting = false
        const type = () => {
          if (!isDeleting) {
            this.displayText = this.fullText.substring(0, index + 1)
            index++
            if (index === this.fullText.length) {
              isDeleting = true
              setTimeout(type, this.pauseTime)
              return
            }
          } else {
            this.displayText = this.fullText.substring(0, index - 1)
            index--
            if (index === 0) {
              isDeleting = false
            }
          }
          setTimeout(type, this.typingSpeed)
        }
        type()
    },
    data() {
        return {
            showingNavigationDropdown: false,
            fullText: 'Senior Web Developer',
            displayText : ref(''),
            typingSpeed : 150,
            pauseTime : 1000

        }
    },
})
</script>
