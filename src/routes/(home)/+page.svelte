<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
</script>

<div
	class="bg-linear-to-t to-primary -z-1 absolute inset-0 h-[450px] from-white from-30% to-70%"
></div>
<Section class="gap-5 py-2 md:grid-cols-2 md:gap-10 md:p-10">
	<div class="flex flex-col items-center justify-center gap-5 text-center md:text-left">
		<h1 class="font-bold">Ihre <br class="sm:hidden" /> Gesundheit liegt uns am Herzen</h1>
		<p>
			Als Allgemeinmediziner sind wir Ihre Anlaufstelle für Beschwerden und Vorsorgeuntersuchungen.
		</p>
		<a class="bg-primary justify-self-center rounded-sm px-4 py-2 font-bold" href="tel:+12345678901"
			>Termin vereinbaren
		</a>
	</div>
	<enhanced:img
		class="h-[400px] rounded-lg object-cover object-[50%_30%] shadow sm:object-[30%_10%] lg:h-[750px]"
		src="$assets/hero.png"
		sizes="(max-width: 768px) 768w, (max-width: 1024px) 1024w, (max-width: 1600px) 1600w,
		(max-width: 1920px) 1920w, 100vw"
		alt=""
	/>
</Section>
