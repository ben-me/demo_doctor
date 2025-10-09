<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SvelteHTMLElements } from 'svelte/elements';

	const { children, class: classes, ...rest }: SvelteHTMLElements['section'] = $props();
</script>

<section {...rest} class={cn('grid gap-8 px-5 py-10', classes)}>
	{@render children?.()}
</section>
