<template>
<section>
    <div class="py-4">
        <div class="relative h-screen w-full">
            <div class="flex static mb-4 flex-wrap w-full z-20 absolute top-3">
                <div class="w-1/2">
                    <div class="text-3xl font-caveat md:text-3xl font-bold text-[#808A80]">
                        <span>{{ displayText }}</span>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="text-3xl font-caveat md:text-3xl font-bold text-[#808A80]">
                        <span>{{ displayText }}</span>
                    </div>
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
