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
	<div
		class="bg-linear-to-t to-primary absolute inset-0 -z-10 h-[450px] from-white from-30% to-70%"
	></div>
	{@render children?.()}
</main>
<Footer />
