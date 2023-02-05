<script lang="ts">
	// import { error } from '@sveltejs/kit';
	import CartStore from '$lib/cart';
	import numberToCurrency from '$lib/numberToCurrency';
	import Button from '$lib/Button.svelte';
	import SuccessfulOrder from '$lib/SuccessfulOrder.svelte';
	import type ApiResponse from '$types/ApiResponse';

	// import Error from './+error.svelte';

	async function submitForm(e: SubmitEvent) {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		const itemList = $CartStore.map((item) => {
			return { id: item.id, amount: item.amount };
		});
		formData.append('list', JSON.stringify(itemList));
		const res = await fetch('/api/purchase', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(Object.fromEntries(formData.entries()))
		});
		try {
			const data: ApiResponse = await res.json();
			if (res.status !== 200) throw 'ERROR! \nthe server did not respond as expected';

			if (data.complete !== true) throw 'transaction not complete';
			totalPrice = data.price;
			showSuccess = true;
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}
	export let totalPrice = 0;
	let paymentMethod = '';
	function click() {
		showSuccess = true;
	}
	export let showSuccess = false;
	function closeModal() {
		showSuccess = false;
	}
</script>

<SuccessfulOrder show={showSuccess} {closeModal} {totalPrice} />

<form class="checkout-wrap" on:submit|preventDefault={submitForm}>
	<section class="checkout">
		<h1 class="checkout__title">checkout</h1>
		<h2 class="checkout__sub-title">billing details</h2>

		<label class="checkout__name checkout--left">
			Name
			<input type="text" name="name" required={false} placeholder="Alexei Ward" />
		</label>

		<label class="checkout__email checkout--right">
			Email Address
			<input type="email" name="email" required={false} placeholder="alexei@mail.com" />
		</label>

		<label class="checkout__name checkout--left">
			Phone Number
			<input type="tel" name="phone" required={false} placeholder="+1202-555-0136" />
		</label>

		<h2 class="checkout__sub-title">shipping info</h2>

		<label class="checkout--span-2">
			Address
			<input type="text" name="address" required={false} placeholder="1137 Williams Avenue" />
		</label>

		<label class="checkout__zip-code checkout--left">
			ZIP Code
			<input type="text" name="zip" required={false} placeholder="10001" />
		</label>

		<label class="checkout__city checkout--right">
			City
			<input type="text" name="city" required={false} placeholder="New York" />
		</label>

		<label class="checkout__country checkout--left">
			Country
			<input type="text" name="country" required={false} placeholder="United States" />
		</label>

		<h2 class="checkout__sub-title">payment details</h2>
		<p class="checkout__payment__method-text checkout--left">Payment Method</p>

		<div class="checkout__payment__radio checkout--right">
			<label>
				<input
					type="radio"
					name="payment"
					value="eMoney"
					required={false}
					bind:group={paymentMethod}
				/>
				e-money
			</label>
			<label>
				<input
					type="radio"
					name="payment"
					value="cod"
					required={false}
					bind:group={paymentMethod}
				/>
				Cash on Delivery
			</label>
		</div>
		{#if paymentMethod === 'eMoney'}
			<label class="checkout__e-money-number checkout--left">
				e-Money Number
				<input type="text" name="eMoneyNumber" required={false} placeholder="238521993" />
			</label>

			<label class="checkout__e-money-pin checkout--right">
				e-Money PIN
				<input type="text" name="eMoneyPin" required={false} placeholder="6891" />
			</label>
		{/if}
	</section>

	<section class="summary">
		<h2>summary</h2>
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
						<div class="cart__item__price">{numberToCurrency(item.price)}</div>
					</div>
					<div class="cart__item__amount">x{item.amount}</div>
				</li>
			{/each}
		</ul>
		<div class="cart__item__price">
			<div>
				total<span
					>{numberToCurrency(
						$CartStore.reduce((total, current) => total + current.price * current.amount, 0)
					)}</span
				>
			</div>
			<div>shipping<span>$50</span></div>
			<div>
				vat(included)<span
					>{numberToCurrency(
						Math.round(
							$CartStore.reduce((total, current) => total + current.price * current.amount, 0) * 0.2
						)
					)}</span
				>
			</div>
			<div class="cart__item__price__grand-total">
				grand total<span
					>{numberToCurrency(
						Math.round(
							$CartStore.reduce((total, current) => total + current.price * current.amount, 0) + 50
						)
					)}</span
				>
			</div>
		</div>
		<Button version={1} wide={true} text={'continue & pay'} />
	</section>
</form>

<style>
	.checkout-wrap {
		background-color: #f2f2f2;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 2rem;
		padding-bottom: 15rem;
	}
	.checkout,
	.summary {
		background-color: #ffffff;
		border-radius: 8px;
	}
	.checkout {
		max-width: 730px;
		margin-right: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 2rem;
		gap: 1rem;
	}
	label,
	.checkout__payment__method-text {
		display: inline-flex;
		flex-direction: column;
		font-weight: 700;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: -0.214286px;
		height: 56px;
	}
	input:not(.checkout__payment__radio input) {
		max-width: 309px;
		height: 56px;
		background: #ffffff;
		border: 1px solid #cfcfcf;
		border-radius: 8px;
		font-family: 'Manrope';
		font-weight: 700;
		font-size: 14px;
		line-height: 19px;
		letter-spacing: -0.25px;
		color: rgba(0, 0, 0, 0.4);
		padding-inline: 0.5rem;
	}
	.checkout--right {
		grid-column: 2/3;
	}
	.checkout--left {
		grid-column: 1/2;
	}
	.checkout--span-2 {
		grid-column: 1/3;
	}
	.checkout__sub-title {
		grid-column: 1/2;
		font-weight: 700;
		font-size: 13px;
		line-height: 25px;
		letter-spacing: 0.928571px;
		text-transform: uppercase;
		color: #d87d4a;
	}
	.checkout__payment__radio {
		display: grid;
		gap: 1rem;
		accent-color: var(--primary);
	}
	.checkout__payment__radio label {
		display: flex;
		flex-direction: row;
		align-items: center;
		border-radius: 8px;
		gap: 1rem;
		padding-inline: 1rem;
		width: 309px;
		height: 56px;
		border: thin solid rgba(0, 0, 0, 0.4);
	}
	.summary {
		min-width: 300px;
		padding: 2rem;
		margin-top: 5rem;
		height: min-content;
	}
	.summary h2 {
		font-weight: 700;
		font-size: 18px;
		line-height: 25px;
		letter-spacing: 1.28571px;
		text-transform: uppercase;
		color: #000000;
		margin-bottom: 2rem;
	}
	span {
		margin-left: auto;
		font-weight: 700;
		font-size: 18px;
		line-height: 25px;
		text-align: right;
		text-transform: uppercase;
		color: #000000;
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
		border-radius: 8px;
	}
	.cart__item__name {
		font-weight: 700;
		font-size: 15px;
		line-height: 25px;
		color: #000000;
	}
	.cart__item__price {
		width: 100%;
		text-transform: uppercase;
		display: grid;
		gap: 0.5rem;
		font-weight: 700;
		font-size: 14px;
		line-height: 25px;
		color: rgba(0, 0, 0, 0.5);
		font-weight: 500;
		margin-bottom: 2rem;
	}
	.cart__item__amount {
		margin-left: auto;
		font-weight: 700;
		font-size: 15px;
		color: rgba(0, 0, 0, 0.5);
	}
	.cart__item__price > * {
		display: flex;
	}
	.cart__item__price__grand-total {
		margin-top: 1rem;
	}
	.cart__item__price__grand-total span {
		color: var(--primary);
	}
	@media (max-width: 768px) {
		.checkout {
			grid-template-columns: 1fr;
		}
		.checkout > * {
			grid-column: 1/2;
		}
	}
	@media (max-width: 480px) {
		label,
		.checkout__payment__radio,
		.checkout__payment__radio label {
			width: 100%;
		}
	}
</style>
