<script lang="ts">
  import BackLink from '$lib/components/BackLink.svelte';
  import { goto } from '$app/navigation';

  function handleBackClick() {
    // Custom back navigation logic
    goto('/previous-page');
  }
</script>

<!-- Default usage (as link) -->
<BackLink />

<!-- Custom text -->
<BackLink text="Go back to services" />

<!-- Custom href -->
<BackLink 
  text="Back to homepage" 
  href="/" 
/>

<!-- As button with click handler -->
<BackLink 
  element="button" 
  text="Back"
  on:click={handleBackClick}
/>

<!-- With HTML content -->
<BackLink 
  html="<strong>Back</strong> to results"
  href="/results"
/>

<!-- Reverse style (for dark backgrounds) -->
<BackLink 
  classes="nhsuk-back-link--reverse"
  text="Back"
  href="/previous"
/>

<!-- With custom attributes -->
<BackLink 
  text="Back to form"
  href="/form"
  attributes={{
    'data-testid': 'back-button',
    'data-track': 'navigation'
  }}
/>

<!-- Using with SvelteKit navigation -->
<BackLink 
  text="Back to services"
  href="/services"
  attributes={{
    'data-sveltekit-preload-data': 'hover'
  }}
/>
*/

// Advanced usage with browser history
/*
<script lang="ts">
  import BackLink from '$lib/components/BackLink.svelte';
  import { browser } from '$app/environment';

  function handleHistoryBack() {
    if (browser && window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback if no history
      window.location.href = '/';
    }
  }
</script>

<BackLink 
  element="button"
  text="Back"
  on:click={handleHistoryBack}
/>
