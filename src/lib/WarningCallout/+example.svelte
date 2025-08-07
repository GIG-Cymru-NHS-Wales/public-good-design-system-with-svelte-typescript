<script lang="ts">
  import WarningCallout from './WarningCallout.svelte';
  import { warningConfigs, commonWarnings, createWarningConfig } from './config';
  import type { WarningType } from './types';
  
  // Interactive example state
  let selectedType = $state<WarningType>('important');
  let customHeading = $state('Custom Warning');
  let customText = $state('This is a custom warning message.');
  let selectedHeadingLevel = $state<1 | 2 | 3 | 4 | 5 | 6>(3);
</script>

<div class="examples">
  <section>
    <h2>Default Example</h2>
    <p>Standard warning callout with "Important" heading.</p>
    <WarningCallout 
      heading="Important"
      text="For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements."
    />
  </section>

  <section>
    <h2>With Custom Heading</h2>
    <p>Warning callout with a custom heading that gets "Important:" prefix for screen readers.</p>
    <WarningCallout 
      heading="School, nursery or work"
      text="Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."
    />
  </section>

  <section>
    <h2>With HTML Content</h2>
    <p>Warning callout with rich HTML content.</p>
    <WarningCallout 
      heading="Important safety information"
      html={`
        <p>You should seek immediate medical attention if you experience:</p>
        <ul>
          <li>Difficulty breathing or shortness of breath</li>
          <li>Swelling of the face, lips, tongue or throat</li>
          <li>Severe skin rash or itching</li>
          <li>Feeling faint or dizzy</li>
        </ul>
        <p>These may be signs of a serious allergic reaction.</p>
      `}
    />
  </section>

  <section>
    <h2>Using Slots</h2>
    <p>Warning callout with content passed via slots for maximum flexibility.</p>
    <WarningCallout heading="Pregnancy and breastfeeding">
      {#snippet children()}
        <p>If you're pregnant or breastfeeding:</p>
        <ul>
          <li>Tell your doctor before taking this medicine</li>
          <li>Your doctor will discuss the benefits and risks</li>
          <li>Only take this medicine if your doctor says it's safe</li>
        </ul>
        <p>Read the <a href="#">patient information leaflet</a> for more details.</p>
      {/snippet}
    </WarningCallout>
  </section>

  <section>
    <h2>Common Warning Types</h2>
    <p>Pre-configured warning types for medical contexts.</p>
    
    <h3>Medicine Warnings</h3>
    <WarningCallout 
      heading={warningConfigs.interaction.heading}
      text={commonWarnings.medicines.interactions}
    />
    
    <WarningCallout 
      heading={warningConfigs.pregnancy.heading}
      text={commonWarnings.medicines.pregnancy}
    />
    
    <WarningCallout 
      heading={warningConfigs.driving.heading}
      text={commonWarnings.medicines.driving}
    />
    
    <h3>Health Warnings</h3>
    <WarningCallout 
      heading={warningConfigs.emergency.heading}
      text={commonWarnings.health.emergency}
    />
    
    <WarningCallout 
      heading="Infection control"
      text={commonWarnings.health.infection}
    />
  </section>

  <section>
    <h2>Different Heading Levels</h2>
    <p>Examples with different heading levels for proper document structure.</p>
    
    <div class="heading-examples">
      <WarningCallout 
        heading="Heading Level 2"
        headingLevel={2}
        text="This warning uses an H2 element for the heading."
      />
      
      <WarningCallout 
        heading="Heading Level 3 (Default)"
        headingLevel={3}
        text="This warning uses an H3 element for the heading (default)."
      />
      
      <WarningCallout 
        heading="Heading Level 4"
        headingLevel={4}
        text="This warning uses an H4 element for the heading."
      />
    </div>
  </section>

  <section>
    <h2>Interactive Example</h2>
    <p>Customize the warning callout properties.</p>
    
    <div class="controls">
      <div class="control-group">
        <label for="warning-type">Warning Type:</label>
        <select id="warning-type" bind:value={selectedType}>
          {#each Object.keys(warningConfigs) as type}
            <option value={type}>{warningConfigs[type as WarningType].heading}</option>
          {/each}
        </select>
      </div>
      
      <div class="control-group">
        <label for="custom-heading">Custom Heading:</label>
        <input 
          id="custom-heading"
          type="text" 
          bind:value={customHeading}
        />
      </div>
      
      <div class="control-group">
        <label for="custom-text">Custom Text:</label>
        <textarea 
          id="custom-text"
          bind:value={customText}
          rows="3"
        />
      </div>
      
      <div class="control-group">
        <label for="heading-level">Heading Level:</label>
        <select id="heading-level" bind:value={selectedHeadingLevel}>
          {#each [1, 2, 3, 4, 5, 6] as level}
            <option value={level}>H{level}</option>
          {/each}
        </select>
      </div>
    </div>
    
    <div class="preview">
      <h3>Preview:</h3>
      <WarningCallout 
        heading={customHeading}
        headingLevel={selectedHeadingLevel}
        text={customText}
      />
    </div>
    
    <div class="preview">
      <h3>Using Selected Type:</h3>
      <WarningCallout 
        {...createWarningConfig(selectedType, customText)}
      />
    </div>
  </section>

  <section>
    <h2>Custom Attributes and Classes</h2>
    <p>Adding custom classes and data attributes.</p>
    <WarningCallout 
      heading="Custom styled warning"
      text="This warning has custom classes and attributes applied."
      classes="custom-warning-class"
      attributes={{
        'data-module': 'warning',
        'data-severity': 'high',
        'id': 'custom-warning-1'
      }}
    />
  </section>

  <section>
    <h2>Complex Content Example</h2>
    <p>A comprehensive warning with multiple types of content.</p>
    <WarningCallout heading="Before your procedure">
      {#snippet children()}
        <p><strong>7 days before your procedure:</strong></p>
        <ul>
          <li>Stop taking aspirin and anti-inflammatory medicines</li>
          <li>Tell us if you develop any illness or infection</li>
          <li>Arrange for someone to drive you home after the procedure</li>
        </ul>
        
        <p><strong>On the day of your procedure:</strong></p>
        <ul>
          <li>Do not eat anything for 6 hours before</li>
          <li>You can drink clear fluids up to 2 hours before</li>
          <li>Take your regular medicines with a small sip of water</li>
          <li>Bring a list of all your current medicines</li>
        </ul>
        
        <p>If you have any questions, call <strong>0300 311 22 33</strong> (Monday to Friday, 9am to 5pm).</p>
      {/snippet}
    </WarningCallout>
  </section>

  <section>
    <h2>Accessibility Features</h2>
    <ul>
      <li>Screen reader announcement of "Important:" prefix when heading doesn't contain it</li>
      <li>Proper heading hierarchy with configurable levels</li>
      <li>High contrast mode support</li>
      <li>Semantic HTML structure</li>
      <li>Focus states for interactive elements</li>
      <li>Print-optimized styles</li>
      <li>ARIA role="text" for proper screen reader announcement</li>
    </ul>
  </section>
</div>

<style>
  .examples {
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto;
    font-family: "Frutiger W01", Arial, sans-serif;
  }

  section {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #d8dde0;
  }

  section:last-child {
    border-bottom: none;
  }

  h2 {
    color: #005eb8;
    margin-bottom: 0.5rem;
  }

  h3 {
    color: #212b32;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #425563;
    margin-bottom: 1.5rem;
  }

  .heading-examples {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .controls {
    background-color: #f0f4f5;
    padding: 1.5rem;
    border-radius: 4px;
    margin-bottom: 2rem;
  }

  .control-group {
    margin-bottom: 1rem;
  }

  .control-group:last-child {
    margin-bottom: 0;
  }

  .control-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #212b32;
  }

  input[type="text"],
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #768692;
    border-radius: 4px;
    font-size: 16px;
    font-family: "Frutiger W01", Arial, sans-serif;
  }

  textarea {
    resize: vertical;
  }

  input[type="text"]:focus,
  textarea:focus,
  select:focus {
    outline: 3px solid #ffeb3b;
    outline-offset: 0;
    border-color: #212b32;
  }

  .preview {
    margin-bottom: 2rem;
  }

  .preview h3 {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: #425563;
  }

  /* Custom class for demonstration */
  :global(.custom-warning-class) {
    border-color: #d5281b !important;
    border-left-width: 8px !important;
  }

  :global(.custom-warning-class .nhsuk-warning-callout__label) {
    background-color: #d5281b !important;
    color: white !important;
  }
</style>
