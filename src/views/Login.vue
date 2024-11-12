<template>
    <div class="h-screen flex justify-center items-center bg-[#1E1E1E]">
      <div class="bg-[#1E1E1E] text-[#FFE600] p-10 rounded-xl shadow-2xl w-96">
        <!-- Titre -->
        <h2 class="text-4xl font-extrabold text-center mb-8">Connexion</h2>
        

        <form @submit.prevent="handleLogin">
          <div class="mb-6">
            <label for="username" class="block text-lg font-medium">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Entrez votre nom d'utilisateur"
              class="w-full mt-2 p-3 text-red rounded-md border-2 border-color-1 bg-bgcolor focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          
          <div class="mb-6">
            <label for="password" class="block text-lg font-medium">Mot de passe</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Entrez votre mot de passe"
              class="w-full mt-2 p-3 text-black rounded-md border-2 border-[#FFE600] bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          

          <button type="submit" class="w-full bg-[#FFE600] text-black font-bold py-3 rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out">
            Se connecter
          </button>
        </form>
        
   
        <div class="mt-6 text-center text-sm">
          <router-link to="/forgot-password" class="text-[#FFE600] hover:text-yellow-500 transition duration-300 ease-in-out">Mot de passe oublié ?</router-link>
        </div>
        <div class="mt-2 text-center text-sm">
          <router-link to="/register" class="text-[#FFE600] hover:text-yellow-500 transition duration-300 ease-in-out">S'inscrire</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  
  const handleLogin = () => {
    // Validation simple (à adapter selon ton backend)
    if (username.value && password.value) {
      console.log('Connexion réussie');
      // Redirection après la connexion
      router.push('/home');
    } else {
      console.log('Veuillez remplir les champs');
    }
  };
  </script>
  
  <style scoped>
  /* Quelques ajustements pour rendre la page plus agréable */
  h2 {
    color: #FFE600; /* Texte jaune pour le titre */
  }
  
  input:focus {
    border-color: #FFE600; /* Bordure jaune lors du focus */
  }
  </style>
  