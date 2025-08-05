<script lang="ts">
  import type { RadiosProps, RadioItem } from './types.js';
  import { parseAttributes } from '$lib/utils/attributes.js';
  import Fieldset from '../Fieldset/Fieldset.svelte';
  import Hint from '../Hint/Hint.svelte';
  import ErrorMessage from '../ErrorMessage/ErrorMessage.svelte';
  import Label from '../Label/Label.svelte';
  import { onMount } from 'svelte';

  let {
    fieldset,
    hint,
    errorMessage,
    formGroup = {},
    idPrefix,
    name,
    value: selectedValue = $bindable(),
    items = [],
    classes = '',
    attributes = {}
  }: RadiosProps = $props();

  // Generate ID prefix
  const prefix = idPrefix || name;
  
  // Track conditional reveals
  let conditionalStates = $state<Record<string, boolean>>({});
  
  // Check if any items have conditional content
  const hasConditionals = items.some(item => item.conditional?.html);
  
  // Build aria-describedby
  let describedBy = fieldset?.describedBy || '';
  const hintId = hint && prefix ? `${prefix}-hint` : undefined;
  const errorId = errorMessage && prefix ? `${prefix}-error` : undefined;
  
  if (hintId) {
    describedBy = describedBy ? `${describedBy} ${hintId}` : hintId;
  }
  if (errorId) {
    describedBy = describedBy ? `${describedBy} ${errorId}` : errorId;
  }

  // Build form group classes
  let formGroupClasses = 'nhsuk-form-group';
  if (errorMessage) {
    formGroupClasses += ' nhsuk-form-group--error';
  }
  if (formGroup.classes) {
    formGroupClasses += ` ${formGroup.classes}`;
  }

  // Build radios container classes
  let radiosClasses = 'nhsuk-radios';
  if (classes) {
    radiosClasses += ` ${classes}`;
  }
  if (hasConditionals) {
    radiosClasses += ' nhsuk-radios--conditional';
  }

  // Initialize selected value and conditional states
  $effect(() => {
    items.forEach((item, index) => {
      if (!item.divider) {
        const itemId = item.id || `${prefix}${index > 0 ? `-${index + 1}` : ''}`;
        const isChecked = item.checked || (selectedValue === item.value && item.checked !== false);
        
        if (isChecked && selectedValue !== item.value) {
          selectedValue = item.value;
        }
        
        if (item.conditional?.html) {
          conditionalStates[itemId] = isChecked;
        }
      }
    });
  });

  // Handle radio change
  function handleChange(item: RadioItem, itemId: string) {
    selectedValue = item.value;
    
    // Update all conditional states
    items.forEach((radioItem, index) => {
      if (!radioItem.divider && radioItem.conditional?.html) {
        const id = radioItem.id || `${prefix}${index > 0 ? `-${index + 1}` : ''}`;
        conditionalStates[id] = id === itemId;
      }
    });
  }

  // Sync conditional reveals on mount (for browser back button)
  onMount(() => {
    const handlePageShow = () => {
      items.forEach((item, index) => {
        if (!item.divider && item.conditional?.html) {
          const itemId = item.id || `${prefix}${index > 0 ? `-${index + 1}` : ''}`;
          const input = document.getElementById(itemId) as HTMLInputElement;
          if (input) {
            conditionalStates[itemId] = input.checked;
          }
        }
      });
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  });

  // Inner content for optional fieldset wrapper
  let innerContent: any;
</script>

<div class={formGroupClasses}>
  {#if fieldset}
    <Fieldset
      describedBy={describedBy}
      classes={fieldset.classes}
      attributes={fieldset.attributes}
      legend={fieldset.legend}
    >
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
      
      <div 
        class={radiosClasses}
        {...parseAttributes(attributes)}
      >
        {#each items as item, index}
          {@const itemId = item.id || `${prefix}${index > 0 ? `-${index + 1}` : ''}`}
          {@const conditionalId = `conditional-${itemId}`}
          {@const hasHint = !!(item.hint?.text || item.hint?.html)}
          {@const itemHintId = `${itemId}-item-hint`}
          {@const isChecked = selectedValue === item.value}
          
          {#if item.divider}
            <div class="nhsuk-radios__divider">{item.divider}</div>
          {:else}
            <div class="nhsuk-radios__item">
              <input
                class="nhsuk-radios__input"
                id={itemId}
                {name}
                type="radio"
                value={item.value}
                checked={isChecked}
                disabled={item.disabled}
                aria-controls={item.conditional?.html ? conditionalId : undefined}
                aria-expanded={item.conditional?.html ? conditionalStates[itemId] : undefined}
                aria-describedby={hasHint ? itemHintId : undefined}
                onchange={() => handleChange(item, itemId)}
                {...parseAttributes(item.attributes || {})}
              >
              
              <Label
                html={item.html}
                text={item.text}
                classes={`nhsuk-radios__label${item.label?.classes ? ` ${item.label.classes}` : ''}`}
                attributes={item.label?.attributes}
                for={itemId}
              />
              
              {#if hasHint}
                <Hint
                  id={itemHintId}
                  classes="nhsuk-radios__hint"
                  attributes={item.hint?.attributes}
                  html={item.hint?.html}
                  text={item.hint?.text}
                />
              {/if}
            </div>
            
            {#if item.conditional?.html}
              <div 
                class="nhsuk-radios__conditional{!conditionalStates[itemId] ? ' nhsuk-radios__conditional--hidden' : ''}"
                id={conditionalId}
              >
                {@html item.conditional.html}
              </div>
            {/if}
          {/if}
        {/each}
      </div>
    </Fieldset>
  {:else}
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
    
    <div 
      class={radiosClasses}
      {...parseAttributes(attributes)}
    >
      {#each items as item, index}
        {@const itemId = item.id || `${prefix}${index > 0 ? `-${index + 1}` : ''}`}
        {@const conditionalId = `conditional-${itemId}`}
        {@const hasHint = !!(item.hint?.text || item.hint?.html)}
        {@const itemHintId = `${itemId}-item-hint`}
        {@const isChecked = selectedValue === item.value}
        
        {#if item.divider}
          <div class="nhsuk-radios__divider">{item.divider}</div>
        {:else}
          <div class="nhsuk-radios__item">
            <input
              class="nhsuk-radios__input"
              id={itemId}
              {name}
              type="radio"
              value={item.value}
              checked={isChecked}
              disabled={item.disabled}
              aria-controls={item.conditional?.html ? conditionalId : undefined}
              aria-expanded={item.conditional?.html ? conditionalStates[itemId] : undefined}
              aria-describedby={hasHint ? itemHintId : undefined}
              onchange={() => handleChange(item, itemId)}
              {...parseAttributes(item.attributes || {})}
            >
            
            <Label
              html={item.html}
              text={item.text}
              classes={`nhsuk-radios__label${item.label?.classes ? ` ${item.label.classes}` : ''}`}
              attributes={item.label?.attributes}
              for={itemId}
            />
            
            {#if hasHint}
              <Hint
                id={itemHintId}
                classes="nhsuk-radios__hint"
                attributes={item.hint?.attributes}
                html={item.hint?.html}
                text={item.hint?.text}
              />
            {/if}
          </div>
          
          {#if item.conditional?.html}
            <div 
              class="nhsuk-radios__conditional{!conditionalStates[itemId] ? ' nhsuk-radios__conditional--hidden' : ''}"
              id={conditionalId}
            >
              {@html item.conditional.html}
            </div>
          {/if}
        {/if}
      {/each}
    </div>
  {/if}
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

  /* Radio item styles */
  .nhsuk-radios__item {
    clear: left;
    display: block;
    margin-bottom: 16px;
    min-height: 48px;
    padding: 0 0 0 48px;
    position: relative;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-radios__item {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  .nhsuk-radios__item:last-child,
  .nhsuk-radios__item:last-of-type {
    margin-bottom: 0;
  }

  /* Radio input styles */
  .nhsuk-radios__input {
    cursor: pointer;
    height: 48px;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 48px;
    z-index: 1;
  }

  /* Radio label styles */
  :global(.nhsuk-radios__label) {
    cursor: pointer;
    display: inline-block;
    margin-bottom: 0;
    padding: 8px 12px 5px;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  /* Radio hint styles */
  :global(.nhsuk-radios__hint) {
    display: block;
    padding-left: 12px;
    padding-right: 12px;
  }

  /* Radio circle styles */
  .nhsuk-radios__input + :global(.nhsuk-radios__label)::before {
    background: #ffffff;
    border: 2px solid #212b32;
    border-radius: 50%;
    box-sizing: border-box;
    content: "";
    height: 48px;
    left: 0;
    position: absolute;
    top: 0;
    width: 48px;
  }

  /* Radio dot styles */
  .nhsuk-radios__input + :global(.nhsuk-radios__label)::after {
    background: #212b32;
    border: 10px solid #005eb8;
    border-radius: 50%;
    content: "";
    height: 0;
    left: 10px;
    opacity: 0;
    position: absolute;
    top: 10px;
    width: 0;
  }

  /* Focus state */
  .nhsuk-radios__input:focus + :global(.nhsuk-radios__label)::before {
    border-width: 5px;
    box-shadow: 0 0 0 5px #ffeb3b;
  }

  /* Selected state */
  .nhsuk-radios__input:checked + :global(.nhsuk-radios__label)::after {
    opacity: 1;
  }

  /* Disabled state */
  .nhsuk-radios__input:disabled,
  .nhsuk-radios__input:disabled + :global(.nhsuk-radios__label) {
    cursor: default;
  }

  .nhsuk-radios__input:disabled + :global(.nhsuk-radios__label) {
    opacity: 0.5;
  }

  /* Inline variant */
  @media (min-width: 48.0625em) {
    :global(.nhsuk-radios--inline)::after {
      clear: both;
      content: "";
      display: table;
    }

    :global(.nhsuk-radios--inline) .nhsuk-radios__item {
      clear: none;
      float: left;
      margin-right: 32px;
    }
  }

  :global(.nhsuk-radios--inline.nhsuk-radios--conditional) .nhsuk-radios__item {
    float: none;
    margin-right: 0;
  }

  /* Divider styles */
  .nhsuk-radios__divider {
    color: #212b32;
    margin-bottom: 16px;
    text-align: center;
    width: 48px;
    font-family: Frutiger W01, Arial, Sans-serif;
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.47368;
    font-weight: 400;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-radios__divider {
      font-size: 22px;
      font-size: 1.375rem;
      line-height: 1.45455;
    }
  }

  /* Conditional reveal styles */
  .nhsuk-radios__conditional {
    border-left: 4px solid #212b32;
    margin-left: 20px;
    padding-left: 28px;
    margin-bottom: 24px;
  }

  @media (min-width: 40.0625em) {
    .nhsuk-radios__conditional {
      margin-bottom: 32px;
    }
  }

  .nhsuk-radios__conditional > :last-child {
    margin-bottom: 0;
  }

  :global(.nhsuk-frontend-supported) .nhsuk-radios__conditional--hidden {
    display: none;
  }

  /* Additional global styles for nested content */
  :global(.nhsuk-radios__conditional .nhsuk-form-group) {
    margin-bottom: 0;
  }

  :global(.nhsuk-radios__conditional .nhsuk-form-group:last-child) {
    margin-bottom: 0;
  }
</style>
