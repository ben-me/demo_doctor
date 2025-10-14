<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { IconName } from './Icon.svelte';
	import Icon from './Icon.svelte';
	import { twMerge } from 'tailwind-merge';
	import type { ClassValue } from 'tailwind-variants';

	type PrincipleProps = SvelteHTMLElements['article'] & {
		title: string;
		iconName?: IconName;
		iconClasses?: ClassValue;
		description: string;
	};
	const {
		title,
		description,
		iconName,
		iconClasses,
		class: className,
		...rest
	}: PrincipleProps = $props();
</script>

<article
	{...rest}
	class={cn(
		'grid h-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] items-center gap-x-3 gap-y-1 bg-white px-4 py-3',
		className
	)}
>
	{#if iconName}
		<Icon name={iconName} class={twMerge('w-6 py-0.5', iconClasses)} />
	{/if}
	<h4 class="text-normal col-start-2 row-start-1 font-semibold">{title}</h4>
	<p class="col-start-2 row-start-2 self-start opacity-80">{description}</p>
</article>
