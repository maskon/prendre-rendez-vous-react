import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/prendre-rendez-vous-react/", // add the base as repo name as "/yourRepoName/"
  plugins: [react()],
})
