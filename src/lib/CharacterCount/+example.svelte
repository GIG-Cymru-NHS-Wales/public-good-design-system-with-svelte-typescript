<script lang="ts">
  import CharacterCount from '$lib/components/CharacterCount.svelte';

  let feedbackText = '';
  let commentsText = '';
  let detailsText = 'Some initial content';

  function handleInput(event: CustomEvent<Event>) {
    console.log('Character count input:', event.detail);
  }

  function handleFocus(event: CustomEvent<FocusEvent>) {
    console.log('Character count focused');
  }
</script>

<!-- Basic character count -->
<CharacterCount
  name="more-detail"
  maxlength={10}
  bind:value={feedbackText}
  label={{
    text: "Can you provide more detail?"
  }}
  hint={{
    text: "Do not include personal information, like your name, date of birth or NHS number"
  }}
  on:input={handleInput}
  on:focus={handleFocus}
/>

<!-- Character count with default value -->
<CharacterCount
  name="feedback"
  id="feedback-field"
  maxlength={200}
  bind:value={detailsText}
  label={{
    text: "Tell us about your experience"
  }}
  hint={{
    text: "Include any relevant details about your visit"
  }}
/>

<!-- Word count example -->
<CharacterCount
  name="comments"
  maxwords={50}
  bind:value={commentsText}
  rows={8}
  label={{
    text: "Additional comments"
  }}
  hint={{
    text: "Provide any additional feedback in your own words"
  }}
/>

<!-- Character count with threshold -->
<CharacterCount
  name="description"
  maxlength={500}
  threshold={80}
  label={{
    text: "Description"
  }}
  hint={{
    text: "Provide a detailed description"
  }}
/>

<!-- Character count with error -->
<CharacterCount
  name="error-example"
  maxlength={50}
  label={{
    text: "Field with error"
  }}
  errorMessage={{
    text: "This field contains errors"
  }}
  formGroup={{
    classes: "nhsuk-form-group--error"
  }}
/>

<!-- Character count with custom styling -->
<CharacterCount
  name="custom"
  maxlength={300}
  classes="custom-textarea"
  label={{
    text: "Custom styled field",
    classes: "custom-label"
  }}
  countMessage={{
    classes: "custom-count"
  }}
  attributes={{
    'data-testid': 'custom-textarea',
    'placeholder': 'Enter your text here...'
  }}
/>

<!-- Character count with HTML label -->
<CharacterCount
  name="html-label"
  maxlength={100}
  label={{
    html: "<strong>Important:</strong> Please provide details"
  }}
  hint={{
    html: "Include <em>all</em> relevant information"
  }}
/>
