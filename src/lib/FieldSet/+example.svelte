<script lang="ts">
  import Fieldset from './Fieldset.svelte';
  import Input from '$lib/components/Input/Input.svelte';
</script>

<div class="example-container">
  <h2>Fieldset Examples</h2>

  <section class="example">
    <h3>Default Fieldset</h3>
    <Fieldset legend={{ text: 'What is your address?' }} />
  </section>

  <section class="example">
    <h3>Fieldset as Page Heading</h3>
    <Fieldset
      legend={{
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--xl',
        isPageHeading: true
      }}
    />
  </section>

  <section class="example">
    <h3>Fieldset with Inputs</h3>
    <Fieldset
      legend={{
        text: 'What is your address?',
        classes: 'nhsuk-fieldset__legend--xl',
        isPageHeading: true
      }}
    >
      <Input
        label={{ text: 'Address line 1' }}
        id="input-address1"
        name="address1"
      />

      <Input
        label={{ text: 'Address line 2' }}
        id="input-address2"
        name="address2"
      />

      <Input
        label={{ text: 'Town or city' }}
        id="input-town-city"
        name="town"
      />

      <Input
        label={{ text: 'County' }}
        id="input-county"
        name="county"
      />
    </Fieldset>
  </section>

  <section class="example">
    <h3>Fieldset with Different Legend Sizes</h3>

    <div class="sub-example">
      <h4>Extra Large Legend</h4>
      <Fieldset
        legend={{
          text: 'Extra large legend',
          classes: 'nhsuk-fieldset__legend--xl'
        }}
      />
    </div>

    <div class="sub-example">
      <h4>Large Legend</h4>
      <Fieldset
        legend={{
          text: 'Large legend',
          classes: 'nhsuk-fieldset__legend--l'
        }}
      />
    </div>

    <div class="sub-example">
      <h4>Medium Legend</h4>
      <Fieldset
        legend={{
          text: 'Medium legend',
          classes: 'nhsuk-fieldset__legend--m'
        }}
      />
    </div>

    <div class="sub-example">
      <h4>Small Legend</h4>
      <Fieldset
        legend={{
          text: 'Small legend',
          classes: 'nhsuk-fieldset__legend--s'
        }}
      />
    </div>
  </section>

  <section class="example">
    <h3>Fieldset with HTML Legend</h3>
    <Fieldset
      legend={{
        html: '<span>Legend with <strong>HTML</strong> content</span>',
        classes: 'nhsuk-fieldset__legend--m'
      }}
    />
  </section>

  <section class="example">
    <h3>Fieldset with Custom Attributes</h3>
    <Fieldset
      legend={{ text: 'Custom attributes example' }}
      attributes={{
        'data-module': 'custom-fieldset',
        'data-test-id': 'fieldset-test'
      }}
      describedBy="help-text"
    >
      <p id="help-text">This fieldset has custom data attributes and aria-describedby.</p>
    </Fieldset>
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

  .sub-example {
    margin-bottom: 32px;
  }

  .sub-example h4 {
    margin-bottom: 16px;
    font-size: 18px;
    color: #666;
  }

  :global(.example .nhsuk-input) {
    margin-bottom: 16px;
  }
</style>
