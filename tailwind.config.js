/** @type {import('tailwindcss').Config} */
export default {
  // Use prefix tw- to avoid conflicts with other Dawn styles
  // prefix: 'tw-',
  content: ["./**/*.{js,json,liquid}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["garamond"],
        alpina: ["alpina"],
      },
    },
  },
  plugins: [],
};
