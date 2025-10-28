<script lang='ts'>
  import favicon from '$assets/favicon.svg'
  import Footer from '$lib/Footer.svelte'
  import Header from '$lib/Header.svelte'
  import '$styles/app.css'

  const { children } = $props()

  import { onNavigate } from '$app/navigation'

  onNavigate((navigation) => {
    if (!document.startViewTransition)
      return

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>

<svelte:head>
  <link rel='icon' href={favicon} />
</svelte:head>

<Header />
<main>
  <div
    class='bg-linear-to-t to-primary absolute inset-0 -z-10 h-[450px] from-background from-30% to-70%'
  ></div>
  {@render children?.()}
</main>
<Footer />

<style>
@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

@keyframes slide-from-right {
  from {
    transform: translateX(30px);
  }
}

@keyframes slide-to-left {
  to {
    transform: translateX(-30px);
  }
}

:main::view-transition-old(root) {
  animation:
    90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
    300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
}

:main::view-transition-new(root) {
  animation:
    210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
    300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
}
</style>
