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
        },
    },

    plugins: [forms, typography],
};
