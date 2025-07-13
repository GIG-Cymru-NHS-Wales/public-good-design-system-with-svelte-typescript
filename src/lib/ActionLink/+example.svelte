<script lang="ts">
  import ActionLink from '$lib/components/ActionLink.svelte';
</script>

<!-- Basic usage -->
<ActionLink
  text="Find your nearest A&E"
  href="#"
/>

<!-- With additional options -->
<ActionLink
  text="Book an appointment"
  href="/appointments"
  openInNewWindow={true}
  classes="custom-class"
  attributes={{
    'data-testid': 'appointment-link',
    'data-track': 'click'
  }}
/>

<!-- Using with SvelteKit's enhanced:load -->
<ActionLink
  text="Go to services"
  href="/services"
  attributes={{
    'data-sveltekit-preload-data': 'hover'
  }}
/>
