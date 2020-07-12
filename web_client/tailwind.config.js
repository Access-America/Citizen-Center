module.exports = {
  prefix: 'tw-',
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      heading: ['Roboto Condensed', 'sans-serif'],
      sans: ['Public Sans', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    boxShadow: {
      outline: '0 0 0 4px rgba(36, 145, 255, 1)',
    },
    extend: {
      maxWidth: {'min-content': 'min-content'},
      spacing:{
        '72' : '20rem'
      },
      screens: {
        print: {raw: 'print'}
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'visited'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [require('@hursey013/tailwindcss-uswds')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    options: {
      whitelist: ['/is-visible$/'],
    }
  }
}
