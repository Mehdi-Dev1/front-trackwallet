module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}', // Inclure les fichiers .vue
  ],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#1E1E1E',  // Ajout de la couleur personnalisée
        'color-1': '#FFE600',
        'color-2': '#51D289',
        'color-3': '#D4B400',
        
        
      },
    },
  },
  plugins: [],
};
