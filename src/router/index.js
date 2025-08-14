import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../pages/Home.vue')
const Projects = () => import('../pages/Projects.vue')
const Resume = () => import('../pages/Resume.vue')
const Contact = () => import('../pages/Contact.vue')
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/portfolio', name: 'home', component: Home },
    { path: '/portfolio/projects', name: 'projects', component: Projects },
    { path: '/portfolio/resume', name: 'resume', component: Resume },
    { path: '/portfolio/contact', name: 'contact', component: Contact },
  ],
  scrollBehavior(){ return { top: 0 } }
})