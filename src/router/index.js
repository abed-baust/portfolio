import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const Projects = () => import('../pages/Projects.vue')
const Resume = () => import('../pages/Resume.vue')
const Contact = () => import('../pages/Contact.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/resume', name: 'resume', component: Resume },
    { path: '/contact', name: 'contact', component: Contact },
  ],
  scrollBehavior() { return { top: 0 } }
})

export default router