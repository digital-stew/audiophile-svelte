<script>
	import logo from '$assetsServer/shared/desktop/logo.svg';
	// import Navbar from '../routes/Navbar.svelte';
	import facebookLogo from '$assetsServer/shared/desktop/icon-facebook.svg';
	import instagramLogo from '$assetsServer/shared/desktop/icon-instagram.svg';
	import twitterLogo from '$assetsServer/shared/desktop/icon-twitter.svg';
	import NavLinks from '$lib/NavLinks.svelte';
</script>

<footer class="footer">
	<div class="footer__head">
		<div class="footer__logo-wrap">
			<img class="footer__logo" src={logo} alt="logo" />
		</div>

		<div class="footer__links">
			<NavLinks />
		</div>
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
	.footer__head {
		display: flex;
		flex-wrap: wrap;
	}

	.footer__links {
		max-width: 900px;
		min-width: 400px;
		flex-grow: 1;
		margin-left: auto;
	}
	.footer__body {
		max-width: 60%;
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
	}
	.footer__media {
		position: absolute;
		right: 0;
		bottom: 0;
		padding: 1.5rem;
		display: flex;
		gap: 1rem;
	}
	@media (max-width: 768px) {
		.footer__body {
			text-align: center;
			max-width: 100%;
		}
	}
</style>
