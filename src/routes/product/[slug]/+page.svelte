<script lang="ts">
	import ProductCard from '$lib/ProductCard.svelte';
	import About from '$lib/About.svelte';
	import type IData from '$types/Idata';
	import LinkBar from '$lib/LinkBar.svelte';
	import ProductDetails from './ProductDetails.svelte';
	import ImageGrid from './ImageGrid.svelte';
	import AlsoLike from '$lib/AlsoLike.svelte';
	export let data: { res: IData };
</script>

<ProductCard data={data.res} shopping={true} />
<ProductDetails data={data.res} />
<ImageGrid data={data.res} />

<AlsoLike products={data.res.others} />
<LinkBar />
<About />
