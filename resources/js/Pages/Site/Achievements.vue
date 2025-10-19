<template>
<section id="achievements">
    <div class="py-4">
        <div class="container mx-auto flex flex-col items-center">
            <!-- Heading -->
            <div class="pb-4 w-full text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center">
                Achievements
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-3 mt-1 block" viewBox="0 0 1213 73">
                <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z" fill="#492917"/>
                </svg>
            </div>
            <div class="mt-10 flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-8 gap-6">
                <div class="w-full font-engraving justify-center md:justify-end opacity-0 animate-fadeIn ">
                    <h3 class=" text-xl md:text-2xl xl:text-3xl xl:text-4xl">Let's get in touch</h3>
                    <h3 class="p-4">Feel free to reach out if you want to discuss projects, collaborations, or just say hello. I’m always open to new opportunities and conversations!</h3>
                    <div class="w-full p-4 ml-4 border-2 bg-white rounded-2xl">
                        <div class="w-full flex">
                            <div class="w-36 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                <div class="text-center">
                                    Front End
                                </div>
                            </div>
                            <div>
                                <div>The Front End covers everything the user interacts with directly, including responsive web design, modern UI frameworks, and dynamic experiences powered by HTML, CSS, JavaScript, and libraries like Tailwind, Vue, Bootstrap, Alpine.js, jQuery, FontAwesome.</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full p-4 ml-4 border-2 bg-white rounded-2xl mt-4 mb-4">
                        <div class="w-full flex">
                            <div class="w-36 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                <div class="text-center">
                                    Back End
                                </div>
                            </div>
                            <div>
                                <div>The Back End focuses on the server side of applications. It involves building APIs, managing databases, writing business logic, and ensuring secure and efficient communication between client and server using technologies like PHP, Laravel, JavaScript, SQL.</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full p-4 ml-4 border-2 bg-white rounded-2xl">
                        <div class="w-full flex">
                            <div class="w-36 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                <div class="text-center">
                                    Certificate
                                </div>
                            </div>
                            <div>
                                <div>Certificates demonstrate verified skills and achievements in software development, cloud technologies, and project management. They highlight a commitment to continuous learning and professional growth.</div>
                            </div>
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
