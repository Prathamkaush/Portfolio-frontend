// tailwind.config.cjs
import { defineConfig } from '@tailwindcss/node';

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
});
