import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '@/views/Navbar.vue'
import BooksList from '@/components/BooksList.vue'
import BooksCreate from '@/components/BooksCreate'
import BooksDelete from '@/components/BooksDelete'
import BooksUpdate from '@/components/BooksUpdate'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Navbar',
        component: Navbar
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
        path: '/update/:id',
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

