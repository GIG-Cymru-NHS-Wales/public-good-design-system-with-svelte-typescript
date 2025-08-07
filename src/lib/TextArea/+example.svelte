<script lang="ts">
  import Textarea from './Textarea.svelte';
  import {
    commonConfigs,
    createTextareaConfig,
    autocompleteOptions,
    validationPatterns,
    defaultCharacterCountMessages
  } from './config';
  import type { TextareaProps } from './types';

  // Interactive examples state
  let defaultValue = $state('');
  let errorValue = $state('');
  let characterCountValue = $state('');
  let validationValue = $state('');
  let customValue = $state('');

  // Character count
  const maxLength = 200;
  $: charactersRemaining = maxLength - characterCountValue.length;
  $: isOverLimit = charactersRemaining < 0;

  // Validation example
  let validationError = $state<string | null>(null);

  function validateNoHtml(value: string) {
    if (value && !validationPatterns.noHtml.test(value)) {
      validationError = 'HTML tags are not allowed';
    } else {
      validationError = null;
    }
  }

  $: validateNoHtml(validationValue);

  // Default example
  const defaultExample: TextareaProps = {
    name: 'more-detail',
    id: 'more-detail',
    label: {
      text: 'Can you provide more detail?'
    },
    hint: {
      text: 'Do not include personal information, like your name, date of birth or NHS number'
    }
  };

  // Error example
  const errorExample: TextareaProps = {
    name: 'no-ni-reason',
    id: 'no-ni-reason',
    label: {
      text: "Why can't you provide an NHS number?"
    },
    errorMessage: {
      text: 'You must provide an explanation'
    }
  };

  // Autocomplete example
  const autocompleteExample: TextareaProps = {
    name: 'address',
    id: 'textarea-with-autocomplete-attribute',
    label: {
      text: 'Full address'
    },
    autocomplete: 'street-address'
  };
</script>

<div class="examples">
  <section>
    <h2>Default Example</h2>
    <p>A standard textarea with label and hint text.</p>
    <Textarea
      {...defaultExample}
      bind:value={defaultValue}
    />
    {#if defaultValue}
      <div class="output">
        <strong>Current value:</strong> {defaultValue}
      </div>
    {/if}
  </section>

  <section>
    <h2>With Error Message</h2>
    <p>Shows validation error styling and messaging.</p>
    <Textarea
      {...errorExample}
      bind:value={errorValue}
    />
  </section>

  <section>
    <h2>With Autocomplete</h2>
    <p>Helps users by enabling browser autocomplete for addresses.</p>
    <Textarea
      {...autocompleteExample}
    />
  </section>

  <section>
    <h2>Character Count</h2>
    <p>Shows remaining characters to help users stay within limits.</p>
    <Textarea
      name="character-count"
      label={{ text: 'Describe your symptoms' }}
      hint={{ text: `Maximum ${maxLength} characters` }}
      maxlength={maxLength}
      bind:value={characterCountValue}
      errorMessage={isOverLimit ? {
        text: defaultCharacterCountMessages.over(Math.abs(charactersRemaining))
      } : null}
    />
    <div class="character-count" class:warning={charactersRemaining < 50} class:error={isOverLimit}>
      {#if isOverLimit}
        {defaultCharacterCountMessages.over(Math.abs(charactersRemaining))}
      {:else}
        {defaultCharacterCountMessages.under(charactersRemaining)}
      {/if}
    </div>
  </section>

  <section>
    <h2>With Validation</h2>
    <p>Real-time validation to prevent HTML tags.</p>
    <Textarea
      name="validation-example"
      label={{ text: 'Additional comments' }}
      hint={{ text: 'Plain text only - no HTML allowed' }}
      bind:value={validationValue}
      errorMessage={validationError ? { text: validationError } : null}
    />
  </section>

  <section>
    <h2>Different Sizes</h2>
    <p>Textareas with different row counts.</p>

    <div class="grid">
      <Textarea
        name="small"
        label={{ text: 'Small (3 rows)' }}
        rows={3}
      />

      <Textarea
        name="medium"
        label={{ text: 'Medium (5 rows - default)' }}
        rows={5}
      />

      <Textarea
        name="large"
        label={{ text: 'Large (10 rows)' }}
        rows={10}
      />
    </div>
  </section>

  <section>
    <h2>Common Configurations</h2>
    <p>Pre-configured textareas for common use cases.</p>

    <h3>Address</h3>
    <Textarea {...commonConfigs.address} />

    <h3>Feedback</h3>
    <Textarea {...commonConfigs.feedback} />

    <h3>Medical History</h3>
    <Textarea {...commonConfigs.medicalHistory} />
  </section>

  <section>
    <h2>States</h2>
    <p>Different states of the textarea component.</p>

    <div class="grid">
      <Textarea
        name="disabled"
        label={{ text: 'Disabled' }}
        disabled
        value="This textarea is disabled"
      />

      <Textarea
        name="readonly"
        label={{ text: 'Read-only' }}
        readonly
        value="This textarea is read-only"
      />

      <Textarea
        name="required"
        label={{ text: 'Required field' }}
        required
        hint={{ text: 'This field must be completed' }}
      />
    </div>
  </section>

  <section>
    <h2>With Placeholder</h2>
    <p>Placeholder text provides an example of expected input.</p>
    <Textarea
      name="placeholder"
      label={{ text: 'Tell us about your experience' }}
      placeholder="For example: The appointment was..."
    />
  </section>

  <section>
    <h2>Page Heading Label</h2>
    <p>When the label should also be the page heading.</p>
    <Textarea
      name="page-heading"
      label={{
        text: 'What is your feedback about our service?',
        isPageHeading: true
      }}
      hint={{ text: 'We value your opinion and use it to improve our services' }}
    />
  </section>

  <section>
    <h2>Custom Attributes</h2>
    <p>Additional HTML attributes and custom styling.</p>
    <Textarea
      name="custom"
      label={{
        text: 'Custom textarea',
        classes: 'custom-label-class'
      }}
      hint={{
        text: 'This textarea has custom attributes',
        classes: 'custom-hint-class'
      }}
      classes="custom-textarea-class"
      attributes={{
        'data-module': 'custom-textarea',
        'data-analytics': 'feedback-form'
      }}
      bind:value={customValue}
    />
  </section>

  <section>
    <h2>Helper Function Example</h2>
    <p>Using the <code>createTextareaConfig</code> helper function.</p>
    <Textarea
      {...createTextareaConfig(
        'helper-example',
        'Quick feedback',
        {
          hint: { text: 'Just a few words' },
          rows: 3,
          maxlength: 100
        }
      )}
    />
  </section>

  <section>
    <h2>Accessibility Features</h2>
    <ul>
      <li>Proper label association with <code>for</code> attribute</li>
      <li>Hint text connected via <code>aria-describedby</code></li>
      <li>Error messages announced to screen readers</li>
      <li>Keyboard navigation fully supported</li>
      <li>Focus states clearly visible</li>
      <li>Semantic HTML structure</li>
      <li>Support for autocomplete attributes</li>
    </ul>
  </section>
</div>

<style>
  .examples {
    padding: 2rem;
    max-width: 800px;
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
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #425563;
    margin-bottom: 1.5rem;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  .output {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f0f4f5;
    border-radius: 4px;
    word-break: break-word;
  }

  .character-count {
    margin-top: 0.5rem;
    font-size: 16px;
    color: #425563;
  }

  .character-count.warning {
    color: #ffb81c;
    font-weight: 600;
  }

  .character-count.error {
    color: #d5281b;
    font-weight: 600;
  }

  code {
    background-color: #f0f4f5;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: monospace;
    font-size: 0.9em;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: #425563;
  }

  /* Custom classes for demonstration */
  :global(.custom-label-class) {
    color: #330072;
    font-size: 21px;
  }

  :global(.custom-hint-class) {
    color: #00a499;
    font-style: italic;
  }

  :global(.custom-textarea-class) {
    border-color: #330072;
    background-color: #fef7ff;
  }

  :global(.custom-textarea-class:focus) {
    border-color: #330072;
  }
