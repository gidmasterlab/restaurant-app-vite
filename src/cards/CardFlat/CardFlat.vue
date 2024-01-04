<script lang="ts">
import type { PropType } from "vue";
import type { ProductType } from "@/types/ProductType";
import { formatCurrency } from "@/utils/FormatUtil";
import { loadDynamicAsset } from "@/utils/ImageUtil";

export default {
	props: {
		product: Object as PropType<ProductType>
	},
	setup() {
		return {
			formatCurrency,
			loadDynamicAsset
		}
	},
}
</script>

<template>
	<div class="card">
		<div class="header">
			<span class="badge">{{ formatCurrency(product.price, 0) }}</span>
			<img class="image" :src="loadDynamicAsset(product.image)" :alt="product.name" />
		</div>
		<div class="details">
			<h3 class="title">{{ product.name }}</h3>
			<p class="description">{{ product.description }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	cursor: pointer;
	min-height: var(--card-height-desktop);
	width: var(--card-width-desktop);
	display: flex;
	flex-direction: column;
	align-items: center;

	background: var(--background-color);
	border: 1px solid var(--divider-color);
	border-radius: var(--card-radius);


	.header {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;

		.badge {
			position: absolute;
			top: 10px;
			right: 10px;
			width: 40px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--primary-color);
			border-radius: 50%;
			color: var(--text-light);
		}

		.image {
			width: 100%;
			height: 170px;
			object-fit: cover;
			border-top-left-radius: var(--card-radius);
			border-top-right-radius: var(--card-radius);
		}
	}

	.details {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--card-gap);
		padding: var(--card-padding);

		.title {
			color: var(--text-primary);
			text-align: center;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.description {
			color: var(--text-secondary);
			text-align: center;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

	}

	&:hover {
		opacity: 0.8;
	}

	@include mediaQuery($breakpoint-mobile) {
		min-height: var(--card-height-mobile);
		min-width: var(--card-width-mobile);
	}
}
</style>
