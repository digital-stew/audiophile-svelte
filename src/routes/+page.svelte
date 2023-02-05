<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import LinkBar from '$lib/LinkBar.svelte';
	import ProductsGrid from './ProductsGrid.svelte';
	import About from '$lib/About.svelte';
	import type IData from '../../types/Idata';
	export let data: IData[];
</script>

<Hero {data} />
<LinkBar />
<ProductsGrid />
<About />
