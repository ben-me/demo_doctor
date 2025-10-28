<script lang='ts'>
  import type { SvelteHTMLElements } from 'svelte/elements'
  import type { ClassValue } from 'tailwind-variants'
  import { cn } from '$lib/utils'

  type Props = {
    img: string
    name: string
    description: string
    class?: ClassValue
  } & SvelteHTMLElements['article']

  const { img, name, class: classes, description, ...rest }: Props = $props()
</script>

<article
  class={cn(
    classes,
    'shadow-xl grid grid-cols-1 xs:grid-cols-[auto_1fr] max-w-[300px] xs:max-w-full lg:rounded-l-[200px] overflow-clip gap-2 xs:rounded-l-[100px] rounded-3xl  bg-white',
  )}
  {...rest}
>
  <img src={img} alt={`Portrait von ${name}`} class='xs:rounded-full max-w-[300px] xs:max-w-[150px] aspect-square sm:max-w-[200px] w-full' width='350' height='350' />
  <div class='py-2 px-3 grid grid-rows-[33%_66%] gap-2'>
    <h4 class='text-sm font-semibold content-end'>{name}</h4>
    <p class='opacity-70 text-xs overflow-y-scroll overflow-x-hidden hyphens-auto'>{description}</p>

  </div>
</article>
