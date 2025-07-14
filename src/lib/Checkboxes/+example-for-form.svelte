
<script lang="ts">
  import Checkboxes from '$lib/components/Checkboxes.svelte';
  import { enhance } from '$app/forms';

  let formData = {
    interests: [],
    contact: [],
    preferences: []
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
    
    if (formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one interest';
    }
    
    if (formData.contact.length === 0) {
      newErrors.contact = 'Please select how you would like to be contacted';
    }
    
    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  function handleInterestsChange(event: CustomEvent) {
    formData.interests = event.detail.values;
  }

  function handleContactChange(event: CustomEvent) {
    formData.contact = event.detail.values;
  }
</script>

<form method="POST" use:enhance={handleSubmit} on:submit|preventDefault={() => {
  if (validateForm()) {
    isSubmitting = true;
  }
}}>
  <Checkboxes
    name="interests"
    bind:values={formData.interests}
    fieldset={{
      legend: {
        text: "What are your interests?",
        classes: "nhsuk-fieldset__legend--m"
      }
    }}
    items={[
      { value: 'health', text: 'Health and wellbeing' },
      { value: 'fitness', text: 'Fitness and exercise' },
      { value: 'nutrition', text: 'Nutrition and diet' },
      { value: 'mental-health', text: 'Mental health support' }
    ]}
    errorMessage={errors.interests ? {
      text: errors.interests
    } : undefined}
    formGroup={{
      classes: errors.interests ? "nhsuk-form-group--error" : ""
    }}
    on:change={handleInterestsChange}
  />

  <Checkboxes
    name="contact-method"
    bind:values={formData.contact}
    fieldset={{
      legend: {
        text: "How would you like us to contact you?",
        classes: "nhsuk-fieldset__legend--m"
      }
    }}
    items={[
      {
        value: 'email',
        text: 'Email',
        conditional: {
          html: `
            <div class="nhsuk-form-group">
              <label class="nhsuk-label" for="contact-email">Email address</label>
              <input class="nhsuk-input" id="contact-email" name="contact-email" type="email">
            </div>
          `
        }
      },
      {
        value: 'sms',
        text: 'Text message',
        conditional: {
          html: `
            <div class="nhsuk-form-group">
              <label class="nhsuk-label" for="contact-mobile">Mobile number</label>
              <input class="nhsuk-input" id="contact-mobile" name="contact-mobile" type="tel">
            </div>
          `
        }
      },
      {
        value: 'post',
        text: 'Post'
      }
    ]}
    errorMessage={errors.contact ? {
      text: errors.contact
    } : undefined}
    formGroup={{
      classes: errors.contact ? "nhsuk-form-group--error" : ""
    }}
    on:change={handleContactChange}
  />

  <button type="submit" class="nhsuk-button" disabled={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit Form'}
  </button>
</form>
