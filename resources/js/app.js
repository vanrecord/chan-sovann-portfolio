import './bootstrap';
import '../css/app.css';
import '../../node_modules/leaflet/dist/leaflet.js';
import '../../node_modules/leaflet/dist/leaflet.css';
import '../../node_modules/leaflet-geosearch/dist/geosearch.css';


import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { createI18n } from "vue-i18n";
import {lang} from "@/Lang"
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import 'vue-toast-notification/dist/theme-sugar.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@vueform/toggle/themes/default.css';
import 'flowbite';
import 'flatpickr/dist/flatpickr.css';
import VCalendar from 'v-calendar';
import { setupCalendar } from 'v-calendar';
import 'v-calendar/style.css';
import { Head } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import _ from 'lodash';
import { Plugin } from '@flavorly/vanilla-components'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  fallbackRoot: "en",
  messages: lang,
});


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
       const apps = createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(i18n)
            .use(Plugin)
            .use(VCalendar)
            .use(setupCalendar, {})
            .use(Toast)
            .use(VueSweetalert2)
            .component("Head",Head)
            .mixin({ methods: { route } })
            .mixin({methods:{
              // route:function (route) {
              //   console.log(route);
              //   // console.log(this.$page.props.tenant_id);
              //   console.log(this.$page.props.tenant_id+'/'+route);
              //   // return this.$page.props.tenant_id+'/'+route;
              // },
              getLang: function(){
                return localStorage.getItem('lang')?.toLowerCase()??'en';
              },
              getDescription: function(data){
                if(data){
                    const parsedData = JSON.parse(data);
                    const lang = this.getLang();
                    const content = parsedData[lang];
                    return content;
                }
              },
              getTitle: function(data){
                  if(data){
                      const parsedData = JSON.parse(data);
                      const lang = this.getLang();
                      const content = parsedData[lang];
                      return content;
                  }
              },
              cleanQuillContent(content) {
                  const regexEmptyTags = /<([a-zA-Z][a-zA-Z0-9]*)><br><\/\1>/g;
                  const data = this.getTitle(content);
                  return data?.replace(regexEmptyTags, '');
              },
              can: function (permissions) {          
                var allPermissions = this.$page.props.auth.can;
                var hasPermission = false;
                permissions.forEach(function(item){
                  if(allPermissions['all'])  hasPermission = true;
                  if(allPermissions[item]) hasPermission = true;     
                });
                return hasPermission;
              },

              menuPermission: function (permissions, restrict) {          
                var allPermissions = this.$page.props.auth.can;
                var hasPermission = false;

                permissions.forEach(function(item){

                  if(allPermissions['all'])  hasPermission = true;
                  if(allPermissions[item]) hasPermission = true;
                });
                return hasPermission;
              },
            },});

            apps.config.globalProperties.$filters = {
              capitalize: function (value) {
                  if (!value) return '' 
                  value = value.toString()
                  return value.charAt(0).toUpperCase()+ value.slice(1)
              }
        }
        apps.mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
