/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#9ca3af",
          
          "secondary": "#213555",
                   
          "accent": "#E5D283",
                   
          "neutral": "#171622",
                   
          "base-100": "#f3f4f6",
                   
          "info": "#42a3cd",
                   
          "success": "#66e1be",
                   
          "warning": "#fde047",
                   
          "error": "#ea6f62",
        },
      },
    ],
  },

plugins: [
  require('daisyui'),
],

}