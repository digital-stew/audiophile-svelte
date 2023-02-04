<script lang="ts">
	import bestGearImageDesktop from '$assetsServer/shared/desktop/image-best-gear.jpg';
	import bestGearImageTablet from '$assetsServer/shared/tablet/image-best-gear.jpg';
	import bestGearImageMobile from '$assetsServer/shared/mobile/image-best-gear.jpg';
</script>

<section class="about">
	<div class="about__body">
		<h2 class="about__body__title">Bringing you the best audio gear</h2>
		<p class="about__body__text">
			Located at the heart of New York City, Audiophile is the premier store for high end
			headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
			demonstration rooms available for you to browse and experience a wide range of our products.
			Stop by our store to meet some of the fantastic people who make Audiophile the best place to
			buy your portable audio equipment.
		</p>
	</div>
	<picture>
		<source srcset={bestGearImageMobile} media="(max-width: 376px)" />
		<source srcset={bestGearImageTablet} media="(max-width: 769px)" />
		<img src={bestGearImageDesktop} alt="hero" />
	</picture>
</section>

<style>
	.about {
		max-width: 1100px;
		margin-inline: auto;
		/* display: grid; */
		/* grid-template-columns: repeat(auto-fit, 500px); */
		display: flex;
		align-content: center;
		justify-content: center;
		position: relative;
		justify-content: center;
		justify-items: center;
		flex-wrap: wrap-reverse;
	}
	/* .about > * {
		width: 500px;
		flex-basis: 1;
	} */
	.about__body {
		margin: 2rem;
	}
	.about__body__text {
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
		opacity: 0.5;
	}
	.about__body__title {
		font-weight: 700;
		font-size: 40px;
		line-height: 44px;

		letter-spacing: 1.42857px;
		text-transform: uppercase;
		margin-bottom: 32px;
	}
	img,
	picture {
		border-radius: 16px;
		object-fit: cover;
		width: 90%;
		/* height: 80%; */
		position: relative;
	}
	@media (max-width: 768px) {
		section * {
			text-align: center;
		}
	}
</style>
