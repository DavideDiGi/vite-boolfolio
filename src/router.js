import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectCard from './components/ProjectCard.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: ProjectCard
        },
    ]
});

export { router };