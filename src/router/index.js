// Defining the route components
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BooksList from '@/views/BooksList.vue'
import BooksCreate from '@/components/BooksCreate'
import BooksUpdate from '@/components/BooksUpdate'
import BooksDelete from '@/components/BooksDelete'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/list',
        name: 'BooksList',
        component: BooksList
    },
    {
        path: '/create',
        name: 'BooksCreate',
        component: BooksCreate
    },
    {
        path: '/update',
        name: 'BooksUpdate',
        component: BooksUpdate
    },
    {
        path: '/delete',
        name: 'BooksDelete',
        component: BooksDelete
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URI,
    routes
})

export default router


// webpack code-splitting feature:
// {
//     path: '/',
//     name: 'name',
//     component: () => 
//         import(/* webpackChunkName: 'about' */ './path')
// }