<script lang="ts">
	import '$styles/app.css';
	import favicon from '$assets/favicon.svg';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<main>
	{@render children?.()}
</main>
<Footer />
