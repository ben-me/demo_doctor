<script lang="ts">
	import '$styles/app.css';
	import favicon from '$assets/favicon.svg';
	import Header from '$lib/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<main>
	{@render children?.()}
</main>
<footer></footer>
