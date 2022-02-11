import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import BooksList from '@/components/BooksList.vue'
import BooksCreate from '@/components/BooksCreate'
import BooksDelete from '@/components/BooksDelete'
import BooksUpdate from '@/components/BooksUpdate'
import About from '@/views/About'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '*',
        redirect: '/'
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URI,
    routes
})

export default router

