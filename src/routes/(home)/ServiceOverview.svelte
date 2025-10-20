<script lang="ts">
	import type { IconName } from '$lib/components/ui/Icon.svelte';
	import Icon from '$lib/components/ui/Icon.svelte';
	import Section from '$lib/components/ui/Section.svelte';

	const SERVICES: { name: string; icon: IconName; description: string }[] = [
		{
			name: 'Diagnostik',
			icon: 'Microscope',
			description:
				'Lorem ipsum dolor sit amet consectetur. Rhoncus diam nisl elit nunc eget viverra consequat.'
		},
		{
			name: 'Reisemedizin',
			icon: 'Suitcase',
			description:
				'Lorem ipsum dolor sit amet consectetur. Rhoncus diam nisl elit nunc eget viverra consequat.'
		},
		{
			name: 'Impfungen',
			icon: 'Needle',
			description:
				'Lorem ipsum dolor sit amet consectetur. Rhoncus diam nisl elit nunc eget viverra consequat.'
		},
		{
			name: 'Geriatrie',
			icon: 'House',
			description:
				'Lorem ipsum dolor sit amet consectetur. Rhoncus diam nisl elit nunc eget viverra consequat.'
		},
		{
			name: 'Infektiologie',
			icon: 'Virus',
			description:
				'Lorem ipsum dolor sit amet consectetur. Rhoncus diam nisl elit nunc eget viverra consequat.'
		}
	];
</script>

<Section>
	<h2 class="text-h3">Unsere Leistungen</h2>
	<ul class="flex flex-col flex-wrap gap-3 md:flex-row">
		{#each SERVICES as service (service)}
			<li class="max-w-full last-of-type:mx-auto md:flex-[0_1_49%]">
				<article
					class="border-b-1 md:border-border grid grid-cols-[auto_1fr] gap-3 border-gray-400/40 bg-white py-[0_1.5rem] md:rounded-sm md:border-0
					md:p-5 md:shadow-md"
				>
					<Icon class="w-6 self-center" name={service.icon} />
					<h3 class="text-h4 col-start-2">
						{service.name}
					</h3>
					<p class="col-start-2">{service.description}</p>
					<a
						class="col-start-2 justify-self-end text-right text-sm font-semibold text-blue-700 underline focus:hover:text-blue-400"
						href={`/leistungen#${service.name.toLocaleLowerCase()}`}
					>
						Mehr über {service.name} erfahren
					</a>
				</article>
			</li>
		{/each}
	</ul>
</Section>
