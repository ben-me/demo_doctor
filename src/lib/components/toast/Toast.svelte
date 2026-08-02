<script lang="ts">
  import type { Attachment } from 'svelte/attachments';
  import { fade, fly } from 'svelte/transition';
  import { toasts } from './toast.svelte';

  const portal: Attachment = (element) => {
    const target = document.querySelector('body');
    if (toasts.list.length > 0) {
      target?.appendChild(element);
    }

    return () => {
      element.parentNode?.removeChild(element);
    };
  };
</script>

<div {@attach portal} class="fixed bottom-0 right-3 flex flex-col">
  {#each toasts.list as toast (toast.id)}
    <button
      on:click={() => toasts.remove(toast.id)}
      class="mb-1 rounded bg-white p-3 shadow"
      in:fly={{ opacity: 0, x: 100 }}
      out:fade>{toast.message}</button
    >
  {/each}
</div>
