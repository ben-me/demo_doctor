<script lang='ts'>
  import Erika from '$assets/erika.webp'
  import Laurie from '$assets/laurie.webp'
  import Lisa from '$assets/lisa.webp'
  import Monica from '$assets/monica.webp'
  import Trisha from '$assets/trisha.webp'
  import Valentina from '$assets/valentina.webp'
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

  const admin = { name: 'Lisa', description: 'Buchhaltung', img: Lisa }
</script>

<Section class='gap-4'>
  <h2>Das Praxisteam</h2>
  <h3 class='my-[0_0.5rem]'>Die Ärztinnen</h3>
  <ul class='grid grid-cols-[repeat(auto-fill,minmax(min(380px,100%),1fr))] gap-4'>
    {#each doctors as doctor (doctor)}
      <li>
        <TeamCard name={doctor.name} description={doctor.description} img={doctor.img} />
      </li>
    {/each}
  </ul>
  <h3 class='my-[0_0.5rem]'>Das medizinische Fachpersonal</h3>
  <ul class='grid grid-cols-[repeat(auto-fill,minmax(min(380px,100%),1fr))] gap-4'>
    {#each physician_assistants as assistant (assistant)}
      <li>
        <TeamCard name={assistant.name} description={assistant.description} img={assistant.img} />
      </li>
    {/each}
  </ul>
  <h3 class='my-[0_0.5rem]'>Die Verwaltung</h3>
  <TeamCard
    class='w-[min(380px,100%)]'
    name={admin.name}
    description={admin.description}
    img={admin.img}
  />
</Section>
