<script lang="ts">
	export let showCart = true;
	// import { createEventDispatcher } from 'svelte';
	// const dispatch = createEventDispatcher()
	import { getItems, removeAll } from '$lib/cart';
	let items = getItems() || [];
	$: list = items;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backdrop" data-open={showCart} on:click|self>
	<div class="cart" data-open={showCart}>
		<div class="cart__header">
			<h2>cart({items.length})</h2>
			<button on:click={removeAll}>remove all</button>
		</div>
		<ul>
			{#each list as item}
				<li>
					<div>pic</div>
					<div>
						<div class="cart__item__name">
							{item.item}
						</div>
						<div class="cart__item__price">
							{item.price}
						</div>
					</div>
					<div class="cart__item__buttons"><button>-</button>{item.amount}<button>+</button></div>
				</li>
			{/each}
		</ul>
	</div>
</div>

<!-- <button on:click={click}>click</button> -->
<style>
	*[data-open='false'] {
		display: none;
	}
	.backdrop {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		inset: 0;
		z-index: 2;
	}
	.cart {
		background-color: white;
		right: 10rem;
		top: 7rem;
		padding: 2rem;
		position: fixed;
		border-radius: 8px;
		z-index: 3;
	}
	.cart__header {
		display: flex;
		font-weight: 700;
		font-size: 18px;
		line-height: 25px;
		/* identical to box height */

		letter-spacing: 1.28571px;
		text-transform: uppercase;

		color: #000000;
	}
	.cart__header button {
		/* all: unset; */
		cursor: pointer;
		border: none;
		background-color: transparent;
		/* user-select: none; */
		margin-left: auto;

		font-weight: 500;
		font-size: 15px;
		line-height: 25px;

		text-decoration-line: underline;

		color: rgba(0, 0, 0, 0.5);
	}
	li {
		display: flex;
		margin: 1rem;
		gap: 1rem;
	}
	.cart__item__buttons {
		background-color: #f1f1f1;
		/* padding: 1rem; */
		width: 96px;
		height: 32px;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-left: auto;

		gap: 0.5rem;
	}
	.cart__item__buttons > * {
		width: 33%;
		height: 100%;
	}
	.cart__item__buttons button {
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
	.cart__item__name {
		font-weight: 700;
		font-size: 15px;
		line-height: 25px;
		/* identical to box height, or 167% */

		color: #000000;
	}
	.cart__item__price {
		font-weight: 700;
		font-size: 14px;
		line-height: 25px;
		color: rgba(0, 0, 0, 0.5);
	}
	/* .cart__price {
		background-color: blue;
		display: flex;
		flex-direction: column;
	} */
</style>
