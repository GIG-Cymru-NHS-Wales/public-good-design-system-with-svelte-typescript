<script lang="ts">
  import Radios from './Radios.svelte';
  
  let example1Value = $state('no');
  let example2Value = $state('');
  let example3Value = $state('');
  let example4Value = $state('no');
  let example5Value = $state('');
  let example6Value = $state('');
  let example7Value = $state('');
  let example8Value = $state('');
  let example9Value = $state('');
</script>

<div class="example-container">
  <h2>Radios Examples</h2>
  
  <section class="example">
    <h3>Default Radios</h3>
    <Radios
      bind:value={example1Value}
      idPrefix="example"
      name="example"
      fieldset={{
        legend: {
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--m'
        }
      }}
      hint={{
        text: 'This includes changing your last name or spelling your name differently'
      }}
      items={[
        {
          value: 'no',
          text: 'No'
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Radios with Divider</h3>
    <Radios
      bind:value={example6Value}
      idPrefix="example-divider"
      name="example-divider"
      fieldset={{
        legend: {
          text: 'How do you want to sign in?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      }}
      items={[
        {
          value: 'government-gateway',
          text: 'Use Government Gateway'
        },
        {
          value: 'nhsuk-login',
          text: 'Use NHS.UK login'
        },
        {
          divider: 'or'
        },
        {
          value: 'create-account',
          text: 'Create an account'
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Radios with Conditional Content</h3>
    <Radios
      bind:value={example7Value}
      idPrefix="contact"
      name="contact"
      fieldset={{
        legend: {
          text: 'How would you prefer to be contacted?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      }}
      hint={{
        text: 'Select 1 option'
      }}
      items={[
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html: `
              <div class="nhsuk-form-group">
                <label class="nhsuk-label" for="email">
                  Email address
                </label>
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
                <label class="nhsuk-label" for="phone">
                  Phone number
                </label>
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
                <label class="nhsuk-label" for="mobile">
                  Mobile phone number
                </label>
                <input class="nhsuk-input nhsuk-u-width-two-thirds" id="mobile" name="mobile" type="tel">
              </div>
            `
          }
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Radios without Fieldset</h3>
    <Radios
      bind:value={example8Value}
      name="colours"
      idPrefix="colours"
      items={[
        {
          value: 'red',
          text: 'Red'
        },
        {
          value: 'green',
          text: 'Green'
        },
        {
          value: 'blue',
          text: 'Blue'
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Small Radios</h3>
    <Radios
      bind:value={example9Value}
      name="small-example"
      idPrefix="small"
      fieldset={{
        legend: {
          text: 'Do you know your NHS number?',
          classes: 'nhsuk-fieldset__legend--s'
        }
      }}
      items={[
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        },
        {
          value: 'not-sure',
          text: 'Not sure'
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Radios with HTML Labels</h3>
    <Radios
      name="html-labels"
      idPrefix="html"
      fieldset={{
        legend: {
          text: 'Select your preferred appointment time'
        }
      }}
      items={[
        {
          value: 'morning',
          html: 'Morning <span class="nhsuk-u-visually-hidden">(9am to 12pm)</span>'
        },
        {
          value: 'afternoon',
          html: 'Afternoon <span class="nhsuk-u-visually-hidden">(12pm to 5pm)</span>'
        },
        {
          value: 'evening',
          html: 'Evening <span class="nhsuk-u-visually-hidden">(5pm to 8pm)</span>'
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Radios with Custom Attributes</h3>
    <Radios
      name="custom-attrs"
      idPrefix="custom"
      fieldset={{
        legend: {
          text: 'Choose an option'
        }
      }}
      attributes={{
        'data-module': 'nhsuk-radios',
        'data-test': 'radios-component'
      }}
      items={[
        {
          value: 'option-1',
          text: 'Option 1',
          attributes: {
            'data-test-id': 'option-1'
          }
        },
        {
          value: 'option-2',
          text: 'Option 2',
          attributes: {
            'data-test-id': 'option-2'
          }
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Complex Form Example</h3>
    <form>
      <Radios
        name="appointment-type"
        idPrefix="appointment"
        fieldset={{
          legend: {
            text: 'What type of appointment do you need?',
            classes: 'nhsuk-fieldset__legend--l'
          }
        }}
        items={[
          {
            value: 'face-to-face',
            text: 'Face to face appointment',
            hint: {
              text: 'You'll need to visit your GP surgery'
            }
          },
          {
            value: 'telephone',
            text: 'Telephone appointment',
            hint: {
              text: 'Your GP will call you at your registered number'
            }
          },
          {
            value: 'video',
            text: 'Video consultation',
            hint: {
              text: "You'll need a device with a camera and internet connection"
            }
          }
        ]}
      />
      
      <button class="nhsuk-button" type="submit">Continue</button>
    </form>
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

  .value-display {
    margin-top: 16px;
    padding: 8px;
    background-color: #e8f4f8;
    border-radius: 4px;
    font-family: monospace;
    font-size: 14px;
  }

  /* Form styles for examples */
  :global(.nhsuk-u-width-two-thirds) {
    width: 66.66% !important;
  }

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

  /* Button styles for example */
  :global(.nhsuk-button) {
    font-weight: 600;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    padding: 12px 24px;
    margin-bottom: 28px;
    appearance: none;
    background-color: #007f3b;
    border: 2px solid transparent;
    border-radius: 4px;
    box-shadow: 0 4px 0 #002f15;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-align: center;
    text-decoration: none;
    vertical-align: top;
  }

  :global(.nhsuk-button:hover) {
    background-color: #005a2e;
  }

  :global(.nhsuk-button:active) {
    background-color: #005a2e;
    box-shadow: none;
    top: 4px;
  }

  :global(.nhsuk-button:focus) {
    background-color: #ffeb3b;
    box-shadow: 0 4px 0 #212b32;
    color: #212b32;
    outline: 4px solid transparent;
    outline-offset: 4px;
  }

  /* Custom fieldset modifier for demonstration */
  :global(.app-fieldset--custom-modifier) {
    /* Custom styles would go here */
  }

  /* Additional input styles for conditional content */
  :global(.nhsuk-input) {
    font-family: Frutiger W01, Arial, Sans-serif;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    margin-top: 0;
    padding: 5px;
    border: 2px solid #212b32;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
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

  /* Legend size classes */
  :global(.nhsuk-fieldset__legend--xl) {
    font-size: 32px;
    font-size: 2rem;
    line-height: 1.09375;
    font-weight: 700;
    margin-bottom: 24px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-fieldset__legend--xl) {
      font-size: 48px;
      font-size: 3rem;
      line-height: 1.04167;
    }
  }

  :global(.nhsuk-fieldset__legend--l) {
    font-size: 24px;
    font-size: 1.5rem;
    line-height: 1.04167;
    font-weight: 700;
    margin-bottom: 24px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-fieldset__legend--l) {
      font-size: 36px;
      font-size: 2.25rem;
      line-height: 1.11111;
    }
  }

  :global(.nhsuk-fieldset__legend--m) {
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 24px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-fieldset__legend--m) {
      font-size: 26px;
      font-size: 1.625rem;
      line-height: 1.07692;
    }
  }

  :global(.nhsuk-fieldset__legend--s) {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 700;
    margin-bottom: 24px;
  }

  @media (min-width: 40.0625em) {
    :global(.nhsuk-fieldset__legend--s) {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }
</style>yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]}
    />
    <p class="value-display">Selected value: "{example1Value}"</p>
  </section>

  <section class="example">
    <h3>Radios with Hint Text on Items</h3>
    <Radios
      bind:value={example2Value}
      idPrefix="gov"
      name="gov"
      fieldset={{
        legend: {
          text: 'How do you want to sign in?',
          classes: 'nhsuk-fieldset__legend--l',
          isPageHeading: true
        }
      }}
      items={[
        {
          value: 'gateway',
          text: 'Sign in with Government Gateway',
          hint: {
            text: "You'll have a user ID if you've registered for self assessment or filed a tax return online before"
          }
        },
        {
          value: 'verify',
          text: 'Sign in with NHS.UK login',
          hint: {
            text: "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity"
          }
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Disabled Radios</h3>
    <Radios
      bind:value={example3Value}
      idPrefix="example-disabled"
      name="example-disabled"
      fieldset={{
        legend: {
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--m'
        }
      }}
      hint={{
        text: 'This includes changing your last name or spelling your name differently'
      }}
      items={[
        {
          value: 'yes',
          text: 'Yes',
          disabled: true
        },
        {
          value: 'no',
          text: 'No',
          disabled: true
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Inline Radios</h3>
    <Radios
      bind:value={example4Value}
      idPrefix="example-inline"
      classes="nhsuk-radios--inline"
      name="example-inline"
      fieldset={{
        legend: {
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--m'
        }
      }}
      hint={{
        text: 'This includes changing your last name or spelling your name differently'
      }}
      items={[
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No',
          checked: true
        }
      ]}
    />
  </section>

  <section class="example">
    <h3>Radios with Error Message</h3>
    <Radios
      bind:value={example5Value}
      idPrefix="example-error"
      name="example-error"
      errorMessage={{
        text: 'Please select an option'
      }}
      fieldset={{
        classes: 'app-fieldset--custom-modifier',
        attributes: {
          'data-attribute': 'value',
          'data-second-attribute': 'second-value'
        },
        legend: {
          text: 'Have you changed your name?',
          classes: 'nhsuk-fieldset__legend--m'
        }
      }}
      hint={{
        text: 'This includes changing your last name or spelling your name differently'
      }}
      items={[
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: '
