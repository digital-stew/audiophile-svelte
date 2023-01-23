<script lang="ts">
	import speakerImage from '$assetsServer/home/desktop/image-speaker-zx9.png';
	import circlesImage from '$assetsServer/home/desktop/pattern-circles.svg';
	import speakerImageZx7 from '$assetsServer/home/desktop/image-speaker-zx7.jpg';
	import earphonesYx1 from '$assetsServer/home/desktop/image-earphones-yx1.jpg';
	import Button from '$lib/Button.svelte';
</script>

<section class="products-grid">
	<div class="products-grid__product-1">
		<div class="products-grid__product-1__background-circle-wrap">
			<img src={circlesImage} alt="circle decoration" />
		</div>
		<div class="products-grid__product-1__speaker-image-wrap">
			<img src={speakerImage} alt="speaker" width={410} height={493} />
		</div>
		<div class="products-grid__product-1__data">
			<h2 class="products-grid__product-1__data__title">ZX9 SPEAKER</h2>
			<p class="products-grid__product-1__data__body">
				Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
			</p>
			<Button />
		</div>
	</div>

	<div class="products-grid__product-2">
		<img src={speakerImageZx7} alt="speaker" />
		<div class="products-grid__product-2__data">
			ZX7 SPEAKER
			<Button />
		</div>
	</div>

	<div class="products-grid__product-3__image">
		<img src={earphonesYx1} alt="earphones" />
	</div>

	<div class="products-grid__product-3__data">
		<div class="products-grid__product-3__data__body">
			<h2>YX1 EARPHONES</h2>
			<Button />
		</div>
	</div>

	<div />
</section>

<style>
	.products-grid {
		margin-top: 20rem;
		display: grid;
		gap: 48px;
		position: relative;
		margin-inline: auto;
		grid-template-columns: 1fr 1fr;
		width: 1110px;
		grid-template-rows: 560px 320px 320px;
	}
	.products-grid img {
		width: 100%;
		object-fit: contain;
		height: 100%;
		position: relative;
	}

	/* products grid */
	.products-grid__product-1 {
		grid-column: 1/3;
		grid-row: 1/2;
		display: grid;
		grid-template-columns: 1fr 1fr;
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
		grid-column: 1;
		grid-row: 1;
		height: 493px;
		width: 410px;
		justify-self: center;
		align-self: flex-end;
		position: relative;
	}
	.products-grid__product-1__data {
		width: 349px;
		height: 303px;
		justify-self: center;
		align-self: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.products-grid__product-1__data__title {
		font-style: normal;
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
	}

	.products-grid__product-2 {
		grid-column: 1/3;
		grid-row: 2/3;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.products-grid__product-2 img {
		grid-column: 1/3;
		grid-row: 1/2;
		z-index: -1;
	}
	.products-grid__product-2__data {
		grid-column: 1/2;
		grid-row: 1/2;
		width: 204px;
		height: 118px;
		justify-self: center;
		align-self: center;
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
</style>
