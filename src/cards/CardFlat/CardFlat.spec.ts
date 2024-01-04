import { describe, it, expect, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import type { ProductType } from '@/types/ProductType'
import { formatCurrency } from '@/utils/FormatUtil'
import PRODUCTS_MOCK from '@/mocks/ProductMock'
import CardFlat from './CardFlat.vue'
import { shuffedSingleData } from '@/utils/GenericUtil'

const PRODUCT: ProductType = shuffedSingleData(PRODUCTS_MOCK)

describe('Verify card flat elements', () => {
	let wrapper: VueWrapper

	beforeEach(async () => {
		wrapper = mount(CardFlat, {
			props: {
				product: PRODUCT
			}
		})
	})

	it('should return the expected title', () => {
		expect(wrapper.find('.title').text()).toEqual(PRODUCT.name)
	})

	it('should return the expected description', () => {
		expect(wrapper.find('.description').text()).toEqual(PRODUCT.description)
	})

	it('should return the expected image', () => {
		expect(wrapper.find('.image').attributes()['src']).toContain(PRODUCT.image)
	})

	it('should return the expected price', () => {
		expect(wrapper.find('.badge').text()).toEqual(formatCurrency(PRODUCT.price, 0))
	})
})
