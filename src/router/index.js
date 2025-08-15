import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const Projects = () => import('../pages/Projects.vue')
const Resume = () => import('../pages/Resume.vue')
const Contact = () => import('../pages/Contact.vue')

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/resume', name: 'resume', component: Resume },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() { return { top: 0 } }
})
