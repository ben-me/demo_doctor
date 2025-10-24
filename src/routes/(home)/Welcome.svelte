<script lang='ts'>
  import type { IconName } from '$lib/components/ui/Icon.svelte'
  import PrincipleCard from '$lib/components/ui/PrincipleCard.svelte'
  import Section from '$lib/components/ui/Section.svelte'

  const PRINCIPLES: { title: string, icon: IconName, description: string }[] = [
    {
      title: 'Empathie',
      icon: 'HandHeart',
      description: 'Wir schenken jedem unserer Patienten ein offenes Ohr und volles Verständnis.',
    },
    {
      title: 'Geduld',
      icon: 'Clock',
      description: 'Erklären Sie in Ruhe ihr Anliegen. Wir nehmen uns für Sie Zeit.',
    },
    {
      title: 'Respekt',
      icon: 'Handshake',
      description: 'Respektvoller Umgang ist der Grundbaustein zwischen Arzt und Patient.',
    },
  ]
</script>

<Section class='gap-10'>
  <div class='m-auto'>
    <h2 class='my-[0_1rem] text-center font-bold'>Herzlich Willkommen!</h2>
    <p class='text-center'>
      ... auf der Homepage unserer internistischen Praxis für Kardiologie und Gastroenterologie. Auf
      unserer Homepage erhalten Sie einen Übersicht an Informationen zu unseren Leitsätzen und
      Überzeugungen, lernen das Praxisteam kennen und können sich einen Einblick in unseren
      medizinischen Leistungen verschaffen.
    </p>
  </div>

  <div>
    <h3 class='text-h5 my-[0_1rem] text-center font-semibold'>Die Prinzipien unserer Arbeit:</h3>
    <ul class='flex flex-col gap-4 md:flex-row'>
      {#each PRINCIPLES as principle (principle)}
        <li class='max-w-full grow'>
          <PrincipleCard
            iconName={principle.icon}
            title={principle.title}
            description={principle.description}
          />
        </li>
      {/each}
    </ul>
  </div>
</Section>
