import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('@/components/HelloWorld')
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/views/login/Main')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import ('@/views/register/Main')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Main')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/Main')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/Main')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;