<template>
<div>
    <Head :title="title" />
    <nav class="container mx-auto min-h-screen w-full">
        <div class="fixed static w-full sticky top-0 z-30">
            <nav-bar />
        </div>
        <div>
            <main>
                <slot></slot>
            </main>
        </div>
    </nav>
</div>
</template>

<script>
import {
    defineComponent
} from 'vue'
import {
    isDark,
    toggleDarkMode,
} from '@/Composables'
import NavBar from '@/Layouts/Site/NavBar.vue'
import { Head, Link } from '@inertiajs/vue3'
import { useI18n } from "vue-i18n";
import { lang } from "@/Lang";

export default defineComponent({
    props: {
        title: String,
    },

    components: {
        Head,
        NavBar,
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
