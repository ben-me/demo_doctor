<script lang='ts'>
  import type { HTMLButtonAttributes } from 'svelte/elements'
  import { cn } from '$lib/utils'

  const { children, class: className, ...rest }: HTMLButtonAttributes = $props()
</script>

<button {...rest} class={cn('rounded-sm px-4 py-2 ', className)}>
  {@render children?.()}
</button>
