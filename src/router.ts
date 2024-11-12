// src/router.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue'; // Assurez-vous que ce fichier existe
import AboutPage from './views/AboutPage.vue'; // Assurez-vous que ce fichier existe
import LoginPage from './views/Login.vue';
import RegisterPage from "./views/Register.vue"

// Définir les routes de l'application
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },

  {
    path: '/connexion',
    name: 'Login',
    component: LoginPage,
  },

  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  // Ajouter d'autres routes si nécessaire
];

// Créer et exporter le router
const router = createRouter({
  history: createWebHistory(), // Utilise l'historique HTML5 pour la navigation
  routes, // Définition des routes
});

export default router;
