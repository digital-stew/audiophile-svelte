<script lang="ts">
	import type { IOthers } from '$types/Idata';
	import Button from './Button.svelte';
	import { goto } from '$app/navigation';

	export let products: IOthers[];
</script>

<section class="also-like">
	<h2 class="also-like__title">you may also like</h2>
	<div class="also-like__products">
		{#each products as product}
			<div class="also-like__product">
				<picture>
					<source srcset={'/' + product.image.mobile} media="(max-width: 481px)" />
					<source srcset={'/' + product.image.tablet} media="(max-width: 769px)" />
					<img src={'/' + product.image.desktop} alt="hero" />
				</picture>
				<h3 class="also-like__product__title">{product.name}</h3>
				<Button version={1} on:click={() => goto('/product/' + product.slug)} />
			</div>
		{/each}
	</div>
</section>

<style>
	.also-like__title {
		text-align: center;
		font-weight: 700;
		font-size: 32px;
		line-height: 36px;
		letter-spacing: 1.14286px;
		text-transform: uppercase;
		color: #000000;
		margin-bottom: 4rem;
	}
	.also-like {
		margin-inline: auto;
		max-width: 1100px;
		padding-inline: 1rem;
	}
	.also-like__products {
		position: relative;
		display: flex;
		gap: 1rem;
	}
	.also-like__product {
		text-align: center;
		display: grid;
		place-items: center;
		gap: 2rem;
	}
	.also-like__product__title {
		font-weight: 700;
		font-size: 24px;
		line-height: 33px;
		text-align: center;
		letter-spacing: 1.71429px;
		text-transform: uppercase;
		color: #000000;
	}
	picture,
	img {
		width: 100%;
	}
	@media (max-width: 480px) {
		.also-like__products {
			flex-wrap: wrap;
		}
	}
</style>
