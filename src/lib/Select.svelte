<script lang="ts">
  import type { SelectProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';
  import Label from '../Label/Label.svelte';
  import Hint from '../Hint/Hint.svelte';
  import ErrorMessage from '../ErrorMessage/ErrorMessage.svelte';

  let {
    id,
    name,
    items = [],
    value = $bindable(),
    disabled = false,
    describedBy,
    label,
    hint,
    errorMessage,
    formGroup = {},
    classes = '',
    attributes = {}
  }: SelectProps = $props();

  // Generate ID if not provided
  const selectId = id || name;

  // Build aria-describedby
  let ariaDescribedBy = describedBy || '';
  const hintId = hint && selectId ? `${selectId}-hint` : undefined;
  const errorId = errorMessage && selectId ? `${selectId}-error` : undefined;

  if (hintId) {
    ariaDescribedBy = ariaDescribedBy ? `${ariaDescribedBy} ${hintId}` : hintId;
  }
  if (errorId) {
    ariaDescribedBy = ariaDescribedBy ? `${ariaDescribedBy} ${errorId}` : errorId;
  }

  // Build form group classes
  let formGroupClasses = 'nhsuk-form-group';
  if (errorMessage) {
    formGroupClasses += ' nhsuk-form-group--error';
  }
  if (formGroup.classes) {
    formGroupClasses += ` ${formGroup.classes}`;
  }

  // Build select classes
  let selectClasses = 'nhsuk-select';
  if (classes) {
    selectClasses += ` ${classes}`;
  }
  if (errorMessage) {
    selectClasses += ' nhsuk-select--error';
  }
</script>

<div
  class={formGroupClasses}
  {...parseAttributes(formGroup.attributes || {})}
>
  {#if label}
    <Label
      html={label.html}
      text={label.text}
      classes={label.classes}
      isPageHeading={label.isPageHeading}
      attributes={label.attributes}
      for={selectId}
    />
  {/if}

  {#if hint}
    <Hint
      id={hintId}
      classes={hint.classes}
      attributes={hint.attributes}
      html={hint.html}
      text={hint.text}
    />
  {/if}

  {#if errorMessage}
    <ErrorMessage
      id={errorId}
      classes={errorMessage.classes}
      html={errorMessage.html}
      text={errorMessage.text}
    />
  {/if}

  <select
    class={selectClasses}
    id={selectId}
    {name}
    {disabled}
    bind:value
    aria-describedby={ariaDescribedBy || undefined}
    {...parseAttributes(attributes)}
  >
    {#each items as item}
      {#if item}
        {@const effectiveValue = item.value !== undefined ? item.value : item.text}
        {@const isSelected = item.selected || (value === effectiveValue && item.selected !== false)}
        <option
          value={item.value !== undefined ? item.value : undefined}
          selected={isSelected}
          disabled={item.disabled}
          {...parseAttributes(item.attributes || {})}
        >
          {item.text}
        </option>
      {/if}
    {/each}
  </select>
</div>

<style>
  /* Form group styles */
  .nhsuk-form-group {
    margin-bottom: 32px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-form-group {
      margin-bottom: 48px;
    }
  }

  .nhsuk-form-group--error {
    padding-left: 15px;
    border-left: 5px solid #d5281b;
  }

  /* Select styles */
  .nhsuk-select {
    background-color: #ffffff;
    border: 2px solid #212b32;
    box-sizing: border-box;
    color: #212b32;
    height: 2.5rem;
    min-width: 23ex;
    max-width: 100%;
    padding: 5px;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-select {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  .nhsuk-select:focus {
    outline: 3px solid transparent;
    outline-offset: 0;
    box-shadow: inset 0 0 0 2px;
    border-color: #212b32;
    outline: 4px solid #ffeb3b;
    outline-offset: -2px;
  }

  /* Selected option styles */
  .nhsuk-select option:active,
  .nhsuk-select option:checked,
  .nhsuk-select:focus::-ms-value {
    background-color: #005eb8;
    color: #ffffff;
  }

  /* Error state */
  .nhsuk-select--error {
    border: 4px solid #d5281b;
  }

  /* Disabled state */
  .nhsuk-select:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Firefox specific styles */
  @-moz-document url-prefix() {
    .nhsuk-select {
      /* Ensure consistent appearance in Firefox */
      -moz-appearance: none;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='10' viewBox='0 0 16 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l8 10 8-10z' fill='%23212b32'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 10px center;
      background-size: 16px 10px;
      padding-right: 40px;
    }
  }

  /* IE specific styles */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .nhsuk-select {
      padding-right: 40px;
    }
  }
</style>
