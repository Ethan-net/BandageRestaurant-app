/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brandred: '#e74040',
      brandblue: '#1fb6ff',
      lightgray: '#fafafa',
      darkblue: '#252B42',
      emeraldgreen: '#23856d',
      brandyellow: '#ffc938',
      
    },
    extend: {
      textColor: ["visited"],
      backgroundColor:['active', 'disabled', 'checked'],
      borderColor:['active', 'disabled', 'checked', 'focused'],
      backgroundImage:{
        firstshow: 'url(./src/assets/images/logos/firstshowImg/card-cover-5.png)'
      }
    },
  },
  plugins: [],
}