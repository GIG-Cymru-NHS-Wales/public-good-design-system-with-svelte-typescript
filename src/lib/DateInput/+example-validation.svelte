
<script lang="ts">
  import DateInput from '$lib/components/DateInput.svelte';
  import { writable } from 'svelte/store';

  // Date validation store
  const dateValidationStore = writable({
    isValid: false,
    errors: [],
    formattedDate: null
  });

  let appointmentDate: DateValues = {};

  // Real-time date validation
  $: {
    const validation = validateDateInput(appointmentDate);
    dateValidationStore.set(validation);
  }

  function validateDateInput(dateValues: DateValues) {
    const errors: string[] = [];
    const { day, month, year } = dateValues;
    
    if (!day && !month && !year) {
      return { isValid: false, errors: [], formattedDate: null };
    }
    
    if (!day) errors.push('Day is required');
    if (!month) errors.push('Month is required');
    if (!year) errors.push('Year is required');
    
    if (errors.length > 0) {
      return { isValid: false, errors, formattedDate: null };
    }
    
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);
    
    if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
      errors.push('Day must be between 1 and 31');
    }
    
    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      errors.push('Month must be between 1 and 12');
    }
    
    if (isNaN(yearNum) || yearNum < 1900 || yearNum > new Date().getFullYear() + 10) {
      errors.push('Year must be between 1900 and ' + (new Date().getFullYear() + 10));
    }
    
    if (errors.length > 0) {
      return { isValid: false, errors, formattedDate: null };
    }
    
    // Check if it's a valid date
    const date = new Date(yearNum, monthNum - 1, dayNum);
    if (date.getDate() !== dayNum || date.getMonth() !== monthNum - 1 || date.getFullYear() !== yearNum) {
      errors.push('Please enter a valid date');
      return { isValid: false, errors, formattedDate: null };
    }
    
    // Check if it's not in the past (for appointments)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      errors.push('Appointment date cannot be in the past');
      return { isValid: false, errors, formattedDate: null };
    }
    
    return {
      isValid: true,
      errors: [],
      formattedDate: date.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
  }

  function handleAppointmentDateChange(event: CustomEvent) {
    console.log('Appointment date changed:', event.detail);
  }
</script>

<DateInput
  id="appointment-date"
  namePrefix="appointment"
  bind:values={appointmentDate}
  fieldset={{
    legend: {
      text: "When would you like your appointment?",
      classes: "nhsuk-fieldset__legend--m"
    }
  }}
  hint={{
    text: "For example, 15 6 2024"
  }}
  errorMessage={$dateValidationStore.errors.length > 0 ? {
    text: $dateValidationStore.errors.join('. ')
  } : undefined}
  formGroup={{
    classes: $dateValidationStore.errors.length > 0 ? "nhsuk-form-group--error" : ""
  }}
  items={[
    {
      name: 'day',
      classes: `nhsuk-input--width-2${$dateValidationStore.errors.length > 0 ? ' nhsuk-input--error' : ''}`,
      autocomplete: 'bday-day'
    },
    {
      name: 'month',
      classes: `nhsuk-input--width-2${$dateValidationStore.errors.length > 0 ? ' nhsuk-input--error' : ''}`,
      autocomplete: 'bday-month'
    },
    {
      name: 'year',
      classes: `nhsuk-input--width-4${$dateValidationStore.errors.length > 0 ? ' nhsuk-input--error' : ''}`,
      autocomplete: 'bday-year'
    }
  ]}
  on:change={handleAppointmentDateChange}
/>

{#if $dateValidationStore.isValid && $dateValidationStore.formattedDate}
  <div class="nhsuk-inset-text">
    <span class="nhsuk-u-visually-hidden">Information: </span>
    <p>Your appointment is scheduled for <strong>{$dateValidationStore.formattedDate}</strong></p>
  </div>
{/if}
