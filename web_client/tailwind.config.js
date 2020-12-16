module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited', 'group-hover'],
        display: ['responsive', 'hover', 'group-hover'],
        transform: ['hover', 'group-hover'],
        borderWidth: ['last'],
        margin: ['last'],
        backgroundColor: [
            'responsive',
            'hover',
            'focus',
            'active',
            'group-hover',
        ],
    },
    plugins: [
        require('@hursey013/tailwindcss-uswds')({
            overrides: {
                colors: 'extended',
                flex: false,
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
