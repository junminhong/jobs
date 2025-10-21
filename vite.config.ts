import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  base: '/',
})
