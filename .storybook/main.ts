import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],
	staticDirs: ['./assets'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/vue3-vite',
		options: {}
	},
	docs: {
		// autodocs: true,
		autodocs: 'tag',
		defaultName: 'Documentation'
	}
}
export default config
