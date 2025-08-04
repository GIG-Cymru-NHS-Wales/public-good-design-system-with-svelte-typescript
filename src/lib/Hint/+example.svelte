<script lang="ts">
  import Hint from './Hint.svelte';
</script>

<div class="example-container">
  <h2>Hint Text Examples</h2>
  
  <section class="example">
    <h3>Default Hint</h3>
    <Hint text="Do not include personal information, like your name, date of birth or NHS number" />
  </section>

  <section class="example">
    <h3>Hint with HTML Content</h3>
    <Hint html="It's on your <strong>prescription</strong>. For example if it's '<strong>1234 5678 9</strong>'" />
  </section>

  <section class="example">
    <h3>Hint with Custom ID</h3>
    <Hint 
      text="Enter your full name as it appears on official documents"
      id="name-hint"
    />
  </section>

  <section class="example">
    <h3>Hint with Custom Classes</h3>
    <Hint 
      text="This hint has custom styling applied"
      classes="custom-hint-class"
    />
  </section>

  <section class="example">
    <h3>Hint with Custom Attributes</h3>
    <Hint 
      text="This hint has data attributes for testing"
      attributes={{
        'data-test': 'hint-component',
        'data-module': 'govuk-hint'
      }}
    />
  </section>

  <section class="example">
    <h3>Hint After Label (Default Size)</h3>
    <label class="nhsuk-label" for="example-1">
      What is your NHS number?
    </label>
    <Hint text="Your NHS number is a 10 digit number, like 485 777 3456" />
    <input class="nhsuk-input" id="example-1" name="example-1" type="text">
  </section>

  <section class="example">
    <h3>Hint After Label (Small)</h3>
    <label class="nhsuk-label nhsuk-label--s" for="example-2">
      Date of birth
    </label>
    <Hint text="For example, 31 3 1980" />
    <input class="nhsuk-input" id="example-2" name="example-2" type="text">
  </section>

  <section class="example">
    <h3>Hint After Label (Medium)</h3>
    <label class="nhsuk-label nhsuk-label--m" for="example-3">
      What is your address?
    </label>
    <Hint text="Start typing and select your address from the list" />
    <input class="nhsuk-input" id="example-3" name="example-3" type="text">
  </section>

  <section class="example">
    <h3>Hint in Fieldset with Legend</h3>
    <fieldset class="nhsuk-fieldset">
      <legend class="nhsuk-fieldset__legend">
        Have you changed your name?
      </legend>
      <Hint text="This includes changing your last name or spelling your name differently" />
      <div class="nhsuk-radios">
        <div class="nhsuk-radios__item">
          <input class="nhsuk-radios__input" id="changed-name-1" name="changed-name" type="radio" value="yes">
          <label class="nhsuk-label nhsuk-radios__label" for="changed-name-1">
            Yes
          </label>
        </div>
        <div class="nhsuk-radios__item">
          <input class="nhsuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no">
          <label class="nhsuk-label nhsuk-radios__label" for="changed-name-2">
            No
          </label>
        </div>
      </div>
    </fieldset>
  </section>

  <section class="example">
    <h3>Multiple Hints</h3>
    <label class="nhsuk-label" for="password">
      Create a password
    </label>
    <Hint text="Your password must:" />
    <ul class="nhsuk-list nhsuk-list--bullet">
      <li>be at least 8 characters</li>
      <li>contain at least one uppercase letter</li>
      <li>contain at least one number</li>
    </ul>
    <input class="nhsuk-input" id="password" name="password" type="password">
  </section>

  <section class="example">
    <h3>Long Hint Text</h3>
    <Hint text="We need to know your legal name so we can check your identity. Your legal name is the name that appears on official documents like your passport or driving licence. If you've changed your name by deed poll or marriage, use your new name." />
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

  /* Custom class for demonstration */
  :global(.custom-hint-class) {
    color: #007f3b;
    font-style: italic;
  }

  /* Form element styles for examples */
  :global(.nhsuk-label) {
    display: block;
    margin-bottom: 5px;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-label) {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  :global(.nhsuk-label--s) {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
  }

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

  :global(.nhsuk-input) {
    font-family: Frutiger W01, Arial, Sans-serif;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    margin-top: 0;
    padding: 5px;
    border: 2px solid #212b32;
    border-radius: 4px;
    appearance: none;
  }

  :global(.nhsuk-input:focus) {
    outline: 3px solid transparent;
    outline-offset: 0;
    box-shadow: inset 0 0 0 2px;
    border-color: #212b32;
    outline: 4px solid #ffeb3b;
    outline-offset: -2px;
  }

  :global(.nhsuk-fieldset) {
    margin: 0;
    padding: 0;
    border: 0;
  }

  :global(.nhsuk-fieldset__legend) {
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
    margin-bottom: 16px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-fieldset__legend) {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
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

  :global(.nhsuk-list) {
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    margin-top: 0;
    margin-bottom: 24px;
    padding-left: 20px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-list) {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  :global(.nhsuk-list--bullet) {
    list-style-type: disc;
  }

  :global(.nhsuk-list li) {
    margin-bottom: 8px;
  }
</style>
