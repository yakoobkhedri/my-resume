/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
      extend: {
        backgroundImage: {
          'main': "url('../../dist/img/main_bg.png')"
        },
        colors: {
          'primary': '#0ba376',
          'secondary':'#333333',
          'hover':'#696969',
          'light':'#444'
        },
        boxShadow: {
          '3xl': '0px 10px 10px -8px rgba(0, 0, 0, .3)',
          '4xl':'0 0 30px -5px rgba(0, 0, 0, .15)'
        },
        borderRadius: {
          '4xl':'35px'
        }
      }
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],

}

