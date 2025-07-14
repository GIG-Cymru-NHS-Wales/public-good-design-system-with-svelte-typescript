<script lang="ts">
  import CharacterCount from '$lib/components/CharacterCount.svelte';
  import { enhance } from '$app/forms';

  let formData = {
    feedback: '',
    comments: '',
    details: ''
  };

  let errors: Record<string, string> = {};
  let isSubmitting = false;

  function handleSubmit() {
    return async ({ result, update }) => {
      isSubmitting = false;
      
      if (result.type === 'failure') {
        errors = result.data?.errors || {};
      } else {
        errors = {};
      }
      
      await update();
    };
  }

  // Client-side validation
  function validateForm() {
    const newErrors: Record<string, string> = {};
    
    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
    }
    
    if (formData.comments.length > 200) {
      newErrors.comments = 'Comments must be 200 characters or less';
    }
    
    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }
</script>

<form method="POST" use:enhance={handleSubmit} on:submit|preventDefault={() => {
  if (validateForm()) {
    isSubmitting = true;
  }
}}>
  <CharacterCount
    name="feedback"
    maxlength={500}
    bind:value={formData.feedback}
    label={{
      text: "Your feedback"
    }}
    hint={{
      text: "Tell us about your experience with our service"
    }}
    errorMessage={errors.feedback ? {
      text: errors.feedback
    } : undefined}
    formGroup={{
      classes: errors.feedback ? "nhsuk-form-group--error" : ""
    }}
  />

  <CharacterCount
    name="comments"
    maxwords={50}
    bind:value={formData.comments}
    label={{
      text: "Additional comments"
    }}
    errorMessage={errors.comments ? {
      text: errors.comments
    } : undefined}
    formGroup={{
      classes: errors.comments ? "nhsuk-form-group--error" : ""
    }}
  />

  <CharacterCount
    name="details"
    maxlength={1000}
    threshold={75}
    bind:value={formData.details}
    rows={6}
    label={{
      text: "Detailed description"
    }}
    hint={{
      text: "Provide as much detail as possible"
    }}
  />

  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
  </button>
</form>
