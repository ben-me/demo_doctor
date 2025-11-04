<script lang='ts'>
  import Icon from '$lib/components/ui/Icon.svelte'
  import Section from '$lib/components/ui/Section.svelte'
</script>

<Section class='flex items-center py-10 sm:flex after:bg-gray-300 after:w-6/10 after:h-0.5 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2'>
  <article
    class='bg-primary shadow-sm/30 mx-auto max-w-[1200px] grow rounded-lg px-3 py-5 sm:px-10'
  >
    <h2 class='text-h3 my-[0_1rem] hyphens-auto font-bold sm:hyphens-none'>
      Praxis für Allgemeinmedizin
    </h2>
    <h3 class='text-h4 my-[0_0.5rem] font-semibold'>Informationen:</h3>
    <div class='grid gap-10 sm:grid-cols-2'>
      <div class='grid gap-1'>
        <h4 class='text-normal font-bold'>Sprechzeiten:</h4>
        <table>
          <caption class='sr-only'>Die Sprechzeiten je Wochentag</caption>
          <thead class='sr-only'>
            <tr class='font-semibold'>
              <th scope='col'>Tag</th>
              <th scope='col'>Uhrzeit</th>
            </tr>
          </thead>
          <tbody class='grid gap-3'>
            <tr>
              <th scope='row' class='font-normal'>Montag:</th>
              <td>08:00 - 14:00</td>
            </tr>
            <tr>
              <th scope='row' class='font-normal'>Dienstag:</th>
              <td>08:00 - 12:00 <br /> 13:00 - 16:00</td>
            </tr>
            <tr>
              <th scope='row' class='font-normal'>Mittwoch:</th>
              <td>08:00 - 14:00</td>
            </tr>
            <tr>
              <th scope='row' class='font-normal'>Donnerstag:</th>
              <td>08:00 - 12:00 <br /> 13:00 - 16:00</td>
            </tr>
            <tr>
              <th scope='row' class='font-normal'>Freitag:</th>
              <td>08:00 - 12:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class='flex flex-col'>
        <h4 class='text-normal mb-0.5 font-bold'>Addressdaten:</h4>
        <address class='my-[0_1.5rem] flex flex-col justify-around gap-6 not-italic'>
          <div>
            Allgemeinmedizinische Praxis Demo-Care <br />
            Musterstraße 23 <br />
            12345 Musterstadt <br />
          </div>

          <div class='text-normal/3'>
            <a href='tel:012345678901' class='text-blue-800 underline'>
              <Icon name='Phone' />
              0123 - 456 789 01
            </a>
            <br />
            <a href='mailto:kontakt@demo-care.de' class='text-blue-800 underline'>
              <Icon name='Mail' />
              kontakt@demo-care.de
            </a>
          </div>
        </address>
        <p class='text-normal/5'>Parkplätze befinden sich hinter der Praxis.</p>
      </div>
    </div>
  </article>
</Section>

<style>
tr {
display: flex;
justify-content: space-between;
}
</style>
