<!-- src/views/HomePage.vue -->
<template>
    <div class="w-full h-screen bg-bgcolor relative">
      <div class="flex justify-between items-center px-6 py-5">
        <!-- Logo et texte "Dépenses" à gauche -->
        <div class="flex items-start space-x-2">
          <img :src="logo" alt="Logo" class="w-16 h-16" />
          <div class="flex flex-col">
            <!-- "Dépenses" en haut, "Budget Mensuel" en dessous -->
            <span class="text-color-1 text-lg">Dépenses</span>
            <span class="text-white text-4xl font-bold">
              Budget <span class="text-color-2">Mensuel</span>
            </span>
          </div>
        </div>
    
        <!-- Texte Connexion à droite -->
        <div>
            <router-link to="/connexion">
                <button class="bg-color-1 hover:bg-color-3 text-black font-bold py-2 px-4 rounded">
                  Connexion
                </button>
              </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import logo from '../assets/Logo.png'; 
  </script>
  
  <style scoped>
  /* Ajoutez des styles spécifiques si nécessaire */
  </style>
  