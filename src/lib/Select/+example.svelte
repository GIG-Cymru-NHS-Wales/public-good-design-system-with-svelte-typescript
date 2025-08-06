<script lang="ts">
  import Select from './Select.svelte';

  let sortValue = $state('updated');
  let locationValue = $state('choose');
  let locationErrorValue = $state('choose');
  let titleValue = $state('');
  let countryValue = $state('');
  let disabledValue = $state('option1');
  let customValue = $state('');
  let noLabelValue = $state('');
  let multipleValues = $state({
    day: '',
    month: '',
    year: ''
  });
</script>

<div class="example-container">
  <h2>Select Examples</h2>
  
  <section class="example">
    <h3>Default Select</h3>
    <Select
      bind:value={sortValue}
      id="sort"
      name="sort"
      label={{
        text: 'Sort by'
      }}
      items={[
        {
          value: 'published',
          text: 'Recently published'
        },
        {
          value: 'updated',
          text: 'Recently updated'
        },
        {
          value: 'views',
          text: 'Most views'
        },
        {
          value: 'comments',
          text: 'Most comments'
        }
      ]}
    />
    <p class="value-display">Selected value: "{sortValue}"</p>
  </section>

  <section class="example">
    <h3>Select with Disabled Option</h3>
    <Select
      bind:value={disabledValue}
      id="sort-disabled"
      name="sort-disabled"
      label={{
        text: 'Sort by'
      }}
      items={[
        {
          value: 'published',
          text: 'Recently published'
        },
        {
          value: 'updated',
          text: 'Recently updated'
        },
        {
          value: 'views',
          text: 'Most views'
        },
        {
          value: 'comments',
          text: 'Most comments',
          disabled: true
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Select with Hint Text</h3>
    <Select
      bind:value={locationValue}
      id="location"
      name="location"
      label={{
        text: 'Choose location'
      }}
      hint={{
        text: 'This can be different to where you went before'
      }}
      items={[
        {
          value: 'choose',
          text: 'Choose location'
        },
        {
          value: 'eastmidlands',
          text: 'East Midlands'
        },
        {
          value: 'eastofengland',
          text: 'East of England'
        },
        {
          value: 'london',
          text: 'London'
        },
        {
          value: 'northeast',
          text: 'North East'
        },
        {
          value: 'northwest',
          text: 'North West'
        },
        {
          value: 'southeast',
          text: 'South East'
        },
        {
          value: 'southwest',
          text: 'South West'
        },
        {
          value: 'westmidlands',
          text: 'West Midlands'
        },
        {
          value: 'yorkshire',
          text: 'Yorkshire and the Humber'
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Select with Error Message</h3>
    <Select
      bind:value={locationErrorValue}
      id="location-error"
      name="location-error"
      label={{
        text: 'Choose location'
      }}
      hint={{
        text: 'This can be different to where you went before'
      }}
      errorMessage={{
        text: 'Select a location'
      }}
      items={[
        {
          value: 'choose',
          text: 'Choose location'
        },
        {
          value: 'eastmidlands',
          text: 'East Midlands'
        },
        {
          value: 'eastofengland',
          text: 'East of England'
        },
        {
          value: 'london',
          text: 'London'
        },
        {
          value: 'northeast',
          text: 'North East'
        },
        {
          value: 'northwest',
          text: 'North West'
        },
        {
          value: 'southeast',
          text: 'South East'
        },
        {
          value: 'southwest',
          text: 'South West'
        },
        {
          value: 'westmidlands',
          text: 'West Midlands'
        },
        {
          value: 'yorkshire',
          text: 'Yorkshire and the Humber'
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Select with Options Without Values</h3>
    <Select
      bind:value={titleValue}
      name="title"
      label={{
        text: 'Title'
      }}
      items={[
        {
          text: '- Select -'
        },
        {
          text: 'Mr'
        },
        {
          text: 'Mrs'
        },
        {
          text: 'Miss'
        },
        {
          text: 'Ms'
        },
        {
          text: 'Dr'
        },
        {
          text: 'Prof'
        }
      ]}
    />
    <p class="value-display">Selected value: "{titleValue}"</p>
  </section>

  <section class="example">
    <h3>Disabled Select</h3>
    <Select
      name="disabled-select"
      disabled={true}
      label={{
        text: 'This select is disabled'
      }}
      items={[
        {
          value: 'option1',
          text: 'Option 1'
        },
        {
          value: 'option2',
          text: 'Option 2'
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Select with Custom Classes and Attributes</h3>
    <Select
      bind:value={customValue}
      name="custom-select"
      label={{
        text: 'Custom select'
      }}
      classes="custom-select-class"
      attributes={{
        'data-test': 'select-component',
        'data-module': 'nhsuk-select'
      }}
      items={[
        {
          value: 'option1',
          text: 'Option 1',
          attributes: {
            'data-info': 'first-option'
          }
        },
        {
          value: 'option2',
          text: 'Option 2',
          attributes: {
            'data-info': 'second-option'
          }
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Select without Label</h3>
    <Select
      bind:value={noLabelValue}
      name="no-label-select"
      items={[
        {
          value: 'option1',
          text: 'Option 1'
        },
        {
          value: 'option2',
          text: 'Option 2'
        },
        {
          value: 'option3',
          text: 'Option 3'
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Multiple Selects in a Form</h3>
    <form>
      <h4>Date of birth</h4>
      <div class="date-inputs">
        <Select
          bind:value={multipleValues.day}
          name="dob-day"
          label={{
            text: 'Day'
          }}
          items={[
            { value: '', text: 'Day' },
            ...Array.from({length: 31}, (_, i) => ({
              value: String(i + 1).padStart(2, '0'),
              text: String(i + 1)
            }))
          ]}
        />
        
        <Select
          bind:value={multipleValues.month}
          name="dob-month"
          label={{
            text: 'Month'
          }}
          items={[
            { value: '', text: 'Month' },
            { value: '01', text: 'January' },
            { value: '02', text: 'February' },
            { value: '03', text: 'March' },
            { value: '04', text: 'April' },
            { value: '05', text: 'May' },
            { value: '06', text: 'June' },
            { value: '07', text: 'July' },
            { value: '08', text: 'August' },
            { value: '09', text: 'September' },
            { value: '10', text: 'October' },
            { value: '11', text: 'November' },
            { value: '12', text: 'December' }
          ]}
        />
        
        <Select
          bind:value={multipleValues.year}
          name="dob-year"
          label={{
            text: 'Year'
          }}
          items={[
            { value: '', text: 'Year' },
            ...Array.from({length: 100}, (_, i) => ({
              value: String(2024 - i),
              text: String(2024 - i)
            }))
          ]}
        />
      </div>
      <p class="value-display">Selected date: {multipleValues.day}/{multipleValues.month}/{multipleValues.year}</p>
    </form>
  </section>

  <section class="example">
    <h3>Select with Country List</h3>
    <Select
      bind:value={countryValue}
      name="country"
      label={{
        text: 'Country',
        classes: 'nhsuk-label--m'
      }}
      hint={{
        text: 'Start typing to filter the list'
      }}
      items={[
        { value: '', text: 'Select a country' },
        { value: 'AF', text: 'Afghanistan' },
        { value: 'AL', text: 'Albania' },
        { value: 'DZ', text: 'Algeria' },
        { value: 'AD', text: 'Andorra' },
        { value: 'AO', text: 'Angola' },
        { value: 'AR', text: 'Argentina' },
        { value: 'AU', text: 'Australia' },
        { value: 'AT', text: 'Austria' },
        { value: 'BD', text: 'Bangladesh' },
        { value: 'BE', text: 'Belgium' },
        { value: 'BR', text: 'Brazil' },
        { value: 'CA', text: 'Canada' },
        { value: 'CN', text: 'China' },
        { value: 'FR', text: 'France' },
        { value: 'DE', text: 'Germany' },
        { value: 'IN', text: 'India' },
        { value: 'IT', text: 'Italy' },
        { value: 'JP', text: 'Japan' },
        { value: 'MX', text: 'Mexico' },
        { value: 'ES', text: 'Spain' },
        { value: 'GB', text: 'United Kingdom' },
        { value: 'US', text: 'United States' }
      ]}
    />
  </section>
</div>

<style>
  .example-container {
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
  }

  .example {
    margin-bottom: 48px;
    padding: 24px;
    background-color: #f4f4f4;
    border-radius: 4px;
  }

  .example h3 {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 24px;
  }

  .example h4 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 20px;
  }

  .value-display {
    margin-top: 16px;
    padding: 8px;
    background-color: #e8f4f8;
    border-radius: 4px;
    font-family: monospace;
    font-size: 14px;
  }

  .date-inputs {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .date-inputs > :global(div) {
    flex: 1;
    min-width: 120px;
  }

  /* Custom class for demonstration */
  :global(.custom-select-class) {
    border-color: #007f3b;
  }

  /* Label size modifier */
  :global(.nhsuk-label--m) {
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 700;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-label--m) {
      font-size: 26px;
      font-size: 1.625rem;
      line-height: 1.07692;
    }
  }
</style>
