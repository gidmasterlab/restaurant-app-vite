import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(), //
		dts({ insertTypesEntry: true })
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "@/styles/mixin/media-query.scss" as *;'
			}
		}
	},
	build: {
		emptyOutDir: true,
		lib: {
			// the exposed global variable
			name: 'RestaurantCardsPlugin',

			// the entry file that is loaded whenever someone imports
			entry: resolve(__dirname, 'src/index.ts'),

			// is required when formats includes 'umd' or 'iife'
			formats: ['es', 'cjs', 'umd'],

			// the proper extensions will be added, ie:
			// name.js (es module)
			// name.umd.cjs) (common js module)
			// default fileName is the name option of package.json
			fileName: 'index'
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
				exports: 'named',
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
})
