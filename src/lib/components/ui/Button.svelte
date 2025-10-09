<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const { children, class: className, ...rest }: HTMLButtonAttributes = $props();
</script>

<button {...rest} class={[' rounded-sm px-4 py-2 ', className]}>
	{@render children?.()}
</button>
