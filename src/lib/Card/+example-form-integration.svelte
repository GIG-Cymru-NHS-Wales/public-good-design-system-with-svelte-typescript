<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import { enhance } from '$app/forms';

  let selectedService = '';
  let isSubmitting = false;

  function handleServiceSelect(serviceId: string) {
    selectedService = serviceId;
  }

  function submitForm() {
    return async ({ result, update }) => {
      isSubmitting = false;
      if (result.type === 'success') {
        // Handle success
      }
      await update();
    };
  }
</script>

<form method="POST" use:enhance={submitForm}>
  <input type="hidden" name="selectedService" bind:value={selectedService} />

  <!-- Service selection cards -->
  <div class="service-selection">
    <Card
      heading="Book GP appointment"
      clickable={true}
      classes={selectedService === 'gp' ? 'selected' : ''}
      attributes={{ 'data-service': 'gp' }}
      on:click={() => handleServiceSelect('gp')}
    >
      {#snippet children()}
        <p>Schedule a routine appointment with your GP</p>
      {/snippet}
    </Card>

    <Card
      heading="Emergency consultation"
      type="urgent"
      clickable={true}
      classes={selectedService === 'emergency' ? 'selected' : ''}
      attributes={{ 'data-service': 'emergency' }}
      on:click={() => handleServiceSelect('emergency')}
    >
      {#snippet children()}
        <p>Urgent medical consultation required</p>
      {/snippet}
    </Card>
  </div>

  <button type="submit" disabled={!selectedService || isSubmitting}>
    {isSubmitting ? 'Booking...' : 'Book Appointment'}
  </button>
</form>
