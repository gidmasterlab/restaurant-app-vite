import type { App } from 'vue'
import type { ProductType } from './types/ProductType'
import { shuffedData, shuffedSingleData } from './utils/GenericUtil'
import PRODUCTS_MOCK from './mocks/ProductMock'

import CardBlock from './cards/CardBlock/CardBlock.vue'
import CardDetail from './cards/CardDetail/CardDetail.vue'
import CardFlat from './cards/CardFlat/CardFlat.vue'
import CardStandard from './cards/CardStandard/CardStandard.vue'
import GridCards from './cards/GridCards.vue'

export default {
	install: (app: App) => {
		app.component('card-block', CardBlock)
		app.component('card-detail', CardDetail)
		app.component('card-flat', CardFlat)
		app.component('card-standard', CardStandard)
		app.component('grid-cards', GridCards)
	}
}

export {
	PRODUCTS_MOCK,
	type ProductType,
	GridCards,
	CardBlock,
	CardDetail,
	CardFlat,
	CardStandard,
	shuffedData,
	shuffedSingleData
}
