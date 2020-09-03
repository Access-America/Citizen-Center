export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Citizen Center',

        script: [
            {
                src:
                    'https://cdnjs.cloudflare.com/ajax/libs/uswds/2.7.0/js/uswds.min.js'
            }
        ],

        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Initial demo of what a Citizen Center could look like.'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#005ea2' },
    /*
     ** Global CSS
     */
    css: [{ src: 'uswds/dist/scss/uswds.scss', lang: 'scss' }],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv'
    ],
    pwa: {
        meta: {
            name: 'Citizen Center'
        },
        icon: {
            iconSrc: '~/assets/images/logo.png'
        },
        manifest: {
            name: 'Citizen Center',
            lang: 'en'
        }
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
