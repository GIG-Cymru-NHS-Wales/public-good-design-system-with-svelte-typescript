<script lang="ts">
  import Checkboxes from '$lib/components/Checkboxes.svelte';
  import type { CheckboxItem } from '$lib/types';

  let nationalityValues = ['british'];
  let contactValues = [];
  let wasteValues = [];

  function handleNationalityChange(event: CustomEvent) {
    console.log('Nationality changed:', event.detail);
  }

  function handleContactChange(event: CustomEvent) {
    console.log('Contact preferences changed:', event.detail);
  }

  // Basic nationality checkboxes
  const nationalityItems: CheckboxItem[] = [
    { value: 'british', text: 'British' },
    { value: 'irish', text: 'Irish' },
    { value: 'other', text: 'citizen of another country' }
  ];

  // Contact preferences with conditional content
  const contactItems: CheckboxItem[] = [
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: `
          <div class="nhsuk-form-group">
            <label class="nhsuk-label" for="email">Email address</label>
            <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email" name="email" type="email">
          </div>
        `
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      conditional: {
        html: `
          <div class="nhsuk-form-group">
            <label class="nhsuk-label" for="phone">Phone number</label>
            <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone" name="phone" type="tel">
          </div>
        `
      }
    },
    {
      value: 'text',
      text: 'Text message',
      conditional: {
        html: `
          <div class="nhsuk-form-group">
            <label class="nhsuk-label" for="mobile">Mobile phone number</label>
            <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel">
          </div>
        `
      }
    }
  ];

  // Waste transport options
  const wasteItems: CheckboxItem[] = [
    { value: 'animal', text: 'Waste from animal carcasses' },
    { value: 'mines', text: 'Waste from mines or quarries' },
    { value: 'farm', text: 'Farm or agricultural waste' }
  ];
</script>

<!-- Basic checkboxes -->
<Checkboxes
  idPrefix="nationality"
  name="nationality"
  items={nationalityItems}
  bind:values={nationalityValues}
  fieldset={{
    legend: {
      text: "What is your nationality?",
      classes: "nhsuk-fieldset__legend--m"
    }
  }}
  hint={{
    text: "If you have more than 1 nationality, select all options that are relevant to you"
  }}
  on:change={handleNationalityChange}
/>

<!-- Checkboxes with conditional content -->
<Checkboxes
  idPrefix="contact"
  name="contact"
  items={contactItems}
  bind:values={contactValues}
  fieldset={{
    legend: {
      text: "How would you prefer to be contacted?",
      classes: "nhsuk-fieldset__legend--l",
      isPageHeading: true
    }
  }}
  hint={{
    text: "Select all options that are relevant to you"
  }}
  on:change={handleContactChange}
/>

<!-- Checkboxes with error message -->
<Checkboxes
  name="waste"
  items={wasteItems}
  bind:values={wasteValues}
  fieldset={{
    legend: {
      text: "Which types of waste do you transport regularly?",
      classes: "nhsuk-fieldset__legend--m"
    }
  }}
  errorMessage={{
    text: "Please select an option"
  }}
  formGroup={{
    classes: "nhsuk-form-group--error"
  }}
/>

<!-- Checkboxes with hint text -->
<Checkboxes
  name="signin"
  items={[
    {
      value: 'gov-gateway',
      text: 'Sign in with Government Gateway',
      hint: {
        text: "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before"
      }
    },
    {
      value: 'nhsuk-verify',
      text: 'Sign in with NHS.UK login',
      hint: {
        text: "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity"
      }
    }
  ]}
  fieldset={{
    legend: {
      text: "How do you want to sign in?",
      classes: "nhsuk-fieldset__legend--m",
      isPageHeading: true
    }
  }}
/>

<!-- Checkboxes with disabled item -->
<Checkboxes
  name="colours"
  items={[
    { value: 'red', text: 'Red' },
    { value: 'green', text: 'Green' },
    { value: 'blue', text: 'Blue', disabled: true }
  ]}
/>

<!-- Checkboxes with "none of the above" exclusive option -->
<Checkboxes
  idPrefix="communication"
  name="communication"
  items={[
    {
      value: 'email',
      text: 'Email',
      exclusiveGroup: 'communication-preferences',
      conditional: {
        html: `
          <div class="nhsuk-form-group">
            <label class="nhsuk-label" for="email-addr">Email address</label>
            <input class="nhsuk-input nhsuk-u-width-two-thirds" id="email-addr" name="email-addr" type="email">
          </div>
        `
      }
    },
    {
      value: 'phone',
      text: 'Phone',
      exclusiveGroup: 'communication-preferences',
      conditional: {
        html: `
          <div class="nhsuk-form-group">
            <label class="nhsuk-label" for="phone-num">Phone number</label>
            <input class="nhsuk-input nhsuk-u-width-two-thirds" id="phone-num" name="phone-num" type="tel">
          </div>
        `
      }
    },
    {
      value: 'text',
      text: 'Text message',
      exclusiveGroup: 'communication-preferences',
      conditional: {
        html: `
          <div class="nhsuk-form-group">
            <label class="nhsuk-label" for="mobile-num">Mobile phone number</label>
            <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile-num" name="mobile-num" type="tel">
          </div>
        `
      }
    },
    {
      divider: 'or'
    },
    {
      value: 'none',
      text: 'None of the above',
      exclusive: true,
      exclusiveGroup: 'communication-preferences'
    }
  ]}
  fieldset={{
    legend: {
      text: "How would you prefer to be contacted?",
      classes: "nhsuk-fieldset__legend--l",
      isPageHeading: true
    }
  }}
  hint={{
    text: "Select all options that are relevant to you"
  }}
/>
