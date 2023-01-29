<script lang="ts">
	export let showCart = true;
	import { removeAll, decrementProductCount, incrementProductCount } from '$lib/cart';
	import numberToCurrency from '$lib/numberToCurrency';
	import CartStore from '$lib/cart';
	import Button from './Button.svelte';
	$: cartTotal = numberToCurrency(
		$CartStore.reduce((total, current) => total + current.price * current.amount, 0)
	);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backdrop" data-open={showCart} on:click|self>
	<div class="cart" data-open={showCart}>
		<div class="cart__header">
			<h2>cart({$CartStore.length})</h2>
			<button on:click={removeAll}>remove all</button>
		</div>
		<ul>
			{#each $CartStore as item}
				<li class="cart__item">
					<div>
						<img src={'/assets/cart/' + item.image} alt="" />
					</div>
					<div>
						<div class="cart__item__name">
							{item.item}
						</div>
						<div class="cart__item__price">
							{numberToCurrency(item.price)}
						</div>
					</div>
					<div class="cart__item__buttons">
						<button on:click={() => decrementProductCount(item.id)}>-</button>
						{item.amount}
						<button on:click={() => incrementProductCount(item.id)}>+</button>
					</div>
				</li>
			{/each}
		</ul>
		<div class="cart__footer">
			<div class="cart__footer__text">total</div>
			<div class="cart__footer__total">{cartTotal}</div>
		</div>
		<Button version={1} />
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
		letter-spacing: 1.28571px;
		text-transform: uppercase;
		color: #000000;
	}
	.cart__header button {
		cursor: pointer;
		border: none;
		background-color: transparent;
		margin-left: auto;
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
		text-decoration-line: underline;
		color: rgba(0, 0, 0, 0.5);
	}
	.cart__item {
		display: flex;
		margin: 1rem;
		gap: 1rem;
		height: 64px;
		justify-content: center;
		justify-items: center;
		align-items: center;
	}
	li img {
		width: 64px;
		height: 64px;
		object-fit: contain;
	}
	.cart__item__buttons {
		background-color: #f1f1f1;
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
		color: #000000;
	}
	.cart__item__price {
		font-weight: 700;
		font-size: 14px;
		line-height: 25px;
		color: rgba(0, 0, 0, 0.5);
	}
	.cart__footer {
		display: flex;
		padding-inline: 2rem;
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
		color: rgba(0, 0, 0, 0.5);
		text-transform: uppercase;
	}
	.cart__footer__total {
		margin-left: auto;
		font-weight: 700;
		font-size: 18px;
		color: #000000;
	}
</style>
