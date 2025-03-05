export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'navy': {
                    700: '#1a3a5f',
                    800: '#152e4d',
                    900: '#0f233a',
                },
                'gold': {
                    300: '#f0d78c',
                    500: '#d4af37',
                    600: '#b8941e',
                },
            },
        },
    },
    plugins: [],
}
