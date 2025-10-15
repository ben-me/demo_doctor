<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Information from '$lib/components/Information.svelte';
	import Welcome from '$lib/components/Welcome.svelte';
</script>

<div
	class="bg-linear-to-t to-primary absolute inset-0 -z-10 h-[450px] from-white from-30% to-70%"
></div>
<div
	class="-z-1 mask-y-from-80% mask-x-from-80% inset-y-120 lg:w-8/10 aspect-4/3 absolute inset-x-0 mx-auto w-full bg-[url($assets/homepattern.webp)] bg-cover opacity-80"
></div>
<Hero />
<Information />
<Welcome />
