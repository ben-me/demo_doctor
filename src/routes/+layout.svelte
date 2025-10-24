<script lang='ts'>
  import favicon from '$assets/favicon.svg'
  import Footer from '$lib/Footer.svelte'
  import Header from '$lib/Header.svelte'
  import '$styles/app.css'

  const { children } = $props()
</script>

<svelte:head>
  <link rel='icon' href={favicon} />
</svelte:head>

<Header />
<main>
  <div
    class='bg-linear-to-t to-primary absolute inset-0 -z-10 h-[450px] from-white from-30% to-70%'
  ></div>
  {@render children?.()}
</main>
<Footer />
