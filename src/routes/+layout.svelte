<script>
	import './styles.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Navbar />
<main class="main" data-sveltekit-preload-data>
	<slot />
</main>
<Footer />
