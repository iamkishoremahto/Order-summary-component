/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'Paleblue': 'hsl(225, 100%, 94%)',
      'Brightblue': '#382ae1',
      'Verypaleblue': 'hsl(225, 100%, 98%)',
      'Desaturatedblue': 'hsl(224, 23%, 55%)',
      'Darkblue': 'hsl(223, 47%, 23%)',
      'white': '#ffffff',
      'fadedBlue': '#766cf1'

      
    },
    fontFamily:{
      'redHat':['Red Hat Display','sans-serif']
    },
    extend: {
      backgroundImage:{
          'orderTopBg':"url('/images/illustration-hero.svg')",
          'bgDesktop': "url('/images/pattern-background-desktop.svg')",
          'bgMobile': "url('/images/pattern-background-mobile.svg')"
      },
      boxShadow: {
        '4xl': [
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px',
          'rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
      ],
      },
    },
    plugins: [],
  }
}

