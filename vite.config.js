import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  proxy: "https://api.api-ninjas.com",
  base: "/currency-converter/",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
