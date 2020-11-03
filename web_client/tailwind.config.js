module.exports = {
    theme: {
        fontFamily: {
            sans:
                'Public Sans Web, Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif',
        },
    },
    future: {
        removeDeprecatedGapUtilities: true,
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
    plugins: [
        require('@hursey013/tailwindcss-uswds')({
            overrides: {
                colors: 'extended',
                flex: false,
                fontSize: false,
                leading: false,
                screens: false,
            },
        }),
    ],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
            // TypeScript
            'plugins/**/*.ts',
            'nuxt.config.ts',
        ],
        options: {
            whitelist: ['/is-visible$/'],
        },
    },
}
