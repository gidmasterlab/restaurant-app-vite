<script setup lang="ts">

import PRODUCTS_MOCK from './mocks/ProductMock';
import type { ProductType } from './types/ProductType';
import { shuffedData } from "./utils/GenericUtil";

const PRODUCTS: ProductType[] = PRODUCTS_MOCK;

</script>

<template>
	<div class="template">
		<header>
			<h1>Grid Views</h1>
		</header>

		<main>
			<section>
				<h2>Block Card</h2>
				<grid-cards>
					<card-block v-for="product of shuffedData(PRODUCTS, 8)" :key="product.id" :product="product" />
				</grid-cards>
			</section>

			<div class="divider" />

			<section>
				<h2>Detail Card</h2>
				<grid-cards>
					<card-detail v-for="product of shuffedData(PRODUCTS, 8)" :key="product.id" :product="product" />
				</grid-cards>
			</section>

			<div class="divider" />

			<section>
				<h2>Flat Card</h2>
				<grid-cards>
					<card-flat v-for="product of shuffedData(PRODUCTS, 8)" :key="product.id" :product="product" />
				</grid-cards>
			</section>

			<div class="divider" />

			<section>
				<h2>Standard Card</h2>
				<grid-cards>
					<card-standard v-for="product of shuffedData(PRODUCTS, 8)" :key="product.id" :product="product" />
				</grid-cards>
			</section>
		</main>
	</div>
</template>

<style lang="scss" scoped>
$gap: 20px;

.template {
	margin: 0 auto;
	width: 100%;
	height: 100%;

	max-width: 1153px;
	padding: var(--screen-margin);
	gap: $gap;

	display: flex;
	flex-direction: column;

	header {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	main {
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: $gap;

		section {
			display: flex;
			flex-direction: column;
			gap: $gap;
		}

		.divider {
			height: 1px;
			width: 100%;
			margin: $gap 0;
			background-color: var(--divider-color);
		}
	}
}
</style>
