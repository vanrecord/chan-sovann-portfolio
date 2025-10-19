<template>
<div >
    <Head :title="title" />
    <nav class="container mx-auto min-h-screen w-full ">
        <div class="fixed static w-full sticky top-0 z-30">
            <nav-bar />
        </div>
        <div>
            <main>
                <slot></slot>
            </main>
            <footer id="footer" class="footer p-4 bg-gray-50">
                <div class="container">
                <div class="copyright text-center ">
                    <p>© <span>Copyright</span> <strong class="px-1 sitename">Chan Sovann - Portfolio</strong> <span>All Rights Reserved</span></p>
                </div>
                <div class="flex justify-center">
                    <a href="https://x.com/sovann1534056?s=21" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-blue-700 border-2 rounded-full p-2 mr-2">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://t.me/SovannDavann02" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-blue-700 border-2 rounded-full p-2 mr-2">
                        <i class="fab fa-telegram-plane"></i>
                    </a>
                    <a href="https://github.com/vanrecord" target="_blank" class="text-gray-700 dark:text-gray-200 hover:text-blue-700 border-2 rounded-full p-2">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <div class="text-center">
                    Designed by <a href="/">Chan Sovann</a>
                </div>
                </div>

            </footer>
        </div>
        <div>
        <!-- Scroll to Home Button -->
        <button
          v-show="showButton"
          @click="scrollToHome"
          class="fixed bottom-6 right-6 p-3 bg-[#0294BA] text-white rounded-full shadow-lg hover:bg-[#33ccff] transition"
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
