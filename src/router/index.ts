import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

// createRouter 创建路由实例，===> new VueRouter()
// 1. history模式: createWebHistory()   http://xxx/user
// 2. hash模式: createWebHashHistory()  http://xxx/#/user

// vite 的配置 import.meta.env.BASE_URL 是路由的基准地址，默认是 ’/‘
// https://vitejs.dev/guide/build.html#public-base-path

// 如果将来你部署的域名路径是：http://xxx/my-path/user
// vite.config.ts  添加配置  base: my-path，路由这就会加上 my-path 前缀了

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    // history: createWebHashHistory(),
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: () => import("@/layout/index.vue"),
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import("@/views/home/index.vue"),
                },
                {
                    path: 'category',
                    name: 'category',
                    component: () => import("@/views/category/index.vue"),
                },
                {
                    path: 'product',
                    name: 'product',
                    component: () => import("@/views/product/index.vue"),
                },
                {
                    path: 'about-us',
                    name: 'about-us',
                    component: () => import("@/views/about-us/index.vue"),
                },
                {
                    path: 'contact-us',
                    name: 'contact-us',
                    component: () => import("@/views/contact-us/index.vue"),
                },
                {
                    path: 'cart',
                    name: 'cart',
                    component: () => import("@/views/cart/index.vue"),
                },
                {
                    path: 'checkout',
                    name: 'checkout',
                    component: () => import("@/views/checkout/index.vue"),
                },
            ]
        },
        {
            path: '/my-account',
            name: 'LayoutAccount',
            component: () => import("@/views/my-account/layout.vue"),
            redirect: '/my-account/dashboard',
            children: [
                {
                    path: '/my-account/dashboard',
                    name: 'dashboard',
                    component: () => import("@/views/my-account/dashboad/index.vue"),
                },
                {
                    path: 'orders',
                    name: 'orders',
                    component: () => import("@/views/my-account/orders/index.vue"),
                },
                {
                    path: 'download',
                    name: 'download',
                    component: () => import("@/views/my-account/download/index.vue"),
                },
                {
                    path: 'payment',
                    name: 'payment',
                    component: () => import("@/views/my-account/payment/index.vue"),
                },
                {
                    path: 'address',
                    name: 'address',
                    component: () => import("@/views/my-account/address/index.vue"),
                },
                {
                    path: 'userinfo',
                    name: 'userinfo',
                    component: () => import("@/views/my-account/userinfo/index.vue"),
                },
                {
                    path: 'wishlist',
                    name: 'wishlist',
                    component: () => import("@/views/my-account/wishlist/index.vue"),
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("@/views/login/index.vue"),
        },
    ]
})

// 跳转路由后返回顶部
router.beforeEach((to, from, next) => {
    document.documentElement.scrollTop = 0
    next()
})

export default router
