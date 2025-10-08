<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { Pathname } from '$app/types';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = {
		href: Pathname;
	} & HTMLAnchorAttributes;

	let { href, children, ...rest }: Props = $props();
</script>

<a href={resolve(href)} {...rest} aria-current={page.url.pathname === href}>
	{@render children?.()}
</a>
