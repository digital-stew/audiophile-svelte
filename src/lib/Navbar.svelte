<script lang="ts">
	/** @type {import('./$types').PageData} */

	import logo from './assets/shared/desktop/logo.svg';
	import shoppingCartImg from './assets/shared/desktop/icon-cart.svg';
	import NavLinks from './NavLinks.svelte';
	import hamburgerIcon from '$assetsServer/shared/tablet/icon-hamburger.svg';
	let showLinks = false;
	function toggleShow() {
		showLinks = !showLinks;
	}
</script>

<nav>
	<button class="nav__hamburger" on:click={toggleShow}>
		<img src={hamburgerIcon} alt="logo" />
	</button>
	<div><img src={logo} alt="logo" /></div>
	<div class="nav__links" class:nav__links--show={showLinks}>
		<NavLinks />
	</div>
	<div class="nav__shopping-cart"><img src={shoppingCartImg} alt="shopping cart" /></div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #979797;
		background-color: #141414;
		position: relative;
		padding-top: 1rem;
		padding-bottom: 2rem;
		padding-inline: 5%;
	}
	.nav__links {
		/* background-color: red; */
		max-width: 1000px;
		flex-grow: 1;
	}
	.nav__hamburger {
		display: none;
		border: none;
		background-color: transparent;
	}
	.nav__hamburger:focus,
	.nav__hamburger:active {
		border: none;
		background-color: transparent;
	}
	@media (max-width: 768px) {
		nav {
			justify-content: unset;
			padding-inline: 2rem;
			gap: 1rem;
		}
		.nav__links {
			display: none;
			background-color: #141414;
			position: absolute;
			width: 150px;
			bottom: -120px;
			z-index: 100;
			padding: 1rem;
			padding-inline: 2rem;
		}
		.nav__links--show {
			display: block;
		}
		.nav__shopping-cart {
			margin-left: auto;
		}
		.nav__hamburger {
			display: block;
		}
	}

	/* mobile */
	@media (max-width: 480px) {
	}
</style>
