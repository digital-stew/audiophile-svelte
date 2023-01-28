<script lang="ts">
	import ProductCard from '$lib/ProductCard.svelte';
	import About from '$lib/About.svelte';
	import { afterNavigate } from '$app/navigation';
	import type IData from '../../../../types/Idata';
	import LinkBar from '$lib/LinkBar.svelte';
	import ProductDetails from './ProductDetails.svelte';
	import ImageGrid from './ImageGrid.svelte';
	/** @type {import('./$types').PageData} */
	export let data: { res: IData };
	// console.log(data);
</script>

<ProductCard data={data.res} shopping={true} />
<ProductDetails data={data.res} />
<ImageGrid data={data.res} />

<LinkBar />

<About />

<style>
</style>
