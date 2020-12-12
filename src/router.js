import Vue from 'vue';
import VueRouter from 'vue-router';
import navs from './navigation';

const routes = [];

function registerRoute(navs) {
    navs.forEach((nav) => {
        if (nav.children) {
            registerRoute(nav.children);
        } else if (nav.route) {
            routes.push({
                path: nav.route,
                component: nav.view,
                meta: {
                    title: nav.title
                }
            });
        }
    });
}

routes.push({
    path: '/components',
    component: require('./docs/components')
}, {
    path: '/reference',
    component: require('./docs/references') //viewResolver("reference")
}, {
    path: '/',
    redirect: '/about'
});

registerRoute(navs);

Vue.use(VueRouter);

export default new VueRouter({
    routes
});
