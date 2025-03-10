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
                // Adding theme colors from components
                'primary': '#A6192E', // Deep Red
                'secondary': '#FFD700', // Gold
                'accent': '#FAF3E0', // Off-white
                'bg-light': '#ECECEC', // Soft Grey background
                'primary-dark': '#8B1425', // Darker shade of primary
                'secondary-light': '#FFF0A3', // Lighter shade of gold
            },
        },
    },
    plugins: [],
}
