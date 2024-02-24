<script lang="ts">
	import { base } from '$app/paths';
</script>

<main>
	<h1>About Scratchpad</h1>

	<h2>What is it?</h2>
	<p>
		It's a notes app that focuses on quickly jotting down a new idea. Check out the app <a
			href={`${base}/`}>here.</a
		>
	</p>

	<h2>Why would I use it?</h2>
	<p>
		Scratchpad is made with the idea that it's better to note down an idea quickly and organize it
		later, rather than needing to organize first.
	</p>
	<p>
		Picture a moment when you're talking with your friend in person and they recommend a TV show for
		you to watch. You may open up your notes app, find your “tv shows to watch” note, scroll to the
		bottom, add your show then save the note. Alternatively you can open Scratchpad, which always
		opens with a new note, record the show and save the note.
	</p>
	<p>
		Scratchpad is built to save your ideas quickly, so that you can get back to what you were doing
		before.
	</p>

	<h2>How does it work?</h2>
	<p>
		Open the app and record ideas. No signup or login required. No internet required either since
		the app is built to for full offline support thanks to service workers.
	</p>
	<p>
		I recommend using the app on your phone and adding the icon to your home screen on either your <a
			href="https://www.macrumors.com/how-to/add-a-web-link-to-home-screen-iphone-ipad/">iOS</a
		>
		or
		<a href="https://www.androidauthority.com/add-website-android-iphone-home-screen-3181682/"
			>Android</a
		> device.
	</p>

	<h2>What about my data, how is it stored and used?</h2>
	<p>
		Everything you record lives on your device, in your browser's local storage. No data is sent
		back to Scratchpad. In fact, Scratchpad is a client-only app and doesn't have its own servers.
	</p>
	<p>
		This also means that <strong
			>clearing your browser's cache will remove all Scratchpad data.</strong
		>
	</p>
	<p>
		See for yourself! The Scratchpad codebase is open source and can be found on <a
			href="https://github.com/andreidobrinski/scratchpad"
			target="_blank"
			rel="noopener noreferrer">GitHub</a
		>.
	</p>

	<h2>Who are you and why did you make this?</h2>
	<p>
		Glad you asked! I'm <a
			href="https://andreidobrinski.com"
			target="_blank"
			rel="noopener noreferrer">Andrei</a
		>, a frontend developer that loves the modern web.
	</p>
	<p>
		I made Scratchpad because it's something that I wanted to use for myself. You're welcome to use
		it too!
	</p>

	<h2>Where can I go with my feedback?</h2>
	<p>
		Feel free to reach out on Twitter, I'm <a
			href="https://twitter.com/andreidobrinski"
			target="_blank"
			rel="noopener noreferrer">@andreidobrinski</a
		>. You can also file an issue on the
		<a href="https://github.com/andreidobrinski/scratchpad">GitHub repo.</a>
	</p>

	<a href={`${base}/`}>Back to app</a>
</main>

<style>
	main {
		padding: 8px;
		margin-bottom: 32px;
	}

	h1,
	h2,
	p {
		@apply text-gray-900 dark:text-white;
	}

	h1 {
		@apply pb-6 text-5xl;
	}

	h2 {
		@apply py-3 text-3xl;
	}

	p {
		@apply pb-3 text-base;
	}

	a {
		@apply text-cyan-700 underline dark:text-cyan-300;
	}
</style>
