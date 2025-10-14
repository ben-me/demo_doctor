<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Information from '$lib/components/Information.svelte';
	import Welcome from '$lib/components/Welcome.svelte';
</script>

<div
	class="bg-linear-to-t to-primary -z-1 absolute inset-0 h-[450px] from-white from-30% to-70%"
></div>
<div
	class="-z-1 mask-y-from-90% mask-x-from-80% inset-y-130 w-8/10 absolute inset-x-0 mx-auto aspect-video bg-[url($assets/homepattern.webp)] bg-cover bg-no-repeat opacity-80"
></div>
<Hero />
<Information />
<Welcome />
