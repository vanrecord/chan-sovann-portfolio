
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/@protonemedia/inertiajs-tables-laravel-query-builder/**/*.{js,vue}',
        './node_modules/litepie-datepicker/**/*.js',
        './node_modules/@flavorly/vanilla-components/dist/presets/tailwind/all.json', 

    ],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(109,189,128,1) 39%, rgba(84,161,176,1) 74%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeOut: 'fadeOut 0.5s ease-out forwards',
         moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      fontFamily: {
        engraving: ['Bentham', ...defaultTheme.fontFamily.serif],
        marker: ['Permanent Marker', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        greatvibes: ['Great Vibes', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
        caveat: ['Caveat', 'cursive'],
        yellowtail: ['Yellowtail', 'cursive'],
        righteous: ['Righteous', 'cursive'],
        alexbrush: ['Alex Brush', 'cursive'],
        sans: ['cairo', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: 'var(--light)',
        dark: 'var(--dark)',
        darker: 'var(--darker)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          light: 'var(--color-primary-light)',
          lighter: 'var(--color-primary-lighter)',
          dark: 'var(--color-primary-dark)',
          darker: 'var(--color-primary-darker)',
        },
        'litepie-primary': colors.sky, // color system for light mode
        'litepie-secondary': colors.gray, // color system for dark mode
        secondary: {
          DEFAULT: colors.fuchsia[600],
          50: colors.fuchsia[50],
          100: colors.fuchsia[100],
          light: colors.fuchsia[500],
          lighter: colors.fuchsia[400],
          dark: colors.fuchsia[700],
          darker: colors.fuchsia[800],
        },
        success: {
          DEFAULT: colors.green[600],
          50: colors.green[50],
          100: colors.green[100],
          light: colors.green[500],
          lighter: colors.green[400],
          dark: colors.green[700],
          darker: colors.green[800],
        },
        warning: {
          DEFAULT: colors.orange[600],
          50: colors.orange[50],
          100: colors.orange[100],
          light: colors.orange[500],
          lighter: colors.orange[400],
          dark: colors.orange[700],
          darker: colors.orange[800],
        },
        danger: {
          DEFAULT: colors.red[600],
          50: colors.red[50],
          100: colors.red[100],
          light: colors.red[500],
          lighter: colors.red[400],
          dark: colors.red[700],
          darker: colors.red[800],
        },
        info: {
          DEFAULT: colors.cyan[600],
          50: colors.cyan[50],
          100: colors.cyan[100],
          light: colors.cyan[500],
          lighter: colors.cyan[400],
          dark: colors.cyan[700],
          darker: colors.cyan[800],
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'disabled'],
      opacity: ['dark'],
      overflow: ['hover'],
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
