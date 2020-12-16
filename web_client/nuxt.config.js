export default {
    target: 'static', // Enable static mode for `nuxt generate`
    /*
     ** Headers of the page
     */
    head: {
        title: 'Citizen Center',

        script: [],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#005ea2' },
    /*
     ** Global CSS
     */
    css: ['@/assets/css/global.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        'portal-vue/nuxt',
        '@nuxt/content',
    ],
    pwa: {
        meta: {
            name: 'Citizen Center',
        },
        manifest: {
            name: 'Citizen Center',
            lang: 'en',
        },
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
        extend(config, ctx) {},
    },
}
