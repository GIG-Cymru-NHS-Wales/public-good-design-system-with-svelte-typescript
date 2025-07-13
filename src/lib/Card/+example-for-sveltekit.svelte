<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  // Dynamic cards based on route data
  export let data;

  $: services = data.services || [];

  function handleServiceClick(serviceId: string) {
    goto(`/services/${serviceId}`);
  }
</script>

<!-- Dynamic service cards -->
{#each services as service}
  <Card 
    href="/services/{service.id}"
    clickable={true}
    heading={service.name}
    headingClasses="nhsuk-heading-m"
    description={service.description}
    imgURL={service.imageUrl}
    imgALT={service.imageAlt}
    attributes={{
      'data-service-id': service.id,
      'data-sveltekit-preload-data': 'hover'
    }}
    on:click={() => handleServiceClick(service.id)}
  />
{/each}

<!-- Conditional emergency card based on user data -->
{#if data.user?.hasEmergencyContact}
  <Card 
    type="emergency"
    heading="Emergency contact on file"
    headingLevel={3}
  >
    {#snippet children()}
      <p>Your emergency contact: <strong>{data.user.emergencyContact.name}</strong></p>
      <p>Phone: <a href="tel:{data.user.emergencyContact.phone}">{data.user.emergencyContact.phone}</a></p>
    {/snippet}
  </Card>
{/if}
