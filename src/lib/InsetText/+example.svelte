<script lang="ts">
  import InsetText from './InsetText.svelte';
</script>

<div class="example-container">
  <h2>Inset Text Examples</h2>

  <section class="example">
    <h3>Default (Using Snippet)</h3>
    <InsetText>
      <p>You can report any suspected side effects to the <a href="https://yellowcard.mhra.gov.uk/" title="External website">UK safety scheme</a>.</p>
    </InsetText>
  </section>

  <section class="example">
    <h3>Simple Text</h3>
    <InsetText text="If you drive you must tell the DVLA about your vertigo. Visit the GOV.UK website for more information on driving with vertigo." />
  </section>

  <section class="example">
    <h3>HTML Content</h3>
    <InsetText html='<p>If you need to <strong>talk to someone</strong>, call the <a href="tel:111">NHS 111</a> service.</p>' />
  </section>

  <section class="example">
    <h3>Multiple Paragraphs</h3>
    <InsetText>
      <p>It can take several weeks for chlordiazepoxide to work.</p>
      <p>If you're prescribed chlordiazepoxide for more than 4 weeks, your doctor may gradually reduce your dose or frequency to prevent withdrawal side effects.</p>
      <p>Do not stop taking it without talking to your doctor first.</p>
    </InsetText>
  </section>

  <section class="example">
    <h3>With List</h3>
    <InsetText>
      <p>Do not take this medicine if you:</p>
      <ul>
        <li>have had an allergic reaction to it or any other medicine in the past</li>
        <li>have liver or kidney problems</li>
        <li>have myasthenia gravis, a condition that causes muscle weakness</li>
        <li>have sleep apnoea, a condition that causes breathing problems when you're asleep</li>
      </ul>
    </InsetText>
  </section>

  <section class="example">
    <h3>With Headings</h3>
    <InsetText>
      <h3>How to store your medicine</h3>
      <p>Keep your medicine in the original container or packaging. This helps you to:</p>
      <ul>
        <li>check the expiry date</li>
        <li>follow the storage instructions</li>
        <li>keep the patient information leaflet</li>
      </ul>
      <p>Store it in a cool, dry place away from direct heat and light.</p>
    </InsetText>
  </section>

  <section class="example">
    <h3>Custom Classes</h3>
    <InsetText classes="custom-inset-class">
      <p>This inset text has custom classes applied for additional styling.</p>
    </InsetText>
  </section>

  <section class="example">
    <h3>With Custom Attributes</h3>
    <InsetText
      attributes={{
        'data-test': 'inset-text-component',
        'data-module': 'govuk-inset-text',
        'id': 'test-inset'
      }}
    >
      <p>This inset text has custom data attributes for testing purposes.</p>
    </InsetText>
  </section>

  <section class="example">
    <h3>Complex Content</h3>
    <InsetText>
      <h3>Side effects</h3>
      <p>Like all medicines, this medicine can cause side effects, although not everybody gets them.</p>
      <p><strong>Common side effects</strong> (may affect up to 1 in 10 people):</p>
      <ul>
        <li>feeling sleepy or tired</li>
        <li>headache</li>
        <li>dizziness</li>
        <li>muscle weakness</li>
      </ul>
      <p>Most side effects are mild and will go away by themselves. Talk to your doctor or pharmacist if side effects bother you or do not go away.</p>
      <p>For the full list of side effects, see the leaflet inside your medicine packet.</p>
    </InsetText>
  </section>

  <section class="example">
    <h3>Warning Notice</h3>
    <InsetText>
      <p><strong>Important:</strong> This is a high-strength preparation. Do not use more than directed by your doctor.</p>
      <p>Using too much can cause serious side effects.</p>
    </InsetText>
  </section>

  <section class="example">
    <h3>Mixed Content Types</h3>
    <InsetText>
      <h4>Before you start treatment</h4>
      <p>Tell your doctor if you:</p>
      <ol>
        <li>are pregnant or trying to get pregnant</li>
        <li>are breastfeeding</li>
        <li>have any allergies</li>
        <li>take any other medicines</li>
      </ol>
      <p>Your doctor needs this information to make sure this treatment is safe for you.</p>
      <p><a href="#">Read more about preparing for your treatment</a></p>
    </InsetText>
  </section>

  <section class="example">
    <h3>Nested Elements</h3>
    <InsetText>
      <p>The medicine comes in different strengths:</p>
      <ul>
        <li>5mg tablets - white, round tablets marked "5"</li>
        <li>10mg tablets - yellow, oval tablets marked "10"</li>
        <li>25mg tablets - orange, round tablets marked "25"</li>
      </ul>
      <p><strong>Your prescription will tell you:</strong></p>
      <ul>
        <li>what strength to take</li>
        <li>how much to take</li>
        <li>when to take it</li>
      </ul>
      <p>Always follow the instructions on your prescription label. If you're not sure, ask your pharmacist.</p>
    </InsetText>
  </section>
</div>

<style>
  .example-container {
    padding: 24px;
    max-width: 1000px;
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
  :global(.custom-inset-class) {
    border-left-color: #007f3b;
    background-color: #f0f8f4;
  }
</style>
