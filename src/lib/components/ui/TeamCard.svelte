<script lang='ts'>
  import type { SvelteHTMLElements } from 'svelte/elements'
  import type { ClassValue } from 'tailwind-variants'
  import { cn, getRandomNumber } from '$lib/utils'

  type Props = {
    img: string
    name: string
    description: string
    class?: ClassValue
  } & SvelteHTMLElements['article']

  const { img, name, class: classes, description, ...rest }: Props = $props()

  const background_shape = {
    width: getRandomNumber(80, 250),
    height: getRandomNumber(80, 250),
    x: getRandomNumber(25, 80),
    y: getRandomNumber(0, 70),
    skew: getRandomNumber(0, 20),
    radius: getRandomNumber(0, 50),
  }
</script>

<article
  class={cn(
    classes,
    'bg-white starting:opacity-0 relative starting:translate-y-9 transition-all duration-550 opacity-100 translate-y-0 shadow-xl grid grid-cols-1 xs:grid-cols-[auto_1fr] max-w-[300px] xs:max-w-full lg:rounded-l-[200px] overflow-clip gap-2 xs:rounded-l-[100px] rounded-3xl',
  )}
  {...rest}
>
  <div style='--shape-width: {background_shape.width}px; --shape-skew: {background_shape.skew}deg; --shape-height: {background_shape.height}px; --shape-x: {background_shape.x}%; --shape-y: {background_shape.y}%; --shape-radius: {background_shape.radius}%' class='absolute  bg-secondary/10 skew-(--shape-skew) -z-1 w-(--shape-width) h-(--shape-height) top-(--shape-y) left-(--shape-x) rounded-(--shape-radius)'></div>
  <img src={img} alt={`Portrait von ${name}`} class='xs:rounded-full max-w-[300px] xs:max-w-[150px] aspect-square sm:max-w-[200px] w-full' width='350' height='350' />
  <div class='py-2 px-3 grid grid-rows-[33%_66%] gap-2'>
    <h4 class='text-sm font-semibold content-end'>{name}</h4>
    <p class='opacity-70 text-xs overflow-y-scroll overflow-x-hidden hyphens-auto'>{description}</p>

  </div>
</article>
