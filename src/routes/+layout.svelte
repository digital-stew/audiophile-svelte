<script>
	import './styles.css';
	import Navbar from '../lib/Navbar.svelte';
	import Footer from '../lib/Footer.svelte';
	export const cart = { id: 1, product: 'headphones' };
	console.log('layout.svelte');
</script>

<main data-sveltekit-preload-data style="--mobile: max-width: 480px">
	<Navbar />
	<slot />
	<Footer />
</main>
