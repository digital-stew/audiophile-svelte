<script>
	import logo from '$assetsServer/shared/desktop/logo.svg';
	// import Navbar from '../routes/Navbar.svelte';
	import facebookLogo from '$assetsServer/shared/desktop/icon-facebook.svg';
	import instagramLogo from '$assetsServer/shared/desktop/icon-instagram.svg';
	import twitterLogo from '$assetsServer/shared/desktop/icon-twitter.svg';
	import NavLinks from '$lib/NavLinks.svelte';
</script>

<footer class="footer">
	<div class="footer__left">
		<img class="footer__left__image" src={logo} alt="logo" />
		<p class="footer__left__body">
			Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
			lovers and sound specialists who are devoted to helping you get the most out of personal
			audio. Come and visit our demo facility - we’re open 7 days a week.
		</p>
		<p>Copyright 2021. All Rights Reserved</p>
	</div>
	<div class="footer__right">
		<div class="footer__right__links">
			<NavLinks />
		</div>

		<div class="footer__right__media">
			<img src={facebookLogo} alt="facebook" />
			<img src={instagramLogo} alt="instagram" />
			<img src={twitterLogo} alt="twitter" />
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: #101010;
		color: white;
		height: 365px;
		margin-top: 200px;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.footer__left {
		padding: 4rem;
		font-weight: 500;
		font-size: 15px;
		line-height: 25px;
	}
	.footer__left > *:not(.footer__left__image) {
		opacity: 0.5;
	}
	.footer__left__body {
		margin-top: 2rem;
		margin-bottom: 4rem;
	}

	.footer__right {
		padding: 4rem;
		/* width: max-content; */
	}
	.footer__right__media {
		display: flex;
		justify-content: end;
		gap: 2rem;
		margin-left: auto;
		margin-top: 10rem;
	}
</style>
