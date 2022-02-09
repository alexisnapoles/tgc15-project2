import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: "/booksList",
            alias: "/booksList",
            name: "booksList",
            component: () => import("./components/BooksList.vue")
        }
    ]
});

export default router;

