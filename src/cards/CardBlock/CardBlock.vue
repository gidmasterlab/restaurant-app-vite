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
		<img class="image" :src="loadDynamicAsset(product.image)" :alt="product.name" />
		<div class="block">
			<h3 class="title">{{ product.name }}</h3>
			<p class="description">{{ product.description }}</p>
			<div class="actions">
				<div class="cost">
					<span class="price">{{ formatCurrency(product.price) }}</span>
					<span class="discount" v-if="product.previousPrice > 0">
						<small>{{ formatCurrency(product.previousPrice) }}</small>
					</span>
				</div>
				<span class="badge">
					<small>order</small>
				</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	cursor: pointer;
	position: relative;
	min-height: var(--card-height-desktop);
	width: var(--card-width-desktop);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;

	background: var(--background-color);
	border: 1px solid var(--divider-color);
	border-radius: var(--card-radius);
	padding: var(--card-padding);

	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--card-radius);
	}

	.block {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--card-gap);

		background-color: var(--background-color);
		border-radius: var(--card-radius);
		padding: var(--card-padding);

		.title {
			color: var(--text-primary);
			color: var(--text-primary);
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.description {
			color: var(--text-secondary);
			color: var(--text-primary);
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.actions {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.cost {
				display: flex;
				align-items: center;
				gap: var(--card-gap);

				.price {
					color: var(--text-accent);
					font-weight: 500;
				}

				.discount {
					text-decoration: line-through;
					color: var(--text-secondary);
				}
			}

			.badge {
				padding: 5px 10px;
				background-color: var(--accent-color);
				color: var(--text-light);
				border-radius: var(--card-radius);
			}
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
