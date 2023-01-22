<script lang="ts">
	import speakerImage from '$assetsServer/home/desktop/image-speaker-zx9.png';
	import circlesImage from '$assetsServer/home/desktop/pattern-circles.svg';
	import speakerImageZx7 from '$assetsServer/home/desktop/image-speaker-zx7.jpg';
	import earphonesYx1 from '$assetsServer/home/desktop/image-earphones-yx1.jpg';
	import Button from '$lib/Button.svelte';
</script>

<section class="products">
	<div class="product1">
		<div class="backgroundCircleWrap">
			<img src={circlesImage} alt="circle decoration" />
		</div>
		<div class="speakerImageWrap">
			<img src={speakerImage} alt="speaker" width={410} height={493} />
		</div>
		<div class="info">
			<h2>ZX9 SPEAKER</h2>
			<p>
				Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
			</p>
			<Button />
		</div>
	</div>

	<div class="product2">
		<img src={speakerImageZx7} alt="speaker" />
		<div class="info">
			ZX7 SPEAKER
			<Button />
		</div>
	</div>

	<div>
		<img src={earphonesYx1} alt="" />
	</div>

	<div class="product4">
		<div>
			<h2>YX1 EARPHONES</h2>
			<Button />
		</div>
	</div>

	<div />
</section>

<style>
	.products {
		margin-top: 20rem;
		display: grid;
		gap: 48px;
		position: relative;
		margin-inline: auto;
		grid-template-columns: 1fr 1fr;
		width: 1110px;
		grid-template-rows: 560px 320px 320px;
	}
	.products img {
		width: 100%;
		object-fit: contain;
		height: 100%;
		/* width: 410px; */
		/* height: 493px; */
		position: relative;
	}

	/* products grid */
	.product1 {
		grid-column: 1/3;
		grid-row: 1/2;
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: var(--primary);
		position: relative;
		overflow: hidden;
	}
	.product1 .backgroundCircleWrap {
		grid-column: 1/3;
		left: -200px;
		position: absolute;
	}
	.product1 .speakerImageWrap {
		grid-column: 1;
		grid-row: 1;
		height: 493px;
		width: 410px;
		justify-self: center;
		align-self: flex-end;
		position: relative;
	}
	.product1 > .info {
		width: 349px;
		height: 303px;
		justify-self: center;
		align-self: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.product1 > .info h2 {
		font-style: normal;
		font-weight: 700;
		font-size: 56px;
		line-height: 58px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #ffffff;
	}
	.product1 > .info p {
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

	.product2 {
		grid-column: 1/3;
		grid-row: 2/3;
		display: grid;
		grid-template-columns: 1fr 1fr;
		/* background-color: #979797; */
	}
	.product2 img {
		grid-column: 1/3;
		grid-row: 1/2;
		z-index: -1;
	}
	.product2 .info {
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
	/* .products > div:nth-child(3) {
		background-color: lightgreen;
	} */
	.product4 {
		display: grid;
		background-color: #f1f1f1;
	}
	.product4 > div {
		justify-self: center;
		align-self: center;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
