<script>
  import { toasts } from '$lib/components/toast/toast.svelte';
  import Icon from '$lib/components/ui/Icon.svelte';
  import Section from '$lib/components/ui/Section.svelte';
</script>

<Section class="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
  <h2 class="font-bold lg:col-span-2">Kontaktiere uns</h2>
  <div class="flex flex-col gap-6">
    <p>Für Fragen, Anliegen oder Termine können Sie uns über zahlreiche Wege erreichen.</p>
    <div class="grid gap-4">
      <a
        href="mailto:kontakt@demo-care.de"
        class="flex items-center gap-2 rounded-md border bg-white px-4 py-2 shadow"
      >
        <Icon name="Mail" class="p fill-primary size-10 rounded-md" />
        <div>
          <span class="text-normal font-semibold">Mailen Sie uns:</span><br />
          <span class="opacity-75"> kontakt@demo-care.de </span>
        </div>
        <Icon name="Open" class="mx-[auto_0] size-10" />
      </a>
      <a
        href="tel:0123 456 789 01"
        class="flex items-center gap-2 rounded-md border bg-white px-4
          py-2 shadow"
      >
        <Icon name="Phone" class="p stroke-primary size-10 rounded-md" />
        <div>
          <span class="text-normal font-semibold">Rufen Sie an:</span><br />
          <span class="opacity-75"> 0123 456 789 01 </span>
        </div>
        <Icon name="Open" class="mx-[auto_0] size-10" />
      </a>
      <p>...oder nutzen Sie unser Kontaktformular!</p>
    </div>
  </div>
  <div>
    <h3 class="mb-4">Kontaktformular</h3>
    <form class="grid gap-4 sm:grid-cols-2" action="">
      <label>
        Vorname:
        <input type="text" name="name" class="input" placeholder="Erika" required />
      </label>
      <label>
        Nachname:
        <input type="text" name="name" class="input" placeholder="Mustermann" required />
      </label>
      <label>
        Email:
        <input type="email" name="name" class="input" placeholder="max@Mustermann.de" required />
      </label>
      <label>
        Telefon:
        <input type="tel" name="name" class="input" placeholder="+4912345678902" required />
      </label>
      <label class="sm:col-span-2">
        Ihre Nachricht:
        <textarea name="message" class="input" rows="5" required></textarea>
      </label>
      <button
        class="btn-primary max-w-max justify-self-end sm:col-span-2"
        type="button"
        on:click={() => toasts.send('success', 'Erfolgreich versandt')}>Nachricht absenden</button
      >
    </form>
  </div>
</Section>
