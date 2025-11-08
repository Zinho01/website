import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            
            colors: {
        black: "#000000",
        grayText: "#6B7280",
        grayBorder: "#E4E4E7",
        grayLight: "#E5E7EB",
        darkBg: "#171717",
        accent: "#F4E1D1",
        accentLight: "#F4F4F5",
            },

        },
    },

    plugins: [forms],
};
