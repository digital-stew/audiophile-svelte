<script lang="ts">
	import Navbar from './Navbar.svelte';
	import LinkBar from './LinkBar.svelte';
	import heroDesktop from './assets/home/desktop/image-hero.jpg';
	import heroTablet from './assets/home/tablet/image-header.jpg';
	import heroMobile from './assets/home/mobile/image-header.jpg';
	// import sdf from './B'
	import speakerImage from './assets/home/desktop/image-speaker-zx9.png';
	import type IData from '../../types/Idata';
	import Button from './Button.svelte';
	export let data: IData[];
	import { goto } from '$app/navigation';
</script>

<section class="heroSection">
	<!-- <img src={heroDesktop} alt="" /> -->
	<picture>
		<!--width <1000px ? -->
		<source srcset={heroMobile} media="(max-width: 376px)" />
		<source srcset={heroTablet} media="(max-width: 769px)" />
		<img src={heroDesktop} alt="hero" />
	</picture>
	<aside>
		<div class="newProduct">
			{#if data[3].new}
				new product
			{/if}
		</div>

		<h1 class="name">{data[3].name}</h1>

		<div class="description">
			Experience natural, lifelike audio and exceptional build quality made for the passionate music
			enthusiast
		</div>
		<div class="button">
			<Button version={1} on:click={() => goto('/product/' + data[3].slug)} />
		</div>
	</aside>
</section>

<style>
	.heroSection {
		position: relative;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-bottom: 96px;
	}
	.heroSection picture,
	.heroSection img {
		grid-column: 1/3;
		width: 100%;
		object-fit: cover;
		height: 100%;
		grid-row: 1;
	}
	.heroSection aside {
		color: white;
		/* border: thin solid white; */
		grid-column: 1/2;
		grid-row: 1;
		width: 398px;
		height: 346px;
		justify-self: center;
		align-self: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.newProduct {
		font-weight: 400;
		font-size: 14px;
		line-height: 19px;
		letter-spacing: 10px;
		opacity: 0.5;
	}
	.name {
		font-weight: 700;
		font-size: 56px;
		line-height: 58px;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	.description {
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
		opacity: 0.75;
		width: 349px;
	}
	.heroSection::before {
		content: '';
		position: absolute;
		top: 0;
		height: 1px;
		left: 10rem;
		right: 10rem;
		background-color: white;
		opacity: 0.2;
	}
	/* mobile */
	@media (max-width: 480px) {
		.heroSection {
			grid-template-columns: 1fr;
		}
		.heroSection .newProduct {
			text-align: center;
		}
		.heroSection aside {
			width: 100%;
			grid-column: 1;
			grid-row: 1;
		}
		.name {
			font-size: 36px;
			text-align: center;
			line-height: 40px;
			letter-spacing: 1.28px;
		}
		.description {
			text-align: center;
			/* width: 328px; */
		}
		.button {
			align-self: center;
		}
	}

	/* tablet */
	@media (max-width: 768px) {
		.heroSection {
			grid-template-columns: 1fr;
		}
		.heroSection .newProduct {
			text-align: center;
		}
		.heroSection aside {
			width: 379px;
			height: 346px;
			grid-column: 1;
			grid-row: 1;
		}
		.description {
			text-align: center;
			/* width: 328px; */
		}
		.button {
			align-self: center;
		}
	}
</style>
