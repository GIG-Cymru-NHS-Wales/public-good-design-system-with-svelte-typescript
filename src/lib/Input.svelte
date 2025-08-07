<script lang="ts">
  import type { InputProps } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';
  import Label from '../Label/Label.svelte';
  import Hint from '../Hint/Hint.svelte';
  import ErrorMessage from '../ErrorMessage/ErrorMessage.svelte';

  let {
    id,
    name,
    type = 'text',
    inputmode,
    value = '',
    describedBy,
    label,
    hint,
    errorMessage,
    prefix,
    suffix,
    formGroup = {},
    classes = '',
    autocomplete,
    pattern,
    spellcheck,
    attributes = {}
  }: InputProps = $props();

  // Generate ID if not provided
  const inputId = id || name;

  // Build aria-describedby
  let ariaDescribedBy = describedBy || '';
  const hintId = hint && inputId ? `${inputId}-hint` : undefined;
  const errorId = errorMessage && inputId ? `${inputId}-error` : undefined;

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

  // Build input classes
  let inputClasses = 'nhsuk-input';
  if (classes) {
    inputClasses += ` ${classes}`;
  }
  if (errorMessage) {
    inputClasses += ' nhsuk-input--error';
  }
</script>

<div class={formGroupClasses}>
  <Label
    html={label.html}
    text={label.text}
    classes={label.classes}
    isPageHeading={label.isPageHeading}
    attributes={label.attributes}
    for={inputId}
  />

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

  {#if prefix || suffix}
    <div class="nhsuk-input__wrapper">
      {#if prefix}
        <div class="nhsuk-input__prefix" aria-hidden="true">{prefix}</div>
      {/if}
      <input
        class={inputClasses}
        id={inputId}
        {name}
        {type}
        {inputmode}
        bind:value
        aria-describedby={ariaDescribedBy || undefined}
        {autocomplete}
        {pattern}
        spellcheck={spellcheck === true ? 'true' : spellcheck === false ? 'false' : undefined}
        {...parseAttributes(attributes)}
      >
      {#if suffix}
        <div class="nhsuk-input__suffix" aria-hidden="true">{suffix}</div>
      {/if}
    </div>
  {:else}
    <input
      class={inputClasses}
      id={inputId}
      {name}
      {type}
      {inputmode}
      bind:value
      aria-describedby={ariaDescribedBy || undefined}
      {autocomplete}
      {pattern}
      spellcheck={spellcheck === true ? 'true' : spellcheck === false ? 'false' : undefined}
      {...parseAttributes(attributes)}
    >
  {/if}
</div>

<style>
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

  .nhsuk-input {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: 2px solid #212b32;
    border-radius: 0;
    box-sizing: border-box;
    min-height: 40px;
    margin-top: 0;
    padding: 5px;
    width: 100%;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-input {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  .nhsuk-input:focus {
    outline: 3px solid transparent;
    outline-offset: 0;
    box-shadow: inset 0 0 0 2px;
    border-color: #212b32;
    outline: 4px solid #ffeb3b;
    outline-offset: -2px;
  }

  .nhsuk-input::-webkit-outer-spin-button,
  .nhsuk-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .nhsuk-input[type="number"] {
    -moz-appearance: textfield;
  }

  .nhsuk-input--error {
    border: 4px solid #d5281b;
  }

  /* Width modifiers */
  .nhsuk-input--width-30 {
    max-width: 59ex;
  }

  .nhsuk-input--width-20 {
    max-width: 41ex;
  }

  .nhsuk-input--width-10 {
    max-width: 23ex;
  }

  .nhsuk-input--width-5 {
    max-width: 10.8ex;
  }

  .nhsuk-input--width-4 {
    max-width: 9ex;
  }

  .nhsuk-input--width-3 {
    max-width: 7.2ex;
  }

  .nhsuk-input--width-2 {
    max-width: 5.4ex;
  }

  /* Prefix and suffix */
  .nhsuk-input__wrapper {
    display: flex;
  }

  .nhsuk-input__wrapper .nhsuk-input {
    flex: 0 1 auto;
  }

  .nhsuk-input__wrapper .nhsuk-input:focus {
    z-index: 1;
  }

  @media (max-width: 30.0624em) {
    .nhsuk-input__wrapper {
      display: block;
    }

    .nhsuk-input__wrapper .nhsuk-input {
      max-width: 100%;
    }
  }

  .nhsuk-input__prefix,
  .nhsuk-input__suffix {
    background-color: #f0f4f5;
    border: 2px solid #212b32;
    box-sizing: border-box;
    cursor: default;
    display: inline-block;
    flex: 0 0 auto;
    min-height: 40px;
    min-width: 2.5rem;
    padding: 5px;
    text-align: center;
    white-space: nowrap;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-input__prefix,
    .nhsuk-input__suffix {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  @media (max-width: 30.0624em) {
    .nhsuk-input__prefix,
    .nhsuk-input__suffix {
      display: block;
      height: 100%;
      white-space: normal;
    }
  }

  @media (max-width: 48.0624em) {
    .nhsuk-input__prefix,
    .nhsuk-input__suffix {
      line-height: 1.6;
      font-size: 1.1875rem;
    }
  }

  .nhsuk-input__prefix {
    border-right: 0;
  }

  @media (max-width: 30.0624em) {
    .nhsuk-input__prefix {
      border-bottom: 0;
      border-right: 2px solid #212b32;
    }
  }

  .nhsuk-input__suffix {
    border-left: 0;
  }

  @media (max-width: 30.0624em) {
    .nhsuk-input__suffix {
      border-top: 0;
      border-left: 2px solid #212b32;
    }
  }
</style>
