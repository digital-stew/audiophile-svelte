<script lang="ts">
	import type IData from '../../../../types/Idata';
	export let data: IData;
</script>

<div class="image-grid">
	<div class="image-grid__item image-grid__item--1">
		<picture>
			<source srcset={'/' + data.gallery.first.mobile} media="(max-width: 376px)" />
			<source srcset={'/' + data.gallery.first.tablet} media="(max-width: 769px)" />
			<img src={'/' + data.gallery.first.desktop} alt="gallery" />
		</picture>
	</div>
	<div class="image-grid__item image-grid__item--2">
		<picture>
			<source srcset={'/' + data.gallery.second.mobile} media="(max-width: 376px)" />
			<source srcset={'/' + data.gallery.second.tablet} media="(max-width: 769px)" />
			<img src={'/' + data.gallery.second.desktop} alt="gallery" />
		</picture>
	</div>
	<div class="image-grid__item image-grid__item--3">
		<picture>
			<source srcset={'/' + data.gallery.third.mobile} media="(max-width: 376px)" />
			<source srcset={'/' + data.gallery.third.tablet} media="(max-width: 769px)" />
			<img src={'/' + data.gallery.third.desktop} alt="gallery" />
		</picture>
	</div>
</div>

<style>
	.image-grid {
		position: relative;
		max-width: 1400px;
		display: grid;
		margin-inline: auto;
		grid-template-columns: 40% 60%;
		gap: 2rem;
		margin-bottom: 10rem;
	}
	.image-grid__item--3 {
		grid-column: 2/3;
		grid-row: 1/3;
	}
	img,
	picture {
		width: 100%;
	}
	@media (max-width: 480px) {
		.image-grid {
			grid-template-columns: 100%;
			margin-inline: 1rem;
		}
		.image-grid__item--3 {
			grid-column: unset;
			grid-row: unset;
		}
	}
</style>
