<script lang="ts">
	import ProductCard from '$lib/ProductCard.svelte';
	import About from '$lib/About.svelte';
	import { afterNavigate } from '$app/navigation';
	import type IData from '$types/Idata';
	import LinkBar from '$lib/LinkBar.svelte';
	export let data: { res: IData[] };
	$: productArray = data.res;
	afterNavigate(() => {
		productArray = data.res;
	});
</script>

{#each productArray as product, index (product.id)}
	<ProductCard data={product} reverse={index % 2 ? true : false} />
{/each}

<LinkBar />
<About />

<style>
</style>
