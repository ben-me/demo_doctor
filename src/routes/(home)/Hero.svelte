<script>
  import Section from '$lib/components/ui/Section.svelte'
</script>

<Section class='gap-15 py-2 md:grid-cols-2 md:py-10'>
  <div
    class='m-auto flex flex-col items-center justify-center gap-5 text-center md:items-start
      md:text-left'
  >
    <h2 class='text-h1 font-bold'>Ihre <br class='sm:hidden' /> Gesundheit liegt uns am Herzen</h2>
    <p>
      Als Allgemeinmediziner sind wir Ihre Anlaufstelle für Beschwerden und Vorsorgeuntersuchungen.
    </p>
    <a
      class='btn-primary'
      href='tel:+12345678901'
    >Termin vereinbaren
    </a>
  </div>
  <enhanced:img
    class='h-[400px] rounded-lg object-cover object-[50%_30%] shadow sm:object-[30%_10%] lg:h-[750px]'
    src='$assets/hero.png'
    sizes='(max-width: 768px) 768w, (max-width: 1024px) 1024w, (max-width: 1600px) 1600w,
      (max-width: 1920px) 1920w, 100vw'
    alt=""
  />
</Section>
