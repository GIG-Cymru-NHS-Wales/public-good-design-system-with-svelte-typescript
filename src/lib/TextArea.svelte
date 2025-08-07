<script lang="ts">
  import type { TextareaProps } from './types';
  import { classNames, defaultConfig } from './config';

  let {
    id = $bindable(),
    name,
    rows = defaultConfig.rows,
    value = $bindable(''),
    describedBy = '',
    label,
    hint,
    errorMessage,
    formGroup,
    autocomplete,
    classes = '',
    attributes = {},
    placeholder = '',
    disabled = false,
    readonly = false,
    required = false,
    maxlength,
    minlength,
    spellcheck = defaultConfig.spellcheck,
    ...rest
  }: TextareaProps = $props();

  // Use name as ID if no ID provided
  $: textareaId = id || name;

  // Build aria-describedby attribute
  $: {
    let describedByParts = describedBy ? [describedBy] : [];

    if (hint) {
      describedByParts.push(`${textareaId}-hint`);
    }

    if (errorMessage) {
      describedByParts.push(`${textareaId}-error`);
    }

    describedBy = describedByParts.join(' ');
  }

  // Determine if we have an error
  $: hasError = !!errorMessage;

  // Build form group classes
  $: formGroupClasses = [
    classNames.formGroup,
    hasError ? classNames.formGroupError : '',
    formGroup?.classes || ''
  ].filter(Boolean).join(' ');

  // Build textarea classes
  $: textareaClasses = [
    classNames.textarea,
    hasError ? classNames.textareaError : '',
    classes
  ].filter(Boolean).join(' ');
</script>

<div class={formGroupClasses}>
  <!-- Label -->
  {#if label.isPageHeading}
    <h1 class={classNames.labelWrapper}>
      <label
        for={textareaId}
        class="{classNames.label} {label.classes || ''}"
        {...label.attributes || {}}
      >
        {#if label.html}
          {@html label.html}
        {:else}
          {label.text}
        {/if}
      </label>
    </h1>
  {:else}
    <label
      for={textareaId}
      class="{classNames.label} {label.classes || ''}"
      {...label.attributes || {}}
    >
      {#if label.html}
        {@html label.html}
      {:else}
        {label.text}
      {/if}
    </label>
  {/if}

  <!-- Hint -->
  {#if hint}
    <div
      id="{textareaId}-hint"
      class="{classNames.hint} {hint.classes || ''}"
      {...hint.attributes || {}}
    >
      {#if hint.html}
        {@html hint.html}
      {:else}
        {hint.text}
      {/if}
    </div>
  {/if}

  <!-- Error Message -->
  {#if errorMessage}
    <span
      id="{textareaId}-error"
      class="{classNames.errorMessage} {errorMessage.classes || ''}"
    >
      <span class={classNames.errorMessageVisuallyHidden}>Error:</span>
      {#if errorMessage.html}
        {@html errorMessage.html}
      {:else}
        {errorMessage.text}
      {/if}
    </span>
  {/if}

  <!-- Textarea -->
  <textarea
    {name}
    id={textareaId}
    class={textareaClasses}
    rows={Number(rows)}
    aria-describedby={describedBy || undefined}
    {autocomplete}
    {placeholder}
    {disabled}
    {readonly}
    {required}
    {maxlength}
    {minlength}
    spellcheck={String(spellcheck)}
    bind:value
    {...attributes}
    {...rest}
  />
</div>

<style>
  /* Core settings */
  :root {
    --nhsuk-form-border-color: #4c6272;
    --nhsuk-error-color: #d5281b;
    --nhsuk-focus-color: #ffeb3b;
    --nhsuk-focus-text-color: #212b32;
    --nhsuk-secondary-text-color: #425563;
    --nhsuk-spacing-1: 4px;
    --nhsuk-spacing-2: 8px;
    --nhsuk-spacing-3: 12px;
    --nhsuk-border-width-form-element: 2px;
    --nhsuk-border-width-form-element-error: 4px;
  }

  /* Form group */
  .nhsuk-form-group {
    margin-bottom: 20px;
  }

  .nhsuk-form-group:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 641px) {
    .nhsuk-form-group {
      margin-bottom: 24px;
    }
  }

  /* Label */
  .nhsuk-label {
    display: block;
    margin-bottom: var(--nhsuk-spacing-2);
    color: var(--nhsuk-focus-text-color);
    font-family: "Frutiger W01", Arial, sans-serif;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.47368;
  }

  .nhsuk-label-wrapper {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  /* Hint */
  .nhsuk-hint {
    display: block;
    margin-bottom: var(--nhsuk-spacing-2);
    color: var(--nhsuk-secondary-text-color);
    font-family: "Frutiger W01", Arial, sans-serif;
    font-size: 19px;
    font-weight: 400;
    line-height: 1.47368;
  }

  /* Error message */
  .nhsuk-error-message {
    display: block;
    margin-bottom: var(--nhsuk-spacing-2);
    clear: both;
    color: var(--nhsuk-error-color);
    font-family: "Frutiger W01", Arial, sans-serif;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.47368;
  }

  /* Visually hidden text for screen readers */
  .nhsuk-u-visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    border: 0;
    white-space: nowrap;
  }

  /* Textarea */
  .nhsuk-textarea {
    -webkit-appearance: none;
    appearance: none;
    border: var(--nhsuk-border-width-form-element) solid var(--nhsuk-form-border-color);
    border-radius: 0;
    box-sizing: border-box;
    display: block;
    min-height: 40px;
    padding: var(--nhsuk-spacing-1);
    resize: vertical;
    width: 100%;
    font-family: "Frutiger W01", Arial, sans-serif;
    font-size: 19px;
    font-weight: 400;
    line-height: 1.47368;
  }

  /* Focus state */
  .nhsuk-textarea:focus {
    outline: 4px solid var(--nhsuk-focus-color);
    outline-offset: 0;
    box-shadow: inset 0 0 0 var(--nhsuk-border-width-form-element);
  }

  /* Error state */
  .nhsuk-textarea--error {
    border: var(--nhsuk-border-width-form-element-error) solid var(--nhsuk-error-color);
  }

  .nhsuk-form-group--error {
    padding-left: var(--nhsuk-spacing-3);
    border-left: var(--nhsuk-border-width-form-element-error) solid var(--nhsuk-error-color);
  }

  .nhsuk-form-group--error .nhsuk-textarea {
    border: var(--nhsuk-border-width-form-element-error) solid var(--nhsuk-error-color);
  }

  /* Disabled state */
  .nhsuk-textarea:disabled {
    background-color: #f0f4f5;
    border-color: #768692;
    color: #768692;
    cursor: not-allowed;
  }

  /* Readonly state */
  .nhsuk-textarea:read-only {
    background-color: #f0f4f5;
    border-color: #768692;
  }

  /* Print styles */
  @media print {
    .nhsuk-textarea {
      font-family: sans-serif;
    }

    .nhsuk-label,
    .nhsuk-hint,
    .nhsuk-error-message {
      font-family: sans-serif;
    }
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    .nhsuk-textarea:focus {
      outline-color: Highlight;
    }

    .nhsuk-textarea--error,
    .nhsuk-form-group--error {
      border-color: WindowText;
    }
  }

  /* Responsive typography */
  @media (min-width: 641px) {
    .nhsuk-label {
      font-size: 19px;
      line-height: 1.47368;
    }

    .nhsuk-hint {
      font-size: 19px;
      line-height: 1.47368;
    }

    .nhsuk-error-message {
      font-size: 19px;
      line-height: 1.47368;
    }

    .nhsuk-textarea {
      font-size: 19px;
      line-height: 1.47368;
    }
  }
</style>
