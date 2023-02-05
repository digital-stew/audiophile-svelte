<script lang="ts">
	import CartStore, { removeAll } from '$lib/cart';
	export let totalPrice = 0;
	export let show = false;
	import Button from './Button.svelte';
	import { goto } from '$app/navigation';
	import numberToCurrency from './numberToCurrency';
	import checkMark from '$lib/assets/checkout/icon-order-confirmation.svg';
	export let closeModal: () => void;
	function backToHome() {
		closeModal();
		removeAll();
		goto('/');
	}
</script>

<div class="backdrop" data-open={show}>
	<div class="successfulOrder" data-open={show}>
		<img src={checkMark} alt="check mark" />
		<h1 class="successfulOrder__title">thank you <br /> for your order</h1>
		<p class="successfulOrder__sub-title">You will receive an email confirmation shortly</p>
		<div class="wrap">
			<div class="successfulOrder__items">
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
							<div class="cart__item__amount">
								{item.amount}
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="successfulOrder__total">
				<h2>grand total</h2>
				{numberToCurrency(totalPrice)}
			</div>
		</div>
		<Button version={1} text={'back to home'} wide={true} on:click={backToHome} />
	</div>
</div>

<!-- <button on:click={click}>click</button> -->
<style>
	.backdrop {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		display: grid;
		inset: 0;
		z-index: 2;
	}
	.successfulOrder {
		position: relative;
		display: grid;
		gap: 2rem;
		background-color: white;
		padding: 2rem;
		position: fixed;
		z-index: 3;
		place-self: center;
		/* display: none; */
	}
	.wrap {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.successfulOrder__items {
		display: flex;
		border-radius: 8px 0 0 8px;
		background-color: #f1f1f1;
	}
	.successfulOrder__total {
		background-color: black;
		border-radius: 0 8px 8px 0;
		color: white;
		display: grid;
		place-content: center;
		padding-right: 2rem;
	}
	.cart__item {
		display: flex;
		margin: 1rem;
		gap: 1rem;
		height: 64px;
		justify-items: center;
		align-items: center;
	}
	li img {
		width: 64px;
		height: 64px;
		object-fit: contain;
	}
	.cart__item__amount {
		margin-left: auto;
	}
	.cart__item__amount::before {
		content: 'X';
	}
	.successfulOrder__title {
		font-weight: 700;
		font-size: 32px;
		line-height: 36px;
		letter-spacing: 1.14286px;
		text-transform: uppercase;
		color: #000000;
	}
	.successfulOrder__sub-title {
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
		color: rgba(0, 0, 0, 0.5);
	}
	.cart__item__amount,
	.cart__item__price {
		font-weight: 700;
		font-size: 14px;
		line-height: 25px;
		color: rgba(0, 0, 0, 0.5);
	}
	.cart__item__name {
		font-weight: 700;
		font-size: 15px;
		line-height: 25px;
		color: #000000;
	}
	*[data-open='false'] {
		display: none;
	}
</style>
