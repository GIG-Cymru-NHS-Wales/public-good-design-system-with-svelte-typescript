<script lang="ts">
  import Panel from './Panel.svelte';
</script>

<div class="example-container">
  <h2>Panel Examples</h2>
  
  <section class="example">
    <h3>Default Panel</h3>
    <Panel
      titleText="Booking complete"
      text="We have sent you a confirmation email"
    />
  </section>

  <section class="example">
    <h3>Panel with Title Only</h3>
    <Panel
      titleText="Application submitted"
    />
  </section>

  <section class="example">
    <h3>Panel with HTML Title</h3>
    <Panel
      titleHtml="Your <strong>COVID-19</strong> vaccination is booked"
      text="Please arrive 5 minutes before your appointment time"
    />
  </section>

  <section class="example">
    <h3>Panel with HTML Content</h3>
    <Panel
      titleText="Registration successful"
      html="<p>Your NHS number is <strong>943 476 5919</strong></p><p>Please keep this number safe as you'll need it to access services.</p>"
    />
  </section>

  <section class="example">
    <h3>Panel with Complex Content (Using Snippet)</h3>
    <Panel titleText="Appointment confirmed">
      <p>Your appointment details:</p>
      <ul>
        <li>Date: Monday 15 January 2024</li>
        <li>Time: 2:30pm</li>
        <li>Location: St Thomas' Hospital, Westminster</li>
      </ul>
      <p>Please bring your appointment letter and any medications you're currently taking.</p>
    </Panel>
  </section>

  <section class="example">
    <h3>Panel with Different Heading Levels</h3>
    
    <div class="sub-example">
      <Panel
        titleText="H1 Heading (Default)"
        text="This panel uses an H1 heading"
        headingLevel={1}
      />
    </div>

    <div class="sub-example">
      <Panel
        titleText="H2 Heading"
        text="This panel uses an H2 heading"
        headingLevel={2}
      />
    </div>

    <div class="sub-example">
      <Panel
        titleText="H3 Heading"
        text="This panel uses an H3 heading"
        headingLevel={3}
      />
    </div>
  </section>

  <section class="example">
    <h3>Panel with Links</h3>
    <Panel titleText="Next steps">
      <p>Your application has been received. You can:</p>
      <ul>
        <li><a href="#">Track your application status</a></li>
        <li><a href="#">Upload additional documents</a></li>
        <li><a href="#">Contact us if you have questions</a></li>
      </ul>
    </Panel>
  </section>

  <section class="example">
    <h3>Panel with Button</h3>
    <Panel titleText="Payment successful">
      <p>Thank you for your payment. A receipt has been emailed to you.</p>
      <button class="nhsuk-button">Download receipt</button>
    </Panel>
  </section>

  <section class="example">
    <h3>Panel with Custom Classes</h3>
    <Panel
      titleText="Custom styled panel"
      text="This panel has custom classes applied"
      classes="custom-panel-class"
    />
  </section>

  <section class="example">
    <h3>Panel with Custom Attributes</h3>
    <Panel
      titleText="Test panel"
      text="This panel has data attributes for testing"
      attributes={{
        'data-test': 'panel-component',
        'data-module': 'nhsuk-panel',
        'id': 'test-panel',
        'role': 'status'
      }}
    />
  </section>

  <section class="example">
    <h3>Long Content Panel</h3>
    <Panel titleText="Important information about your treatment">
      <p>Your treatment plan has been approved by your healthcare team. This comprehensive plan includes several stages designed to provide the best possible outcome for your condition.</p>
      
      <h4>Treatment schedule:</h4>
      <ol>
        <li>Initial consultation - Complete</li>
        <li>Diagnostic tests - Complete</li>
        <li>Treatment planning - Complete</li>
        <li>First treatment session - Scheduled for next week</li>
        <li>Follow-up appointments - To be scheduled</li>
      </ol>
      
      <p>If you have any questions about your treatment plan, please contact your care coordinator on 0123 456 7890.</p>
      
      <p>Remember to bring your patient information pack to all appointments.</p>
    </Panel>
  </section>

  <section class="example">
    <h3>Multiple Panels</h3>
    <Panel
      titleText="Step 1 complete"
      text="Your personal details have been saved"
    />
    <Panel
      titleText="Step 2 complete"
      text="Your medical history has been recorded"
    />
    <Panel
      titleText="All steps complete"
      text="Your registration is now complete. You can log in to your account."
    />
  </section>
</div>

<style>
  .example-container {
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #f0f4f5;
  }

  .example {
    margin-bottom: 48px;
    padding: 24px;
    background-color: white;
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

  /* Custom class for demonstration */
  :global(.custom-panel-class) {
    background-color: #330072;
    border-radius: 8px;
  }

  /* Additional button styles for example */
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

  /* Example content styles */
  h4 {
    color: #212b32;
    font-size: 20px;
    margin-top: 16px;
    margin-bottom: 12px;
  }
</style>
