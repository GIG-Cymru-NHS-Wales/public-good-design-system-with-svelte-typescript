<script lang="ts">
  import Input from './Input.svelte';

  let inputValue1 = '';
  let inputValue2 = '';
  let inputValue3 = '';
  let inputValue4 = '';
  let inputValue5 = '42.50';
  let inputValue6 = '75';
  let inputValue7 = '12.99';
  let inputValue8 = '';
  let inputValue9 = '';
</script>

<div class="example-container">
  <h2>Input Examples</h2>

  <section class="example">
    <h3>Default Input</h3>
    <Input
      label={{ text: 'NHS number' }}
      id="input-example"
      name="test-name"
      bind:value={inputValue1}
    />
    <p class="value-display">Current value: "{inputValue1}"</p>
  </section>

  <section class="example">
    <h3>Input with Hint Text</h3>
    <Input
      label={{
        text: 'NHS number',
        classes: 'nhsuk-label--l'
      }}
      hint={{
        text: "It's a 10-digit number that's on any letter the NHS has sent you, for example, 485 777 3456"
      }}
      id="input-with-hint-text"
      name="test-name-2"
      classes="nhsuk-input--width-10"
      bind:value={inputValue2}
    />
  </section>

  <section class="example">
    <h3>Input with Error Message</h3>
    <Input
      label={{
        text: 'NHS number',
        classes: 'nhsuk-label--l'
      }}
      hint={{
        text: "It's a 10-digit number that's on any letter the NHS has sent you, for example, 485 777 3456"
      }}
      id="input-with-error-message"
      name="test-name-3"
      classes="nhsuk-input--width-10"
      errorMessage={{
        text: 'Error message goes here'
      }}
      bind:value={inputValue3}
    />
  </section>

  <section class="example">
    <h3>Input with Width Modifiers</h3>

    <div class="sub-example">
      <Input
        label={{ text: 'Width 30 characters' }}
        name="width-30"
        classes="nhsuk-input--width-30"
      />
    </div>

    <div class="sub-example">
      <Input
        label={{ text: 'Width 20 characters' }}
        name="width-20"
        classes="nhsuk-input--width-20"
      />
    </div>

    <div class="sub-example">
      <Input
        label={{ text: 'Width 10 characters' }}
        name="width-10"
        classes="nhsuk-input--width-10"
      />
    </div>

    <div class="sub-example">
      <Input
        label={{ text: 'Width 5 characters' }}
        name="width-5"
        classes="nhsuk-input--width-5"
      />
    </div>

    <div class="sub-example">
      <Input
        label={{ text: 'Width 4 characters' }}
        name="width-4"
        classes="nhsuk-input--width-4"
      />
    </div>

    <div class="sub-example">
      <Input
        label={{ text: 'Width 3 characters' }}
        name="width-3"
        classes="nhsuk-input--width-3"
      />
    </div>

    <div class="sub-example">
      <Input
        label={{ text: 'Width 2 characters' }}
        name="width-2"
        classes="nhsuk-input--width-2"
      />
    </div>
  </section>

  <section class="example">
    <h3>Input with Prefix</h3>
    <Input
      label={{
        text: 'What is the cost in pounds?',
        classes: 'nhsuk-label--l'
      }}
      id="input-with-prefix"
      name="test-name-4"
      prefix="£"
      classes="nhsuk-input--width-5"
      bind:value={inputValue5}
    />
  </section>

  <section class="example">
    <h3>Input with Suffix</h3>
    <Input
      label={{
        text: 'What is the weight in kilograms?',
        classes: 'nhsuk-label--l'
      }}
      id="input-with-suffix"
      name="test-name-5"
      suffix="kg"
      classes="nhsuk-input--width-5"
      bind:value={inputValue6}
    />
  </section>

  <section class="example">
    <h3>Input with Prefix and Suffix</h3>
    <Input
      label={{
        text: 'What is the cost per item, in pounds?',
        classes: 'nhsuk-label--l'
      }}
      id="input-with-prefix-and-suffix"
      name="test-name-6"
      prefix="£"
      suffix="per item"
      classes="nhsuk-input--width-5"
      bind:value={inputValue7}
    />
  </section>

  <section class="example">
    <h3>Input with Autocomplete Attribute</h3>
    <Input
      label={{ text: 'Postcode' }}
      id="input-with-autocomplete-attribute"
      name="postcode"
      autocomplete="postal-code"
      classes="nhsuk-input--width-5"
      bind:value={inputValue8}
    />
  </section>

  <section class="example">
    <h3>Input with Error Message, Prefix and Suffix</h3>
    <Input
      label={{
        text: 'What is the cost per item, in pounds?',
        classes: 'nhsuk-label--l'
      }}
      id="input-with-error-message-and-prefix-and-suffix"
      name="test-name-7"
      prefix="£"
      suffix="per item"
      classes="nhsuk-input--width-5"
      errorMessage={{
        text: 'Enter a cost per item, in pounds'
      }}
      bind:value={inputValue9}
    />
  </section>

  <section class="example">
    <h3>Different Input Types</h3>

    <div class="sub-example">
      <Input
        label={{ text: 'Email address' }}
        name="email"
        type="email"
        autocomplete="email"
        spellcheck={false}
      />
    </div>

    <div class="sub-example">
      <Input
        label={{ text: 'Password' }}
        name="password"
        type="password"
        autocomplete="current-password"
      />
    </div>

    <div class="sub-example">
      <Input
        label={{ text: 'Telephone number' }}
        name="tel"
        type="tel"
        autocomplete="tel"
        classes="nhsuk-input--width-10"
      />
    </div>

    <div class="sub-example">
      <Input
        label={{ text: 'Date of birth' }}
        name="dob"
        type="date"
        classes="nhsuk-input--width-10"
      />
    </div>

    <div class="sub-example">
      <Input
        label={{ text: 'Number of items' }}
        name="quantity"
        type="number"
        inputmode="numeric"
        pattern="[0-9]*"
        classes="nhsuk-input--width-3"
      />
    </div>
  </section>

  <section class="example">
    <h3>Input with Custom Attributes</h3>
    <Input
      label={{ text: 'Custom input' }}
      name="custom"
      attributes={{
        'data-test': 'input-component',
        'data-module': 'govuk-input',
        'maxlength': '10'
      }}
      classes="nhsuk-input--width-10"
    />
  </section>

  <section class="example">
    <h3>Input with HTML Label and Hint</h3>
    <Input
      label={{
        html: 'What is your <strong>legal</strong> name?'
      }}
      hint={{
        html: 'This is the name on your <strong>birth certificate</strong> or <strong>passport</strong>'
      }}
      name="legal-name"
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

  .sub-example {
    margin-bottom: 24px;
  }

  .value-display {
    margin-top: 16px;
    padding: 8px;
    background-color: #e8f4f8;
    border-radius: 4px;
    font-family: monospace;
    font-size: 14px;
  }

  /* Additional label styles for examples */
  :global(.nhsuk-label--l) {
    font-size: 24px;
    font-size: 1.5rem;
    line-height: 1.04167;
    font-weight: 700;
    margin-bottom: 12px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-label--l) {
      font-size: 36px;
      font-size: 2.25rem;
      line-height: 1.11111;
    }
  }
</style>
