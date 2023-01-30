<script lang="ts">
	import circlesImage from '$assetsServer/home/desktop/pattern-circles.svg';
	import speakerImageDesktop from '$assetsServer/home/desktop/image-speaker-zx9.png';
	import speakerImageTablet from '$assetsServer/home/tablet/image-speaker-zx9.png';
	import speakerImageMobile from '$assetsServer/home/mobile/image-speaker-zx9.png';
	import speakerImageZx7Desktop from '$assetsServer/home/desktop/image-speaker-zx7.jpg';
	import speakerImageZx7Tablet from '$assetsServer/home/tablet/image-speaker-zx7.jpg';
	import speakerImageZx7Mobile from '$assetsServer/home/mobile/image-speaker-zx7.jpg';
	import earphonesYx1Desktop from '$assetsServer/home/desktop/image-earphones-yx1.jpg';
	import earphonesYx1Tablet from '$assetsServer/home/tablet/image-earphones-yx1.jpg';
	import earphonesYx1Mobile from '$assetsServer/home/mobile/image-earphones-yx1.jpg';
	import Button from '$lib/Button.svelte';
	import { goto } from '$app/navigation';
</script>

<section class="products-grid">
	<div class="products-grid__product-1">
		<div class="products-grid__product-1__background-circle-wrap">
			<img src={circlesImage} alt="circle decoration" />
		</div>
		<div class="products-grid__product-1__speaker-image-wrap">
			<picture>
				<source srcset={speakerImageMobile} media="(max-width: 376px)" />
				<source srcset={speakerImageTablet} media="(max-width: 769px)" />
				<img src={speakerImageDesktop} alt="hero" />
			</picture>
		</div>
		<div class="products-grid__product-1__data">
			<h2 class="products-grid__product-1__data__title">ZX9 SPEAKER</h2>
			<p class="products-grid__product-1__data__body">
				Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
			</p>
			<Button on:click={() => goto('/product/zx9-speaker')} />
		</div>
	</div>

	<div class="products-grid__product-2">
		<picture>
			<source srcset={speakerImageZx7Mobile} media="(max-width: 376px)" />
			<source srcset={speakerImageZx7Tablet} media="(max-width: 769px)" />
			<img src={speakerImageZx7Desktop} alt="hero" />
		</picture>
		<div class="products-grid__product-2__data">
			ZX7 SPEAKER
			<Button on:click={() => goto('/product/zx7-speaker')} />
		</div>
	</div>

	<div class="products-grid__product-3__image">
		<picture>
			<source srcset={earphonesYx1Mobile} media="(max-width: 376px)" />
			<source srcset={earphonesYx1Tablet} media="(max-width: 769px)" />
			<img src={earphonesYx1Desktop} alt="hero" />
		</picture>
	</div>

	<div class="products-grid__product-3__data">
		<div class="products-grid__product-3__data__body">
			<h2>YX1 EARPHONES</h2>
			<Button on:click={() => goto('/product/yx1-earphones')} />
		</div>
	</div>

	<div />
</section>

<style>
	.products-grid {
		display: grid;
		gap: 48px;
		position: relative;
		margin-inline: auto;
		grid-template-columns: 1fr 1fr;
		max-width: 1110px;
		padding: 2rem;
	}
	.products-grid img,
	.products-grid picture {
		width: 100%;
		height: 100%;
		position: relative;
	}

	/* products grid */
	.products-grid__product-1 {
		grid-column: 1/3;
		grid-row: 1/2;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 500px));
		background-color: var(--primary);
		position: relative;
		overflow: hidden;
	}
	.products-grid__product-1__background-circle-wrap {
		grid-column: 1/3;
		left: -200px;
		position: absolute;
	}
	.products-grid__product-1__speaker-image-wrap {
		grid-column: 1/2;
		grid-row: 1;
		display: flex;
		margin: 3rem;
		position: relative;
		padding: 3rem;
		bottom: -100px;
	}
	.products-grid__product-1__data {
		width: 349px;
		height: 303px;
		justify-self: center;
		align-self: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		z-index: 1;
	}
	.products-grid__product-1__data__title {
		font-weight: 700;
		font-size: 56px;
		line-height: 58px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #ffffff;
	}
	.products-grid__product-1__data__body {
		font-style: normal;
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
		width: 349px;
		height: 75px;
		color: #ffffff;
		mix-blend-mode: normal;
		opacity: 0.75;
		/* z-index: 2; */
	}

	.products-grid__product-2 {
		grid-column: 1/3;
		grid-row: 2/3;
		display: grid;
	}
	.products-grid__product-2 {
		display: grid;
		position: relative;
	}
	.products-grid__product-2 > * {
		place-self: center;
		position: absolute;
	}
	.products-grid__product-2__data {
		left: 10%;
		width: 204px;
		height: 118px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-style: normal;
		font-weight: 700;
		font-size: 28px;
		line-height: 38px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #000000;
	}

	.products-grid__product-3__data {
		display: grid;
		background-color: #f1f1f1;
	}
	.products-grid__product-3__data__body {
		justify-self: center;
		align-self: center;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	@media (max-width: 768px) {
		.products-grid__product-1 {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 480px) {
		.products-grid {
			padding: 1rem;
		}
		.products-grid__product-2 {
			grid-template-columns: 1fr;
		}
		.products-grid__product-2 > * {
			grid-column: 1/2;
			grid-row: 1/2;
		}
		.products-grid__product-3__image {
			grid-row: 3/4;
			grid-column: 1/-1;
		}
		.products-grid__product-3__data {
			grid-column: 1/-1;
			width: 100%;
			padding: 2rem;
			grid-row: 4/5;
			margin-inline: auto;
		}
	}
</style>
