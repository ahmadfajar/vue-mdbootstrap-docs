import Vue from "vue";
import VueMdb, { AxiosPlugin } from "vue-mdbootstrap";
import ColorPalete from "@/components/ColorPalete";
import DemoBlock from "@/components/DemoBlock";
import DemoHtml from "@/components/DemoHtml";
import DemoValidation from "@/components/DemoValidation";
import IconLibs from "@/components/IconLibs";
import router from "./router";
import App from "./App.vue";
import "./scss/main.scss"

Vue.use(VueMdb);
Vue.use(AxiosPlugin);
Vue.component(ColorPalete.name, ColorPalete);
Vue.component(DemoBlock.name, DemoBlock);
Vue.component(DemoHtml.name, DemoHtml);
Vue.component(DemoValidation.name, DemoValidation);
Vue.component(IconLibs.name, IconLibs);

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

const app = new Vue({
    ...App,
    router
});

app.$mount('#app');
