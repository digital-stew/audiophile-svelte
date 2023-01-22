<script lang="ts">
	import Button from '$lib/Button.svelte';
	import type IData from '../../types/Idata';
	export let data: IData;
	export let reverse = false;
	// export let desktopImage: string;
	// export let tabletImage: string;
	// export let mobileImage: string;
</script>

<section class:card__reverse={reverse} class="card">
	<div class="card__image ">
		<picture>
			<!--width <1000px ? -->
			<source srcset={'/' + data.categoryImage.mobile} media="(max-width: 481px)" />
			<source srcset={'/' + data.categoryImage.tablet} media="(max-width: 769px)" />
			<img src={'/' + data.categoryImage.desktop} alt="hero" />
		</picture>
	</div>
	<div class="card__data">
		<div class="card__data--new-product">
			{#if data.new}
				new product
			{/if}
		</div>
		<div class="card__data__title">
			{data.name}
		</div>
		<div class="card__data__body">
			{data.description}
		</div>
		<div class="card__button">
			<Button version={1} />
		</div>
	</div>
</section>

<style>
	.card__reverse {
		direction: rtl;
		text-align: left;
	}
	.card {
		position: relative;
		display: grid;
		/* grid-template-columns: 1fr 1fr; */
		grid-template-columns: repeat(auto-fit, 500px);
		max-width: 1110px;
		/* background-color: #d87d4a; */
		margin: 160px auto;
		justify-content: center;
		align-content: center;

		/* height: 560px; */
		/* object-fit: contain; */
	}
	.card__image,
	.card__data {
		width: 500px;
	}
	.card__image {
		position: relative;
		/* object-fit: contain; */
		/* grid-column: 1/2; */
	}
	img {
		/* grid-column: 1/2; */
		position: relative;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.card__data {
		padding: 4rem;
		justify-self: center;
		align-self: center;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.card__data--new-product {
		font-weight: 400;
		font-size: 14px;
		line-height: 19px;
		letter-spacing: 10px;
		text-transform: uppercase;

		color: #d87d4a;
	}
	.card__data__title {
		font-weight: 700;
		font-size: 40px;
		line-height: 44px;
		/* or 110% */

		letter-spacing: 1.42857px;
		text-transform: uppercase;

		color: #000000;
	}
	.card__data__body {
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
		/* or 167% */

		color: #000000;

		mix-blend-mode: normal;
		opacity: 0.5;
	}
</style>
