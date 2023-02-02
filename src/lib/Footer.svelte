<script>
	import logo from '$assetsServer/shared/desktop/logo.svg';
	// import Navbar from '../routes/Navbar.svelte';
	import facebookLogo from '$assetsServer/shared/desktop/icon-facebook.svg';
	import instagramLogo from '$assetsServer/shared/desktop/icon-instagram.svg';
	import twitterLogo from '$assetsServer/shared/desktop/icon-twitter.svg';
	import NavLinks from '$lib/NavLinks.svelte';
</script>

<footer class="footer">
	<div class="footer__logo-wrap">
		<img class="footer__logo" src={logo} alt="logo" />
	</div>

	<div class="footer__links">
		<NavLinks />
	</div>

	<p class="footer__body">
		Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
		and sound specialists who are devoted to helping you get the most out of personal audio. Come
		and visit our demo facility - we’re open 7 days a week.
	</p>
	<p class="footer__copyright">Copyright 2021. All Rights Reserved</p>

	<div class="footer__media">
		<img src={facebookLogo} alt="facebook" />
		<img src={instagramLogo} alt="instagram" />
		<img src={twitterLogo} alt="twitter" />
	</div>
</footer>

<style>
	.footer {
		position: relative;
		background-color: #101010;
		color: white;
		display: grid;
		width: 100%;
		padding: 2rem;
		gap: 2rem;
	}
	.footer__links {
		width: 500px;
	}
	.footer__body {
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
		color: rgba(255, 255, 255, 0.5);
	}
	.footer__copyright {
		font-weight: 700;
		font-size: 15px;
		line-height: 25px;
		color: rgba(255, 255, 255, 0.5);

		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		line-height: 25px;
		/* identical to box height, or 167% */

		color: #ffffff;

		mix-blend-mode: normal;
		opacity: 0.5;
	}
	.footer__media {
		position: absolute;
		right: 0;
		bottom: 0;
		padding: 1.5rem;
		display: flex;
		gap: 1rem;
	}
</style>
