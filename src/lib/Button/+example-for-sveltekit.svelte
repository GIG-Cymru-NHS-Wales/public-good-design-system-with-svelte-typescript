<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { page } from '$app/stores';
  import { goto, invalidateAll } from '$app/navigation';

  async function handleRefresh() {
    await invalidateAll();
  }

  function handleNavigation(path: string) {
    goto(path);
  }
</script>

<!-- Navigation buttons -->
<Button 
  text="Go Home"
  href="/"
  attributes={{
    'data-sveltekit-preload-data': 'hover',
    'data-sveltekit-preload-code': 'hover'
  }}
/>

<!-- Programmatic navigation -->
<Button 
  text="Navigate"
  type="button"
  on:click={() => handleNavigation('/dashboard')}
/>

<!-- Refresh data -->
<Button 
  text="Refresh"
  type="button"
  classes="nhsuk-button--secondary"
  on:click={handleRefresh}
/>

<!-- Conditional button based on route -->
{#if $page.route.id === '/admin'}
  <Button 
    text="Admin Actions"
    classes="nhsuk-button--warning"
    href="/admin/actions"
  />
{/if}
