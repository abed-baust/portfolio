import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../pages/Home.vue')
const Projects = () => import('../pages/Projects.vue')
const Resume = () => import('../pages/Resume.vue')
const Contact = () => import('../pages/Contact.vue')

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/resume', name: 'resume', component: Resume },
    { path: '/contact', name: 'contact', component: Contact },
  ],
  scrollBehavior(){ return { top: 0 } }
})
