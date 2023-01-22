<script lang="ts">
	// import Button from '$lib/Button.svelte';
	import ProductCard from '$lib/ProductCard.svelte';
	import type IData from '../../../../types/Idata';
	import About from '$lib/About.svelte';

	/** @type {import('./$types').PageData} */
	export let data: { data: IData[] };
	const productArray: IData[] = data.data;
</script>

{#each productArray as product, index (product.id)}
	<ProductCard data={product} reverse={index % 2 ? true : false} />
{/each}
<About />

<style>
	section {
		background-color: red;
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 1110px;
		margin-inline: auto;
		/* height: 560px; */
		/* object-fit: contain; */
	}
	.card--left {
		position: relative;
		/* object-fit: contain; */
		grid-column: 1/2;
	}
	img {
		grid-column: 1/2;
		position: relative;
		/* object-fit: contain; */
		width: 100%;
		height: 100%;
	}
</style>
