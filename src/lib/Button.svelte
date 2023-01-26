<script lang="ts">
	export let version = 2;
	export let shopping = false;
</script>

<button
	class="btn"
	class:btn1={version === 1}
	class:btn2={version === 2}
	class:btn3={version === 3}
	on:click>{version === 3 ? 'shop' : shopping === true ? 'add to cart' : 'see product'}</button
>

<style>
	.btn {
		cursor: pointer;
		border: unset;
		width: 160px;
		height: 48px;
		font-weight: 700;
		font-size: 13px;
		line-height: 18px;
		letter-spacing: 1px;
		text-transform: uppercase;
		transition: all 200ms ease-in-out;
	}

	.btn1 {
		background-color: var(--primary);
		color: white;
	}
	.btn1:hover {
		background-color: var(--active);
	}

	.btn2 {
		background-color: transparent;
		border: thin solid black;
		color: black;
	}
	.btn2:hover {
		background-color: black;
		color: white;
	}

	.btn3 {
		background-color: transparent;
		color: black;
		position: relative;
		opacity: 0.5;
		width: 39px;
	}
	.btn3::after {
		content: '';
		color: var(--primary);
		position: absolute;
		margin-left: 0.5rem;
		height: 100%;
		width: 10px;
		background-image: url('/icon-arrow-right.svg');
		background-repeat: no-repeat;
		background-size: contain;
		transition: all 200ms ease-in-out;
	}
	.btn3:hover {
		color: var(--primary);
	}
	.btn3:hover::after {
		transform: translateX(5px);
	}
</style>
