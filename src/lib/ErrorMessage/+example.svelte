<script>
  import ErrorMessage from './ErrorMessage.svelte';
</script>

<div class="example-container">
  <h1>Error Message Component Examples</h1>
  
  <section>
    <h2>Default Error Message</h2>
    <div class="form-group">
      <label for="fullname-default">Full name</label>
      <ErrorMessage text="Error message about full name goes here" />
      <input type="text" id="fullname-default" class="form-input error" aria-describedby="fullname-error" />
    </div>
  </section>

  <section>
    <h2>With HTML Content</h2>
    <div class="form-group">
      <label for="email-html">Email address</label>
      <ErrorMessage 
        html="Enter an email address in the correct format, like <strong>name@example.com</strong>"
      />
      <input type="email" id="email-html" class="form-input error" />
    </div>
  </section>

  <section>
    <h2>With Custom ID</h2>
    <div class="form-group">
      <label for="password-custom">Password</label>
      <ErrorMessage 
        text="Password must be at least 8 characters long"
        id="password-error-message"
      />
      <input type="password" id="password-custom" class="form-input error" aria-describedby="password-error-message" />
    </div>
  </section>

  <section>
    <h2>With Custom Visually Hidden Text</h2>
    <div class="form-group">
      <label for="dob-custom">Date of birth</label>
      <ErrorMessage 
        text="Date of birth must be in the past"
        visuallyHiddenText="Validation error"
      />
      <input type="date" id="dob-custom" class="form-input error" />
    </div>
  </section>

  <section>
    <h2>Without Visually Hidden Text</h2>
    <div class="form-group">
      <label for="phone-no-hidden">Phone number</label>
      <ErrorMessage 
        text="Enter a valid UK phone number"
        visuallyHiddenText=""
      />
      <input type="tel" id="phone-no-hidden" class="form-input error" />
    </div>
  </section>

  <section>
    <h2>With Custom Classes</h2>
    <div class="form-group">
      <label for="postcode-classes">Postcode</label>
      <ErrorMessage 
        text="Enter a valid UK postcode"
        class="custom-error-class"
      />
      <input type="text" id="postcode-classes" class="form-input error" />
    </div>
  </section>

  <section>
    <h2>With Custom Attributes</h2>
    <div class="form-group">
      <label for="nhs-number">NHS Number</label>
      <ErrorMessage 
        text="NHS number must be 10 digits"
        data-testid="nhs-number-error"
        data-field="nhs-number"
      />
      <input type="text" id="nhs-number" class="form-input error" />
    </div>
  </section>

  <section>
    <h2>Multiple Errors Example</h2>
    <div class="form-group">
      <fieldset>
        <legend>What is your address?</legend>
        
        <label for="address-line-1">Address line 1</label>
        <ErrorMessage text="Enter the first line of your address" />
        <input type="text" id="address-line-1" class="form-input error" />
        
        <label for="address-town">Town or city</label>
        <ErrorMessage text="Enter your town or city" />
        <input type="text" id="address-town" class="form-input error" />
        
        <label for="address-postcode">Postcode</label>
        <ErrorMessage text="Enter a valid postcode" />
        <input type="text" id="address-postcode" class="form-input error" />
      </fieldset>
    </div>
  </section>

  <section>
    <h2>Complex HTML Error Message</h2>
    <div class="form-group">
      <label for="file-upload">Upload your document</label>
      <ErrorMessage 
        html="<span>The file must be:</span><ul><li>Less than 5MB</li><li>In PDF, DOC, or DOCX format</li><li>Not password protected</li></ul>"
      />
      <input type="file" id="file-upload" class="form-input error" />
    </div>
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
    margin-top: 40px;
    margin-bottom: 20px;
  }

  section {
    margin-bottom: 60px;
  }

  .form-group {
    margin-bottom: 24px;
  }

  label, legend {
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
    margin-top: 8px;
  }

  .form-input.error {
    border-color: #d5281b;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

  fieldset label {
    margin-top: 16px;
  }

  fieldset label:first-of-type {
    margin-top: 0;
  }

  /* Custom class example */
  :global(.custom-error-class) {
    background-color: #fef2f2;
    padding: 8px;
    border-left: 4px solid #d5281b;
  }

  /* Nested list styling for complex error */
  :global(.nhsuk-error-message ul) {
    margin: 8px 0 0 20px;
    padding: 0;
  }

  :global(.nhsuk-error-message li) {
    margin-bottom: 4px;
  }
</style>
