/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: '#0a192f',
                    800: '#112240',
                },
                gold: {
                    400: '#ffd700',
                    500: '#d4af37',
                },
                teal: {
                    400: '#64ffda',
                    500: '#008d96',
                },
                orange: {
                    500: '#fb5501',
                    600: '#E85D04',
                }
            },
            fontFamily: {
                serif: ['var(--font-poppins)'],
                sans: ['var(--font-mulish)'],
                logo: ['var(--font-poppins)'],
            },
        },
    },
    plugins: [],
};
