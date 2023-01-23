<script>
	import './styles.css';
	import Navbar from '../lib/Navbar.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<main data-sveltekit-preload-data style="--mobile: max-width: 480px">
	<Navbar />
	<slot />
	<Footer />
</main>
