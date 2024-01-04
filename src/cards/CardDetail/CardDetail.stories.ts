import type { Meta, StoryObj } from '@storybook/vue3'
import type { ProductType } from '@/types/ProductType'
import PRODUC_MOCK from '@/mocks/ProductMock'
import CardDetail from './CardDetail.vue'

const PRODUCT: ProductType = PRODUC_MOCK[4]
const IMAGES = [...new Set(PRODUC_MOCK.map((product) => product.image))]
const CATEGORIES = [...new Set(PRODUC_MOCK.map((product) => product.category))]

const meta: Meta<ProductType> = {
	tags: ['autodocs'],
	title: 'Cards/Detail',
	argTypes: {
		id: { table: { disable: true } },
		slug: { table: { disable: true } },
		order: { table: { disable: true } },
		category: { control: 'select', options: CATEGORIES },
		name: { control: 'text' },
		description: { control: 'text' },
		image: { control: 'select', options: IMAGES },
		price: { control: 'number' },
		previousPrice: { control: 'number', name: 'previous price' },
		totalRating: { control: 'number', name: 'total rating' },
		totalReviews: { control: 'number', name: 'total reviews' }
	},
	render: (args: ProductType) => ({
		components: { CardDetail },
		setup() {
			return { args }
		},
		template: '<CardDetail :product="args" />'
	})
}

export default meta
type Story = StoryObj<ProductType>

export const Default: Story = {
	args: {
		...PRODUCT
	}
}
