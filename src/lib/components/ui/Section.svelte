<script lang='ts'>
  import type { SvelteHTMLElements } from 'svelte/elements'
  import { cn } from '$lib/utils'

  const { children, class: classes, ...rest }: SvelteHTMLElements['section'] = $props()
</script>

<section {...rest} class={cn('mx-auto grid max-w-[1920px] lg:box-content gap-8 px-5 py-10', classes)}>
  {@render children?.()}
</section>
