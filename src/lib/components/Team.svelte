<script lang="ts">
	import Section from './ui/Section.svelte';
	import Link from './ui/Link.svelte';
</script>

<Section class="[&_picture]: md:grid-cols-2">
	<enhanced:img
		sizes="(max-width: 768px) 768w, (max-width: 1024px) 1024w, (max-width: 1400px) 1400w,
		(max-width: 1920px) 960w, 100vw"
		src="$assets/team.webp"
		class="shadow-(--shadow-m) h-full rounded-md object-cover"
		alt="6 Frauen der Praxis die in die Kamera lächeln."
	/>
	<div>
		<h2 class="mb-1 md:mb-4">Das Team</h2>
		<p class="mb-6 md:mb-12">
			Wir schätzen uns glücklich ein Team aus engagierten, professionellen und hilfsbereiten Ärzten
			sowie medizinischen Fachkräften aufgebaut zu haben. Jede/r Einzelne leistet wichtige Dienste
			um Ihnen die bestmögliche Versorgung ermöglichen zu können.
		</p>
		<Link
			href="/team"
			class="bg-primary shadow-(--shadow-s) hover:bg-primary-light hover:shadow-(--shadow-m) self-start rounded-sm px-4 py-2 font-semibold transition-all duration-150"
		>
			Lerne das Team kennen
		</Link>
	</div>
</Section>
