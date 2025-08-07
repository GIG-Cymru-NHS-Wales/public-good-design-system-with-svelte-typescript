<script lang="ts">
  import SummaryList from './SummaryList.svelte';
  import { examples } from './config.js';
</script>

<div class="examples">
  <h1>NHS UK Summary List Component Examples</h1>

  <section class="example">
    <h2>Default</h2>
    <p>Summary list with actions and mixed content types</p>
    <div class="example-content">
      <SummaryList {...examples.default} />
    </div>
  </section>

  <section class="example">
    <h2>Without Actions</h2>
    <p>Summary list for display-only information</p>
    <div class="example-content">
      <SummaryList {...examples.withoutActions} />
    </div>
  </section>

  <section class="example">
    <h2>Without Border</h2>
    <p>Summary list with no borders for a cleaner look</p>
    <div class="example-content">
      <SummaryList {...examples.withoutBorder} />
    </div>
  </section>

  <section class="example">
    <h2>Without Row Border</h2>
    <p>Summary list with selective row borders</p>
    <div class="example-content">
      <SummaryList {...examples.withoutRowBorder} />
    </div>
  </section>

  <section class="example">
    <h2>Custom Usage</h2>
    <p>Example with custom classes and attributes</p>
    <div class="example-content">
      <SummaryList
        rows={[
          {
            key: { text: 'Patient ID' },
            value: { text: 'NHS-123456789' }
          },
          {
            key: { text: 'Appointment' },
            value: {
              html: '<strong>Tomorrow 2:30 PM</strong><br>Dr. Smith, Cardiology'
            },
            actions: {
              items: [
                {
                  href: '#reschedule',
                  text: 'Reschedule',
                  visuallyHiddenText: 'appointment'
                },
                {
                  href: '#cancel',
                  text: 'Cancel',
                  visuallyHiddenText: 'appointment'
                }
              ]
            }
          }
        ]}
        classes="custom-summary-list"
        attributes={{ 'data-testid': 'appointment-summary' }}
      />
    </div>
  </section>
</div>

<style>
  .examples {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .example {
    margin-bottom: 40px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    overflow: hidden;
  }

  .example h2 {
    margin: 0;
    padding: 15px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #e5e5e5;
    font-size: 18px;
    color: #333;
  }

  .example p {
    margin: 0;
    padding: 0 20px 15px 20px;
    background-color: #f8f9fa;
    color: #666;
    font-size: 14px;
  }

  .example-content {
    padding: 20px;
    background-color: white;
  }

  h1 {
    text-align: center;
    color: #005eb8;
    margin-bottom: 40px;
    font-size: 28px;
  }

  /* Custom styling for the custom example */
  :global(.custom-summary-list) {
    border: 2px solid #005eb8;
    border-radius: 4px;
    padding: 10px;
  }
</style>
