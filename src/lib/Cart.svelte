<script lang="ts">
	export let showCart;
	$: showCart;
	import { getItems } from '$lib/cart';
	let items = getItems();
</script>

<button class="backDrop" on:click={() => (showCart = false)} />
<div class="cart">
	{#each items as item}
		<div>{item.item}</div>
	{/each}
</div>

<style>
	.backDrop {
		all: unset;
		width: 100vw;
		height: 100vh;
		background-color: black;
		opacity: 0.5;
		position: fixed;
		top: 0;
		z-index: 2;
		/* display: none; */
	}
	.cart {
		/* display: none; */
		background-color: white;
		width: 200px;
		height: 200px;
		right: 10rem;
		position: fixed;
		opacity: 1;
		z-index: 3;
	}
	.show {
		display: block;
	}
</style>
