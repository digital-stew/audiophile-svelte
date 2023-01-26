<script lang="ts">
	import type IData from '../../../../types/Idata';

	export let data: IData;
</script>

<div class="product-details">
	<div class="product-details__features">
		<h2 class="product-details__title">features</h2>
		<p class="product-details__body">{data.features}</p>
	</div>
	<div class="product-details__in-the-box">
		<h2 class="product-details__title">in the box</h2>
		<div class="product-details__body">
			{#each data.includes as x}
				<div>
					<span class="product-details__quantity">{x.quantity}&timesd;</span>
					<span>{x.item}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.product-details {
		display: grid;
		grid-template-columns: 60% 40%;
		max-width: 1400px;
		margin-inline: auto;
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
		color: #000000;
		gap: 2rem;
		margin-bottom: 10rem;
	}
	.product-details__title {
		font-weight: 700;
		font-size: 32px;
		line-height: 36px;
		letter-spacing: 1.14286px;
		text-transform: uppercase;
		color: #000000;
		margin-bottom: 2rem;
	}
	.product-details__body {
		opacity: 0.5;
		padding-right: 4rem;
	}
	.product-details__quantity {
		color: var(--primary);
		margin-right: 2rem;
	}
	@media (max-width: 768px) {
		.product-details {
			grid-template-columns: 100%;
			grid-template-rows: 1fr 1fr;
			margin-inline: 1rem;
		}
		.product-details__in-the-box {
			display: flex;
		}
		.product-details__in-the-box .product-details__body {
			margin-left: auto;
			margin-top: 3rem;
		}
	}
</style>
