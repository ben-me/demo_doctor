<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte';
  import Section from '$lib/components/ui/Section.svelte';
</script>

<Section
  class="after:w-6/10 relative flex items-center py-10 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:bg-gray-300 sm:flex"
>
  <article class="bg-primary mx-auto max-w-[1200px] grow rounded-lg px-3 py-5 shadow-lg sm:px-10">
    <h2 class="text-h3 my-[0_1rem] hyphens-auto font-bold sm:hyphens-none">
      Praxis für Allgemeinmedizin
    </h2>
    <h3 class="text-h4 my-[0_0.5rem] font-semibold">Informationen:</h3>
    <div class="grid gap-10 sm:grid-cols-2">
      <div class="grid gap-1">
        <h4 class="text-normal font-bold">Sprechzeiten:</h4>
        <table>
          <caption class="sr-only">Die Sprechzeiten je Wochentag</caption>
          <thead class="sr-only">
            <tr class="font-semibold">
              <th scope="col">Tag</th>
              <th scope="col">Uhrzeit</th>
            </tr>
          </thead>
          <tbody class="grid gap-3">
            <tr>
              <th scope="row" class="font-normal">Montag:</th>
              <td>08:00 - 14:00</td>
            </tr>
            <tr>
              <th scope="row" class="font-normal">Dienstag:</th>
              <td>08:00 - 12:00 <br /> 13:00 - 16:00</td>
            </tr>
            <tr>
              <th scope="row" class="font-normal">Mittwoch:</th>
              <td>08:00 - 14:00</td>
            </tr>
            <tr>
              <th scope="row" class="font-normal">Donnerstag:</th>
              <td>08:00 - 12:00 <br /> 13:00 - 16:00</td>
            </tr>
            <tr>
              <th scope="row" class="font-normal">Freitag:</th>
              <td>08:00 - 12:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col">
        <h4 class="text-normal mb-0.5 font-bold">Addressdaten:</h4>
        <address class="my-[0_1.5rem] flex flex-col justify-around gap-6 not-italic">
          <div>
            Allgemeinmedizinische Praxis Demo-Care <br />
            Musterstraße 23 <br />
            12345 Musterstadt <br />
          </div>

          <div class="text-normal/3 grid gap-1">
            <a href="tel:012345678901">
              <Icon name="Phone" class="stroke-black" />
              <span class="text-blue-800 underline">0123 - 456 789 01</span>
            </a>
            <br />
            <a href="mailto:kontakt@demo-care.de">
              <Icon name="Mail" />
              <span class="text-blue-800 underline">kontakt@demo-care.de</span>
            </a>
          </div>
        </address>
        <p class="text-normal/5 my-[auto_0]">Parkplätze befinden sich hinter der Praxis.</p>
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
