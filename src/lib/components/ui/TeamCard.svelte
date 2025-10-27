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
    'border-3 shadow-(--shadow-m) grid justify-items-center gap-4 rounded-lg border-gray-300 bg-white p-5 text-center',
  )}
  {...rest}
>
  <img src={img} alt={`Portrait von ${name}`} width='125' height='125' class='rounded-full' />
  <div class='mx-auto'>
    <h4 class='text-h5'>{name}</h4>
    <p class='opacity-70'>{description}</p>
  </div>
</article>
