<script lang='ts'>
  import type { Pathname } from '$app/types'
  import type { HTMLAnchorAttributes } from 'svelte/elements'
  import { resolve } from '$app/paths'
  import { page } from '$app/state'

  type Props = {
    href: Pathname
  } & HTMLAnchorAttributes

  const { href, children, ...rest }: Props = $props()
</script>

<a href={resolve(href)} {...rest} aria-current={page.url.pathname === href}>
  {@render children?.()}
</a>
