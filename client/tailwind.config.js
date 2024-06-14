const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,htm,jsx}", "./node_modules/flowbite/**/*.js", flowbite.content()],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin()
  ],
}