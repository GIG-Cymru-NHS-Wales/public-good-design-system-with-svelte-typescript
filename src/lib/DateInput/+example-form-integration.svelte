
<script lang="ts">
  import DateInput from '$lib/components/DateInput.svelte';
  import { enhance } from '$app/forms';
  import type { DateValues } from '$lib/types';

  let formData = {
    dateOfBirth: {} as DateValues,
    startDate: {} as DateValues,
    endDate: {} as DateValues
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
    
    if (!isValidDate(formData.dateOfBirth)) {
      newErrors.dateOfBirth = 'Please enter a valid date of birth';
    }
    
    if (!isValidDate(formData.startDate)) {
      newErrors.startDate = 'Please enter a valid start date';
    }
    
    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  function isValidDate(dateValues: DateValues): boolean {
    const { day, month, year } = dateValues;
    
    if (!day || !month || !year) return false;
    
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);
    
    if (dayNum < 1 || dayNum > 31) return false;
    if (monthNum < 1 || monthNum > 12) return false;
    if (yearNum < 1900 || yearNum > new Date().getFullYear()) return false;
    
    return true;
  }

  function handleDateOfBirthChange(event: CustomEvent) {
    formData.dateOfBirth = event.detail.values;
  }

  function handleStartDateChange(event: CustomEvent) {
    formData.startDate = event.detail.values;
  }
</script>

<form method="POST" use:enhance={handleSubmit} on:submit|preventDefault={() => {
  if (validateForm()) {
    isSubmitting = true;
  }
}}>
  <DateInput
    id="date-of-birth"
    namePrefix="dateOfBirth"
    bind:values={formData.dateOfBirth}
    fieldset={{
      legend: {
        text: "What is your date of birth?",
        classes: "nhsuk-fieldset__legend--m"
      }
    }}
    hint={{
      text: "For example, 31 3 1980"
    }}
    errorMessage={errors.dateOfBirth ? {
      text: errors.dateOfBirth
    } : undefined}
    formGroup={{
      classes: errors.dateOfBirth ? "nhsuk-form-group--error" : ""
    }}
    on:change={handleDateOfBirthChange}
  />

  <DateInput
    id="start-date"
    namePrefix="startDate"
    bind:values={formData.startDate}
    fieldset={{
      legend: {
        text: "When did you start this job?",
        classes: "nhsuk-fieldset__legend--m"
      }
    }}
    hint={{
      text: "For example, 11 2023"
    }}
    errorMessage={errors.startDate ? {
      text: errors.startDate
    } : undefined}
    formGroup={{
      classes: errors.startDate ? "nhsuk-form-group--error" : ""
    }}
    items={[
      {
        name: 'month',
        classes: 'nhsuk-input--width-2',
        autocomplete: 'bday-month'
      },
      {
        name: 'year',
        classes: 'nhsuk-input--width-4',
        autocomplete: 'bday-year'
      }
    ]}
    on:change={handleStartDateChange}
  />

  <button type="submit" class="nhsuk-button" disabled={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </button>
</form>
