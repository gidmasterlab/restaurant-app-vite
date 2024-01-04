import type { Meta, StoryObj } from '@storybook/vue3'
import type { ProductType } from '@/types/ProductType'
import PRODUC_MOCK from '@/mocks/ProductMock'
import CardBlock from './CardBlock.vue'

const PRODUCT: ProductType = PRODUC_MOCK[4]
const IMAGES = [...new Set(PRODUC_MOCK.map((product) => product.image))]

const meta: Meta<ProductType> = {
	tags: ['autodocs'],
	title: 'Cards/Block',
	argTypes: {
		id: { table: { disable: true } },
		slug: { table: { disable: true } },
		order: { table: { disable: true } },
		category: { table: { disable: true } },
		name: { control: 'text' },
		description: { control: 'text' },
		image: { control: 'select', options: IMAGES },
		price: { control: 'number' },
		previousPrice: { control: 'number', name: 'previous price' },
		totalRating: { table: { disable: true } },
		totalReviews: { table: { disable: true } }
	},
	render: (args: ProductType) => ({
		components: { CardBlock },
		setup() {
			return { args }
		},
		template: '<CardBlock :product="args" />'
	})
}

export default meta
type Story = StoryObj<ProductType>

export const Default: Story = {
	args: {
		...PRODUCT
	}
}
