import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Создаем роуты
const routes = [
  { path: '/', component: () => import('./views/HomeView.vue') },
  { path: '/skills', component: () => import('./views/SkillsView.vue') }
]

// Создаем роутер
const router = createRouter({
  history: createWebHistory(),
  routes
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
