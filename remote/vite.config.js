import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    // federation({
    //   name: "widget",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     './Main': './src/components/Main'
    //   },
    //   shared: ['react','react-dom', 'react-redux']
    // })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    lib: {
      formats: ["es"],
      entry: resolve(__dirname, 'src/components/Main.jsx'),
      name: 'Main',
      fileName: 'widgeterino'
    },
    rollupOptions: {
    external: ['react','react-dom', 'react-redux'],
    output: {
      inlineDynamicImports: false,
      globals: {
        react: 'react',
        'react-dom': 'react-dom',
        'react-redux': 'react-redux' 
      }
    }  
    }
  },
  preview: {
    port: 5001,
    strictPort: 5001
  }
})
