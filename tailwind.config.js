/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                samsung: {
                    blue: '#1428a0', // Approximate Samsung Blue
                    black: '#000000',
                    dark: '#121212',
                }
            },
            fontFamily: {
                sans: ['"SamsungOne"', 'Roboto', 'sans-serif'], // Fallback
            }
        },
    },
    plugins: [],
}
