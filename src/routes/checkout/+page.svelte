<script lang="ts">
	import CartStore from '$lib/cart';
	import numberToCurrency from '$lib/numberToCurrency';
	import Button from '$lib/Button.svelte';
	function handleCheckoutClick() {}
</script>

<div class="checkout-wrap">
	<section class="checkout">
		<h1 class="checkout__title">checkout</h1>
		<h2 class="checkout__sub-title">billing details</h2>

		<label class="checkout__name checkout--left">
			Name
			<input type="text" placeholder="Alexei Ward" />
		</label>

		<label class="checkout__email checkout--right">
			Email Address
			<input type="email" placeholder="alexei@mail.com" />
		</label>

		<label class="checkout__name checkout--left">
			Phone Number
			<input type="tel" placeholder="+1202-555-0136" />
		</label>

		<h2 class="checkout__sub-title">shipping info</h2>

		<label class="checkout--span-2">
			Address
			<input type="text" placeholder="1137 Williams Avenue" />
		</label>

		<label class="checkout__zip-code checkout--left">
			ZIP Code
			<input type="text" placeholder="10001" />
		</label>

		<label class="checkout__zip-code checkout--right">
			City
			<input type="text" placeholder="New York" />
		</label>

		<label class="checkout__zip-code checkout--left">
			Country
			<input type="text" placeholder="United States" />
		</label>

		<h2 class="checkout__sub-title">payment details</h2>
		<p class="checkout__payment__method-text checkout--left">Payment Method</p>

		<div class="checkout__payment__radio checkout--right">
			<label>
				<input type="radio" name="payment" id="payment" />
				e-money
			</label>
			<label>
				<input type="radio" name="payment" id="payment" />
				Cash on Delivery
			</label>
		</div>

		<label class="checkout__e-money-number checkout--left">
			e-Money Number
			<input type="text" placeholder="238521993" />
		</label>

		<label class="checkout__e-money-pin checkout--right">
			e-Money PIN
			<input type="text" placeholder="6891" />
		</label>
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
		<Button version={1} wide={true} text={'continue & pay'} on:click={handleCheckoutClick} />
	</section>
</div>

<style>
	.checkout-wrap {
		background-color: #f2f2f2;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		/* justify-content: space-between; */
		/* justify-items: center; */
		/* align-items: flex-start; */
		padding: 2rem;
	}
	section {
		/* border: thin solid black; */
		background-color: #ffffff;
		border-radius: 8px;
	}
	.checkout {
		/* border: thin solid black; */
		width: 730px;
		margin-inline: 2rem;
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
		width: 309px;
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
		/* width: 612px; */
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
</style>
