/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    container: {
      center: true,
    },

    screens: {
      'ms': '320px',
      // => @media (min-width: 320px) { ... }
      'msix': '420px',
      // => @media (min-width: 500px) { ... }

      'msi': '500px',
      // => @media (min-width: 500px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xli': '1400px',
      // => @media (min-width: 1400px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }


      '2xli': '1600px',
      // => @media (min-width: 1600px) { ... }

      '2xlix': '1700px',
      // => @media (min-width: 1700px) { ... }

      '2xlie': '1800px',
      // => @media (min-width: 1800px) { ... }

      '2xliex': '1920px',
      // => @media (min-width: 1800px) { ... }

      '3xl': '2000px',
      // => @media (min-width: 2100px) { ... }
    },


    extend: {
      colors: {
        'primary': '#E0E0E0',
        'secondary': '#489FB5',
        'accent1': '#5f5f5f',
        'accent2': '#363939',
        'accent3': '#d0d0d0',
        'accent4': '#c0c0c0',
        'accent5': '#838383',
        'accent6': '#3c3c3c',
        'accent7': '#0F0F0F',
        'accent8': '#202020',
        'accent9': '#818181',
        'accent12 ': '#299FF5',
        'accent13': '#2e2e2e',
        'accent14': '#555555',

      },
      backgroundImage: {
        'sidebar-arrow': "url('/assets/img/sidebar-arrow.svg')",
        'landing-img': "url('/assets/img/bruno-thethe-O-3.jpg')",
        'play-btn': "url('/assets/img/play-btn.svg')",
        'beat-type': "url('/assets/img/pexels-harrison-haines-3165428.jpg')",

      },
      boxShadow: {
        'play-btn': '0px 10px 15px #00000072',
        'music-file': '0px 3px 30px #299FF580',
      }
    },
  },
  plugins: [

    require('tailwind-scrollbar'),
  ],
}