<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	const { children, class: classes, ...rest }: SvelteHTMLElements['section'] = $props();
</script>

<section {...rest} class={['grid gap-8 px-5 py-10', classes]}>
	{@render children?.()}
</section>
