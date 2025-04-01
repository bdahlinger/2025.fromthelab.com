import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xxxs: "0.5rem",
                xxs: "0.675rem",
            },
            aspectRatio: {
                'pheroMobile': '1 / 2',
                'phero': '24 / 11',
            },
            screens: {
                "3xl": "1600px",
                "4xl": "1920px",
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            boxShadow: {
                'blue': '0 0 6px 0 rgba(0, 0, 255, 1), 0 0 4px 0 rgba(0, 0, 255, 1), 0 0 2px 0 rgba(0, 0, 255, 1)',
                'fuchsia': '0 0 6px 0 rgba(219, 39, 119, 0.8), 0 0 4px 0 rgba(219, 39, 119, 0.8)',
            },
            dropShadow: {
                'white': '0 0 6px rgba(255, 255, 255, 1)',
                'white-md': '0 0 8px rgba(255, 255, 255, 1)',
                'blue': '0 0 6px rgba(0, 0, 255, 1)',
                'red': '0 0 6px rgba(255, 0, 0, 1)',
                'green': '0 0 6px rgba(0, 255, 0, 1)',

            }
        },
    },

    plugins: [forms, typography],
};
