import { defineConfig } from 'vite'

export default defineConfig({
  base: '/cbec-rwd/',

  build: {
    outDir: 'dist'
  },

  server: {
    host: '127.0.0.1',
    port: 8080
  },

  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin'
        ]
      }
    }
  }
})