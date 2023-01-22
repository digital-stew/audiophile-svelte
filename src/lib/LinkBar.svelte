<script lang="ts">
	import headphonesImage from '$assetsServer/shared/desktop/image-category-thumbnail-headphones.png';
	import speakerImage from '$assetsServer/shared/desktop/image-category-thumbnail-speakers.png';
	import earphonesImage from '$assetsServer/shared/desktop/image-category-thumbnail-earphones.png';
	import Button from '$lib/Button.svelte';
</script>

<nav>
	<div>
		<img src={headphonesImage} alt="earphones" />
		headphones
		<Button version={3} />
	</div>
	<div>
		<img src={speakerImage} alt="speaker" />
		speakers
		<Button version={3} />
	</div>
	<div>
		<img src={earphonesImage} alt="earphones" />
		earphones
		<Button version={3} />
	</div>
</nav>

<style>
	nav {
		display: flex;
		position: relative;
		max-width: 1400px;
		gap: 1rem;
		margin-inline: auto;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		position: relative;
		/* border: thin solid black; */
	}
	div {
		display: flex;
		/* gap: 1rem; */
		flex-direction: column;
		position: relative;
		align-items: center;
		text-transform: uppercase;
		letter-spacing: 1.28px;
		font-size: 18px;
		font-weight: 700;
	}
	div::before {
		content: '';
		width: 100%;
		height: 60%;
		bottom: 0;
		position: absolute;
		background-color: #f1f1f1;
		border-radius: 8px;
		z-index: -1;
	}
	@media (max-width: 480px) {
		nav {
			flex-wrap: wrap;
		}
		img {
			width: 70%;
		}
	}
</style>
