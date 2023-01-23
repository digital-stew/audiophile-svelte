<ul data-sveltekit-preload-data>
	<li><a href="/">home</a></li>
	<li><a href="/products/headphones">headphones</a></li>
	<li><a href="/products/speakers">speakers</a></li>
	<li><a href="/products/earphones">earphones</a></li>
</ul>

<style>
	ul {
		vertical-align: middle;
		text-transform: uppercase;
		display: flex;
		flex-grow: 1;
		/* gap: 8rem; */
		justify-content: space-around;
		list-style: none;
		max-width: auto;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	li * {
		text-decoration: none;
		color: white;
	}
	li:hover * {
		color: var(--primary);
	}
</style>
