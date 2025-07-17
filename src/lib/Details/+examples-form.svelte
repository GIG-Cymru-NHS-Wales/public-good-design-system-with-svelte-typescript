<script lang="ts">
  import Details from '$lib/components/Details.svelte';
  import { enhance } from '$app/forms';

  let formData = {
    needsHelp: false,
    helpDetails: ''
  };

  function handleSubmit() {
    return async ({ result, update }) => {
      // Handle form submission
      await update();
    };
  }

  function handleHelpToggle(event: CustomEvent) {
    formData.needsHelp = event.detail.open;
    if (!event.detail.open) {
      formData.helpDetails = '';
    }
  }
</script>

<form method="POST" use:enhance={handleSubmit}>
  <Details
    summaryText="Do you need additional help?"
    bind:open={formData.needsHelp}
    on:toggle={handleHelpToggle}
  >
    {#snippet children()}
      <div class="nhsuk-form-group">
        <label class="nhsuk-label" for="help-details">
          Please describe what help you need
        </label>
        <textarea
          class="nhsuk-textarea"
          id="help-details"
          name="help-details"
          rows="4"
          bind:value={formData.helpDetails}
        ></textarea>
      </div>
    {/snippet}
  </Details>

  <button type="submit" class="nhsuk-button">
    Submit
  </button>
</form>