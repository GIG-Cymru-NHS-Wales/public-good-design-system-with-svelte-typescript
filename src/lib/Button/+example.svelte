<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { goto } from '$app/navigation';

  function handleButtonClick(event: CustomEvent<MouseEvent>) {
    console.log('Button clicked:', event.detail);
  }

  function handleFormSubmit() {
    console.log('Form submitted');
  }
</script>

<!-- Default button -->
<Button text="Save and continue" on:click={handleButtonClick} />

<!-- Disabled button -->
<Button text="Disabled button" disabled={true} />

<!-- Button as a link -->
<Button text="Link button" href="/next-page" />

<!-- Login button -->
<Button text="Continue" classes="nhsuk-button--login" />

<!-- Button with double-click prevention -->
<Button 
  text="Save and continue" 
  preventDoubleClick={true}
  on:click={handleButtonClick}
/>

<!-- Reverse button (for dark backgrounds) -->
<Button text="Log out" classes="nhsuk-button--reverse" href="/logout" />

<!-- Secondary button -->
<Button text="Find my location" classes="nhsuk-button--secondary" />

<!-- Secondary solid background button -->
<Button text="Find my location" classes="nhsuk-button--secondary-solid" />

<!-- Warning button -->
<Button text="Yes, delete this vaccine" classes="nhsuk-button--warning" />

<!-- Button with HTML content -->
<Button html="<strong>Save</strong> and continue" />

<!-- Custom button element -->
<Button 
  element="button" 
  text="Custom button" 
  type="button"
  name="custom"
  value="custom-value"
/>

<!-- Input button -->
<Button 
  element="input" 
  text="Submit form" 
  type="submit"
  name="submit-btn"
/>

<!-- Button with custom attributes -->
<Button 
  text="Track me"
  attributes={{
    'data-testid': 'track-button',
    'data-analytics': 'click',
    'aria-label': 'Track user location'
  }}
/>
*/

// Form integration examples
/*
<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { enhance } from '$app/forms';

  let formData = {
    name: '',
    email: ''
  };

  let isSubmitting = false;

  function handleSubmit() {
    isSubmitting = true;
    return async ({ result, update }) => {
      isSubmitting = false;
      await update();
    };
  }
</script>

<form method="POST" use:enhance={handleSubmit}>
  <input bind:value={formData.name} name="name" placeholder="Name" />
  <input bind:value={formData.email} name="email" placeholder="Email" />
  
  <!-- Primary submit button with double-click prevention -->
  <Button 
    text="Submit"
    type="submit"
    preventDoubleClick={true}
    disabled={isSubmitting}
  />
  
  <!-- Secondary cancel button -->
  <Button 
    text="Cancel"
    type="button"
    classes="nhsuk-button--secondary"
    on:click={() => goto('/cancel')}
  />
</form>
