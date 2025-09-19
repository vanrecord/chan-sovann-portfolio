<template>
<section id="contact">
    <div class="py-4">
        <div class="relative h-screen w-full">
            <div class="flex static mb-4 flex-wrap w-full z-10 absolute top-3">
                <div class="pb-2 w-full text-xl uppercase font-medium text-blue-700"></div>
                    Hello Contact
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
