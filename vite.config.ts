import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src')}
    ]
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SweetDuckling',
      fileName: (format) => `sweet-duckling.${format}.js`
    }
  }
})
