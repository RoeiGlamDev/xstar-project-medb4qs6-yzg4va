import { defineConfig } from 'tailwindcss';

/
 * Tailwind CSS configuration for luxery dark AirBNB
 * This configuration sets up a custom color palette and animations
 * tailored to the dark luxury aesthetic of the brand.
 */
export default defineConfig({
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FF007F', // Custom pink color
        },
        black: {
          DEFAULT: '#000000', // Black color for dark theme
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});