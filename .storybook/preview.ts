import type { Preview } from '@storybook/vue3'
import { themes } from '@storybook/theming'
import '@/styles/index.scss'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			theme: themes.light
		}
	}
}

export default preview
