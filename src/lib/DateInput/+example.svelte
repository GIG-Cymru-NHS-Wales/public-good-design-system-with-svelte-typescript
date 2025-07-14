<script lang="ts">
  import DateInput from '$lib/components/DateInput.svelte';
  import type { DateValues } from '$lib/types';

  let dobValues: DateValues = {};
  let startDateValues: DateValues = { month: '8', year: '2024' };
  let errorDateValues: DateValues = {};

  function handleDateChange(event: CustomEvent) {
    console.log('Date changed:', event.detail);
  }

  function handleDateInput(event: CustomEvent) {
    console.log('Date input:', event.detail);
  }
</script>

<!-- Basic date input -->
<DateInput
  id="dob"
  namePrefix="dob"
  bind:values={dobValues}
  fieldset={{
    legend: {
      text: "What is your date of birth?"
    }
  }}
  hint={{
    text: "For example, 31 3 1980"
  }}
  on:change={handleDateChange}
  on:input={handleDateInput}
/>

<!-- Date input with autocomplete attributes -->
<DateInput
  id="dob-with-autocomplete"
  namePrefix="dob-with-autocomplete"
  bind:values={dobValues}
  fieldset={{
    legend: {
      text: "What is your date of birth?"
    }
  }}
  hint={{
    text: "For example, 31 3 1980"
  }}
  items={[
    {
      name: 'day',
      classes: 'nhsuk-input--width-2',
      autocomplete: 'bday-day'
    },
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
/>

<!-- Date input with errors -->
<DateInput
  id="dob-error"
  namePrefix="dob-error"
  bind:values={errorDateValues}
  fieldset={{
    legend: {
      text: "What is your date of birth?"
    }
  }}
  hint={{
    text: "For example, 31 3 1980"
  }}
  errorMessage={{
    text: "Date of birth must include a day, month and year"
  }}
  formGroup={{
    classes: "nhsuk-form-group--error"
  }}
  items={[
    {
      name: 'day',
      classes: 'nhsuk-input--width-2 nhsuk-input--error'
    },
    {
      name: 'month',
      classes: 'nhsuk-input--width-2 nhsuk-input--error'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4 nhsuk-input--error'
    }
  ]}
/>

<!-- Month and year only -->
<DateInput
  id="start-date"
  namePrefix="start-date"
  bind:values={startDateValues}
  fieldset={{
    legend: {
      text: "When did you start your job?"
    }
  }}
  hint={{
    text: "For example, 11 2023"
  }}
  items={[
    {
      name: 'month',
      classes: 'nhsuk-input--width-2'
    },
    {
      name: 'year',
      classes: 'nhsuk-input--width-4'
    }
  ]}
/>

<!-- Date input with initial values -->
<DateInput
  id="preset-date"
  namePrefix="preset-date"
  values={{ day: '5', month: '8', year: '2024' }}
  fieldset={{
    legend: {
      text: "Confirm the date"
    }
  }}
  hint={{
    text: "Check the date is correct"
  }}
/>
