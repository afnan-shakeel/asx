import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import HomeLayout from './layout/HomeLayout.vue'
import Life from './views/Life.vue'
import Career from './views/Career.vue'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
            meta: { layout: HomeLayout }
        },
        {
            name: 'life',
            path: '/life',
            component: Life,
            meta: { layout: HomeLayout }
        },
        {
            name: 'career',
            path: '/career',
            component: Career,
            meta: { layout: HomeLayout }
        }
    ]
})