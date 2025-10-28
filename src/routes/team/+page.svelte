<script lang='ts'>
  import Erika from '$assets/Erika.webp'
  import Laurie from '$assets/Laurie.webp'
  import Lisa from '$assets/Lisa.webp'
  import Monica from '$assets/Monica.webp'
  import Trisha from '$assets/Trisha.webp'
  import Valentina from '$assets/Valentina.webp'
  import Section from '$lib/components/ui/Section.svelte'
  import TeamCard from '$lib/components/ui/TeamCard.svelte'

  const doctors = [
    { name: 'Dr. Erika Mesori', description: 'Fachärztin für Allgemeinmedizin', img: Erika },
    { name: 'Dr. Monica Eicherts', description: 'Fachärztin für Allgemeinmedizin', img: Monica },
  ]

  const physician_assistants = [
    {
      name: 'Valentina',
      description: 'Medizinische Fachangestellte',
      img: Valentina,
    },
    {
      name: 'Trisha',
      description: 'Leitende medizinische Fachangestellte',
      img: Trisha,
    },
    {
      name: 'Laurie',
      description: 'Medizinische Fachangestellte',
      img: Laurie,
    },
  ]

  const admins = [{ name: 'Lisa', description: 'Administration', img: Lisa }]
</script>

<Section class='gap-4'>
  <h2>Das Praxisteam</h2>
  <h3 class='my-[0_0.5rem]'>Die Ärztinnen</h3>
  <ul class='gap-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mb-4'>
    {#each doctors as doctor (doctor)}
      <li class='max-w-full w-full'>
        <TeamCard name={doctor.name} description={doctor.description} img={doctor.img} />
      </li>
    {/each}
  </ul>
  <h3 class='my-[0_0.5rem]'>Das medizinische Fachpersonal</h3>
  <ul class='gap-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mb-4'>
    {#each physician_assistants as assistant (assistant)}
      <li class='max-w-full w-full justify-self-stretch'>
        <TeamCard name={assistant.name} description={assistant.description} img={assistant.img} />
      </li>
    {/each}
  </ul>
  <h3 class='my-[0_0.5rem]'>Die Verwaltung</h3>
  <ul class='gap-8 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mb-4'>
    {#each admins as admin (admin)}
      <li class='max-w-full w-full'>
        <TeamCard
          name={admin.name}
          description={admin.description}
          img={admin.img}
        />
      </li>
    {/each}

  </ul>
</Section>
