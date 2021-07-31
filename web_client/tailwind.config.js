module.exports = {
    mode: 'jit',
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
