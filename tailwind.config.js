/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
      "./src/**/*.tsx",
      "./src/components/**/*.tsx",
    ]
  ,
  theme: {
    extend: {
      minWidth: {
        'quarter': '25%',
      }
    },
  },
  plugins: [],
}

