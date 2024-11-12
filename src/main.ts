// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'; // Importer la configuration du router

createApp(App)
  .use(router) // Utiliser Vue Router
  .mount('#app');