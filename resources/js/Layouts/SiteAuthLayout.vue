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
        <div>
        <!-- Scroll to Home Button -->
        <button
          v-show="showButton"
          @click="scrollToHome"
          class="fixed bottom-6 right-6 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
        >
          <i class="fas fa-home"></i>
        </button>
  </div>
    </nav>
</div>
</template>

<script>
import {
    defineComponent,ref
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
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    data() {
        return {
            showingNavigationDropdown: false,
            showButton : ref(false),
            isDark: {
                isDark
            }.isDark
        }
    },
    methods: {
        scrollToHome(){
            const home = document.getElementById("homepage");
            if (home) {
                home.scrollIntoView({ behavior: "smooth" });
            }
        },
        handleScroll(){
            this.showButton = window.scrollY > 200;
        }
    }
})
</script>
