<script lang="ts">
  import Checkboxes from '$lib/components/Checkboxes.svelte';
  import { writable } from 'svelte/store';

  // Dynamic checkbox generation
  export let data;
  $: services = data.services || [];

  let selectedServices = [];

  // Generate dynamic items
  $: serviceItems = services.map(service => ({
    value: service.id,
    text: service.name,
    hint: service.description ? { text: service.description } : undefined,
    disabled: !service.available,
    conditional: service.requiresDetails ? {
      html: `
        <div class="nhsuk-form-group">
          <label class="nhsuk-label" for="details-${service.id}">Additional details for ${service.name}</label>
          <textarea class="nhsuk-textarea" id="details-${service.id}" name="details-${service.id}" rows="3"></textarea>
        </div>
      `
    } : undefined
  }));

  // Reactive validation
  $: isValid = selectedServices.length > 0;
  $: errorMessage = !isValid && selectedServices.length === 0 ?
    'Please select at least one service' : null;

  function handleServiceChange(event: CustomEvent) {
    console.log('Selected services:', event.detail.values);

    // Custom business logic
    if (event.detail.values.includes('premium') && event.detail.values.includes('basic')) {
      // Auto-remove basic if premium is selected
      selectedServices = event.detail.values.filter(v => v !== 'basic');
    } else {
      selectedServices = event.detail.values;
    }
  }
</script>

<Checkboxes
  name="services"
  bind:values={selectedServices}
  items={serviceItems}
  fieldset={{
    legend: {
      text: "Which services would you like?",
      classes: "nhsuk-fieldset__legend--m"
    }
  }}
  hint={{
    text: "Select all services that interest you"
  }}
  errorMessage={errorMessage ? { text: errorMessage } : undefined}
  on:change={handleServiceChange}
/>
