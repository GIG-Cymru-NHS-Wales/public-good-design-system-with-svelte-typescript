<script>
  import ErrorSummary from './ErrorSummary.svelte';
</script>

<div class="example-container">
  <h1>Error Summary Component Examples</h1>
  
  <section>
    <h2>Default Error Summary</h2>
    <ErrorSummary
      titleText="There is a problem"
      errorList={[
        {
          text: 'Date of birth must be in the past',
          href: '#dob-error'
        }
      ]}
    />
    
    <!-- Example form field -->
    <div class="form-group">
      <label for="dob-error">Date of birth</label>
      <span class="error-message">Date of birth must be in the past</span>
      <input type="date" id="dob-error" class="form-input error" />
    </div>
  </section>

  <section>
    <h2>With Description</h2>
    <ErrorSummary
      titleText="There is a problem"
      descriptionText="Please correct the errors below and try again"
      errorList={[
        {
          text: 'Enter your first name',
          href: '#firstname'
        },
        {
          text: 'Enter your last name',
          href: '#lastname'
        }
      ]}
    />
    
    <!-- Example form fields -->
    <div class="form-group">
      <label for="firstname">First name</label>
      <span class="error-message">Enter your first name</span>
      <input type="text" id="firstname" class="form-input error" />
    </div>
    
    <div class="form-group">
      <label for="lastname">Last name</label>
      <span class="error-message">Enter your last name</span>
      <input type="text" id="lastname" class="form-input error" />
    </div>
  </section>

  <section>
    <h2>With HTML Description</h2>
    <ErrorSummary
      titleText="There is a problem"
      descriptionHtml='Optional description of the errors and how to correct them.<br>
      Note that the error summary should receive focus on page load using the JavaScript that comes with this component.'
      errorList={[
        {
          text: 'Select your preferred contact method',
          href: '#contact-method'
        }
      ]}
    />
  </section>

  <section>
    <h2>Multiple Errors</h2>
    <ErrorSummary
      titleText="There are 4 problems with your submission"
      errorList={[
        {
          text: 'Enter your email address',
          href: '#email'
        },
        {
          text: 'Enter a valid phone number',
          href: '#phone'
        },
        {
          text: 'Select at least one option',
          href: '#options'
        },
        {
          text: 'Accept the terms and conditions',
          href: '#terms'
        }
      ]}
    />
  </section>

  <section>
    <h2>With HTML Title</h2>
    <ErrorSummary
      titleHtml='There is <strong>1 problem</strong> with your submission'
      errorList={[
        {
          text: 'Upload a valid file',
          href: '#file-upload'
        }
      ]}
    />
  </section>

  <section>
    <h2>Error Items with HTML</h2>
    <ErrorSummary
      titleText="There is a problem"
      errorList={[
        {
          html: 'Enter a date in the format <strong>DD/MM/YYYY</strong>',
          href: '#date-field'
        },
        {
          html: 'Password must contain <em>at least</em> 8 characters',
          href: '#password-field'
        }
      ]}
    />
  </section>

  <section>
    <h2>With Custom Attributes</h2>
    <ErrorSummary
      titleText="Form validation failed"
      class="custom-error-summary"
      data-testid="error-summary"
      data-form="registration"
      errorList={[
        {
          text: 'Username is already taken',
          href: '#username',
          attributes: {
            'data-field': 'username',
            'data-error-type': 'duplicate'
          }
        }
      ]}
    />
  </section>

  <section>
    <h2>Without Auto Focus</h2>
    <ErrorSummary
      titleText="There is a problem"
      descriptionText="This error summary will not automatically receive focus"
      focusOnPageLoad={false}
      errorList={[
        {
          text: 'Select a valid option',
          href: '#select-field'
        }
      ]}
    />
  </section>

  <section>
    <h2>With Slot Content</h2>
    <ErrorSummary
      titleText="There is a problem"
      errorList={[
        {
          text: 'Complete all required fields',
          href: '#required-field'
        }
      ]}
    >
      This is custom slot content that replaces the description.
      It can include any content you want.
    </ErrorSummary>
  </section>

  <section>
    <h2>Error Without Link</h2>
    <ErrorSummary
      titleText="System errors detected"
      errorList={[
        {
          text: 'Connection to server lost - this error has no link'
        },
        {
          text: 'Click to fix this field error',
          href: '#field-error'
        }
      ]}
    />
  </section>
</div>

<style>
  .example-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    color: #005eb8;
    margin-bottom: 40px;
  }

  h2 {
    color: #212b32;
    margin-top: 60px;
    margin-bottom: 20px;
  }

  section {
    margin-bottom: 80px;
  }

  .form-group {
    margin-bottom: 24px;
    margin-top: 24px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #212b32;
  }

  .form-input {
    display: block;
    width: 100%;
    max-width: 400px;
    padding: 8px;
    border: 2px solid #212b32;
    border-radius: 4px;
    font-size: 16px;
  }

  .form-input.error {
    border-color: #d5281b;
  }

  .error-message {
    display: block;
    color: #d5281b;
    font-weight: 700;
    margin-bottom: 8px;
  }

  /* Custom class example */
  :global(.custom-error-summary) {
    background-color: #fef2f2;
    border-radius: 8px;
  }
</style>
