<script lang="ts">
	/** @type {import('./$types').PageData} */

	import Hero from '$lib/Hero.svelte';
	import LinkBar from '../lib/LinkBar.svelte';
	import { page } from '$app/stores';
	import type IData from '$types/IData';
	import ProductsGrid from './ProductsGrid.svelte';
	import About from '$lib/About.svelte';
	export let data: IData[];
</script>

<Hero {data} />
<LinkBar />
<ProductsGrid />
<About />
