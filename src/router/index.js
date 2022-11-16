import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import("../views/transaction/Index.vue")
    },

    {
        path: '/tentang',
        name: 'Tentang',
        component: () => import("../views/transaction/Tentang.vue")
    },

    {
        path: '/layanan',
        name: 'Layanan',
        component: () => import("../views/transaction/Layanan.vue")
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import("../views/transaction/Contact.vue")
    },
    {
        path: '/partner',
        name: 'Partner',
        component: () => import("../views/transaction/Partner.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;