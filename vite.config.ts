import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import pJson from './package.json'

const umdName = 'wm_' + pJson.name.replace('@chd1994/wm-', '')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['src/export'] })],
	define: {
    'process.env': {}
  },
	build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/export/index.ts'),
      name: 'button',
      // the proper extensions will be added
      fileName: 'index',
			formats: ["cjs", "es", "umd"]
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'antd', 'react-dom'],
			input: 'src/export/index.ts',
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'react',
					antd: 'antd',
					'react-dom': 'react-dom'
        },
				// Provide a global name for your UMD build
				name: umdName
      },
    },
		emptyOutDir: true,
  },
})
