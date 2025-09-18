<template>
    <div>
        <Head title="Sovann Chan" />
        <div class="px-4 py-4">
            <div id="homepage"></div>
            <Home />
            <div id="about"></div>
            <About />
            <div id="skills"></div>
            <Skills />
            <div id="resume"></div>
            <Resume />
            <div id="achievements"></div>
            <Achievements />
            <div id="contact"></div>
            <Contact />
            <!-- <Social
                :socials="socials"
                :list_status="list_status"
                :socials_visible="socials_visible"
            />  -->
           
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import SiteAuthLayout from '@/Layouts/SiteAuthLayout.vue'
import Home from '@/Pages/Site/Home.vue'
import About from '@/Pages/Site/About.vue'
import Skills from '@/Pages/Site/Skills.vue'
import Resume from '@/Pages/Site/Resume.vue'
import Achievements from '@/Pages/Site/Achievements.vue'
import Contact from '@/Pages/Site/Contact.vue'
import { useI18n } from "vue-i18n";
import { lang } from "@/Lang";
import JetDropdown from '@/Components/Dropdown.vue'
import { Head, Link } from '@inertiajs/vue3'

import {
    DotsHorizontalIcon,
    ViewBoardsIcon,
    PencilAltIcon,
    TrashIcon,
    RefreshIcon
} from '@heroicons/vue/solid'

import {
    CheckCircleIcon,
    XCircleIcon,
    LinkIcon
} from '@heroicons/vue/outline'

export default defineComponent({
    layout: SiteAuthLayout,
    components: {
        Link,
        Head,
        JetDropdown,
        DotsHorizontalIcon,
        ViewBoardsIcon,
        CheckCircleIcon,
        XCircleIcon,
        PencilAltIcon,
        TrashIcon,
        RefreshIcon,
        LinkIcon,
        Home,
        About,
        Skills,
        Resume,
        Achievements,
        Contact
    },
    setup() {
        const { tm } = useI18n({
            inheritLocale: true,
            messages: lang
        })

        return { tm }
    },
    props: {
        // define props if needed
    },
    data() {
        return {
            w60: 'w-60',
        }
    },
    methods: {
        // your methods
    },
})
</script>
