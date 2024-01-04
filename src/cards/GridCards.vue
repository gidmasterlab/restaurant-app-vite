<script lang="ts">
export default {
	props: {
		quantity: {
			type: Number,
			default: 4
		}
	}
}
</script>

<template>
	<div class="grid">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.grid {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(v-bind(quantity), 1fr);
	gap: var(--card-gutter-desktop);

	&:deep(div.card) {
		width: 100%;
	}


	@include mediaQuery($breakpoint-mobile) {
		display: flex;
		justify-content: flex-start;
		flex-wrap: nowrap;
		width: 100vw;
		padding: 0 var(--screen-margin);
		margin-left: calc(var(--screen-margin) * -1);
		overflow-x: auto;
		gap: var(--card-gutter-mobile);

		&::-webkit-scrollbar {
			display: none;
		}
	}
}
</style>
