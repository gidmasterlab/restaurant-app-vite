<script lang="ts">
import type { PropType } from "vue";
import type { ProductType } from "@/types/ProductType";
import { formatCurrency, formatReview } from "@/utils/FormatUtil";
import { loadDynamicSvg, loadDynamicAsset } from "@/utils/ImageUtil";

export default {
	props: {
		product: Object as PropType<ProductType>
	},
	setup() {
		return {
			formatCurrency,
			formatReview,
			loadDynamicSvg,
			loadDynamicAsset

		}
	},
}
</script>

<template>
	<div class="card">
		<div class="image-wrapper">
			<div class="badge">
				<span class="price">{{ formatCurrency(product.price) }}</span>
				<span class="discount" v-if="product.previousPrice > 0">
					<small>{{ formatCurrency(product.previousPrice) }}</small>
				</span>
			</div>
			<img class="image" :src="loadDynamicAsset(product.image)" :alt="product.name" />
		</div>
		<div class="block">
			<h3 class="title">{{ product.name }}</h3>
			<div class="details">
				<div class="category">
					<img class="icon" :src="loadDynamicSvg(product.category)" :alt="product.category" />
					<span class="text">{{ product.category }}</span>
				</div>

				<div class="review">
					<img class="icon" :src="loadDynamicSvg('star')" alt="review" />
					<span class="text">
						{{ formatReview(product.totalRating, product.totalReviews) }} ({{ product.totalReviews }})
					</span>
				</div>
			</div>
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

	.image-wrapper {
		position: relative;
		width: 100%;
		height: 140px;
		border-top-left-radius: var(--card-radius);
		border-top-right-radius: var(--card-radius);

		.badge {
			position: absolute;
			bottom: 10px;
			left: 10px;
			padding: 5px 10px;
			background-color: var(--accent-color);
			border-radius: var(--card-radius);

			display: flex;
			align-items: center;
			gap: var(--card-gap);

			.price {
				color: var(--text-light);
				font-weight: 500;
			}

			.discount {
				text-decoration: line-through;
				color: var(--text-light);
			}
		}

		.image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-top-left-radius: var(--card-radius);
			border-top-right-radius: var(--card-radius);
		}
	}

	.block {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--card-gap);

		background-color: var(--background-color);
		padding: var(--card-padding);

		border-bottom-left-radius: var(--card-radius);
		border-bottom-right-radius: var(--card-radius);


		.title {
			color: var(--text-primary);
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.description {
			color: var(--text-secondary);
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			min-height: 57px;
		}

		.details {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.category {
				display: flex;
				align-items: center;
				gap: calc(var(--card-gap) / 2);

				.icon {
					width: 24px;
					height: 24px;
				}

				.text {
					color: var(--text-secondary);
				}
			}

			.review {
				display: flex;
				align-items: center;
				gap: calc(var(--card-gap) / 2);

				.icon {
					width: 24px;
					height: 24px;
				}

				.text {
					color: var(--text-secondary);
				}
			}
		}
	}

	&:hover {
		opacity: 0.8;
	}

	@include mediaQuery($breakpoint-mobile) {
		min-height: var(--card-height-mobile);
		min-width: var(--card-width-mobile);

		.block {
			.description {
				min-height: unset;
			}
		}
	}
}
</style>
