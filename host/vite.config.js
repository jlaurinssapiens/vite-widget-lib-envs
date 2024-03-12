import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

import { defineConfig, loadEnv } from 'vite'

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
//     },
//     plugins: [react()],
//   }
// })

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.TEST_KEY': JSON.stringify(env.TEST_KEY)
    },
    plugins: [
      react(),
      // federation({
      //   name: 'studio',
      //   remotes: {
      //     widget: 'http://localhost:5001/assets/remoteEntry.js',
      //   },
      //   shared: ['react','react-dom', 'react-redux']
      // })
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    },
    // server is dev server DUUUH
    server: {
      port: 1337
    },
    preview: {
      port: 4444,
      strictPort: 4444
    }
  }
})