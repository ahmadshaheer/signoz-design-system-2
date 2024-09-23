const sharedConfig = require("@shaheerkochai/tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [...sharedConfig.content, "./src/**/*.{js,ts,jsx,tsx}"],
};
