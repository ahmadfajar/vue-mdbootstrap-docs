import Vue from 'vue';
import VueRouter from 'vue-router';
import {menuNavs, navs} from './navigation';

const routes = [];

function registerRoute(menuNavs) {
    menuNavs.forEach((menu) => {
        if (menu.children) {
            registerRoute(menu.children);
        } else if (menu.route) {
            routes.push({
                path: menu.route,
                component: menu.view,
                meta: {
                    title: menu.title
                }
            });
        }
    });
}

navs.forEach(nav => routes.push(nav));
registerRoute(menuNavs);

Vue.use(VueRouter);

export default new VueRouter({
    routes
});
