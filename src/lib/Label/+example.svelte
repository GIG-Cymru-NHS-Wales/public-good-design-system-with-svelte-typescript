<script lang="ts">
  import Label from './Label.svelte';
</script>

<div class="example-container">
  <h2>Label Examples</h2>

  <section class="example">
    <h3>Default Label</h3>
    <Label text="NHS number" for="nhs-number" />
    <input class="nhsuk-input" id="nhs-number" name="nhs-number" type="text">
  </section>

  <section class="example">
    <h3>Label with Bold Text (Small)</h3>
    <Label
      classes="nhsuk-label--s"
      text="NHS number"
      for="nhs-number-bold"
    />
    <input class="nhsuk-input" id="nhs-number-bold" name="nhs-number-bold" type="text">
  </section>

  <section class="example">
    <h3>Label as Page Heading (Extra Large)</h3>
    <Label
      text="What is your NHS number?"
      classes="nhsuk-label--xl"
      isPageHeading={true}
      for="nhs-number-xl"
    />
    <div class="nhsuk-hint">
      Your NHS number is a 10 digit number, like 485 777 3456.
    </div>
    <input class="nhsuk-input nhsuk-input--width-10" id="nhs-number-xl" name="nhs-number-xl" type="text">
  </section>

  <section class="example">
    <h3>Different Label Sizes</h3>

    <div class="sub-example">
      <Label
        text="Extra large label"
        classes="nhsuk-label--xl"
        for="input-xl"
      />
      <input class="nhsuk-input" id="input-xl" name="input-xl" type="text">
    </div>

    <div class="sub-example">
      <Label
        text="Large label"
        classes="nhsuk-label--l"
        for="input-l"
      />
      <input class="nhsuk-input" id="input-l" name="input-l" type="text">
    </div>

    <div class="sub-example">
      <Label
        text="Medium label"
        classes="nhsuk-label--m"
        for="input-m"
      />
      <input class="nhsuk-input" id="input-m" name="input-m" type="text">
    </div>

    <div class="sub-example">
      <Label
        text="Small label"
        classes="nhsuk-label--s"
        for="input-s"
      />
      <input class="nhsuk-input" id="input-s" name="input-s" type="text">
    </div>

    <div class="sub-example">
      <Label
        text="Default label"
        for="input-default"
      />
      <input class="nhsuk-input" id="input-default" name="input-default" type="text">
    </div>
  </section>

  <section class="example">
    <h3>Label with HTML Content</h3>
    <Label
      html="Email address <span class='nhsuk-u-visually-hidden'>(required)</span>"
      for="email"
    />
    <input class="nhsuk-input" id="email" name="email" type="email">
  </section>

  <section class="example">
    <h3>Label with Custom Classes</h3>
    <Label
      text="Custom styled label"
      classes="nhsuk-label--m custom-label-class"
      for="custom-input"
    />
    <input class="nhsuk-input" id="custom-input" name="custom-input" type="text">
  </section>

  <section class="example">
    <h3>Label with Custom Attributes</h3>
    <Label
      text="Label with data attributes"
      for="data-input"
      attributes={{
        'data-test': 'label-component',
        'data-module': 'govuk-label',
        'id': 'test-label'
      }}
    />
    <input class="nhsuk-input" id="data-input" name="data-input" type="text">
  </section>

  <section class="example">
    <h3>Multiple Labels in a Form</h3>
    <form>
      <div class="nhsuk-form-group">
        <Label
          text="First name"
          classes="nhsuk-label--s"
          for="first-name"
        />
        <input class="nhsuk-input" id="first-name" name="first-name" type="text">
      </div>

      <div class="nhsuk-form-group">
        <Label
          text="Last name"
          classes="nhsuk-label--s"
          for="last-name"
        />
        <input class="nhsuk-input" id="last-name" name="last-name" type="text">
      </div>

      <div class="nhsuk-form-group">
        <Label
          text="Date of birth"
          classes="nhsuk-label--s"
          for="dob"
        />
        <div class="nhsuk-hint">
          For example, 31 3 1980
        </div>
        <input class="nhsuk-input nhsuk-input--width-10" id="dob" name="dob" type="text">
      </div>
    </form>
  </section>

  <section class="example">
    <h3>Label for Different Input Types</h3>

    <div class="sub-example">
      <Label text="Choose an option" for="select-example" />
      <select class="nhsuk-select" id="select-example" name="select-example">
        <option value="">Select...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>

    <div class="sub-example">
      <Label text="Describe your symptoms" for="textarea-example" />
      <textarea class="nhsuk-textarea" id="textarea-example" name="textarea-example" rows="5"></textarea>
    </div>

    <div class="sub-example">
      <fieldset class="nhsuk-fieldset">
        <legend class="nhsuk-fieldset__legend">
          <Label
            text="Do you know your NHS number?"
            classes="nhsuk-label--m"
            isPageHeading={true}
          />
        </legend>
        <div class="nhsuk-radios">
          <div class="nhsuk-radios__item">
            <input class="nhsuk-radios__input" id="nhs-yes" name="nhs-known" type="radio" value="yes">
            <label class="nhsuk-label nhsuk-radios__label" for="nhs-yes">
              Yes
            </label>
          </div>
          <div class="nhsuk-radios__item">
            <input class="nhsuk-radios__input" id="nhs-no" name="nhs-known" type="radio" value="no">
            <label class="nhsuk-label nhsuk-radios__label" for="nhs-no">
              No
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  </section>

  <section class="example">
    <h3>Label Without For Attribute</h3>
    <p class="note">Note: This is not recommended for accessibility, but is technically possible</p>
    <Label text="Standalone label text" />
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

  .note {
    font-style: italic;
    color: #666;
    margin-bottom: 16px;
  }

  /* Form elements for examples */
  :global(.nhsuk-input),
  :global(.nhsuk-select),
  :global(.nhsuk-textarea) {
    font-family: Frutiger W01, Arial, Sans-serif;
    box-sizing: border-box;
    width: 100%;
    margin-top: 0;
    padding: 5px;
    border: 2px solid #212b32;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  :global(.nhsuk-input),
  :global(.nhsuk-select) {
    height: 40px;
  }

  :global(.nhsuk-textarea) {
    padding: 5px;
  }

  :global(.nhsuk-input:focus),
  :global(.nhsuk-select:focus),
  :global(.nhsuk-textarea:focus) {
    outline: 3px solid transparent;
    outline-offset: 0;
    box-shadow: inset 0 0 0 2px;
    border-color: #212b32;
    outline: 4px solid #ffeb3b;
    outline-offset: -2px;
  }

  :global(.nhsuk-input--width-10) {
    max-width: 23ex;
  }

  :global(.nhsuk-form-group) {
    margin-bottom: 32px;
  }

  :global(.nhsuk-hint) {
    color: #425563;
    margin-bottom: 12px;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    line-height: 1.47368;
  }

  :global(.nhsuk-fieldset) {
    margin: 0;
    padding: 0;
    border: 0;
  }

  :global(.nhsuk-fieldset__legend) {
    margin: 0;
  }

  :global(.nhsuk-radios) {
    margin-bottom: 32px;
  }

  :global(.nhsuk-radios__item) {
    display: block;
    position: relative;
    margin-bottom: 16px;
    padding-left: 40px;
  }

  :global(.nhsuk-radios__input) {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: -2px;
    left: -2px;
    width: 44px;
    height: 44px;
    margin: 0;
    opacity: 0;
  }

  :global(.nhsuk-radios__label) {
    cursor: pointer;
    display: inline-block;
    margin-bottom: 0;
    padding: 8px 15px 5px;
  }

  :global(.nhsuk-radios__label::before) {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 2px solid #212b32;
    border-radius: 50%;
    background: white;
  }

  :global(.nhsuk-radios__label::after) {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #005eb8;
    opacity: 0;
  }

  :global(.nhsuk-radios__input:checked + .nhsuk-radios__label::after) {
    opacity: 1;
  }

  :global(.nhsuk-radios__input:focus + .nhsuk-radios__label::before) {
    border-width: 4px;
    box-shadow: 0 0 0 4px #ffeb3b;
  }

  /* Custom class for demonstration */
  :global(.custom-label-class) {
    color: #007f3b;
  }

  /* Visually hidden utility */
  :global(.nhsuk-u-visually-hidden) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    border: 0;
  }
</style>
