<!-- DateInput.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  interface FieldsetLegend {
    text?: string;
    html?: string;
    classes?: string;
    isPageHeading?: boolean;
    attributes?: Record<string, string>;
  }

  interface FieldsetOptions {
    describedBy?: string;
    classes?: string;
    attributes?: Record<string, string>;
    legend?: FieldsetLegend;
  }

  interface HintOptions {
    text?: string;
    html?: string;
    classes?: string;
    attributes?: Record<string, string>;
  }

  interface ErrorMessageOptions {
    text?: string;
    html?: string;
    classes?: string;
    attributes?: Record<string, string>;
  }

  interface FormGroupOptions {
    classes?: string;
  }

  interface DateInputItem {
    /** Item-specific id. If provided, it will be used instead of the generated id. */
    id?: string;
    /** Item-specific name attribute. */
    name: string;
    /** Item-specific label text. If provided, this will be used instead of name for item label text. */
    label?: string;
    /** Optional value for the inputmode attribute. Defaults to 'numeric'. */
    inputmode?: string;
    /** Optional initial value of the input. */
    value?: string;
    /** Attribute to identify input purpose, for instance 'postal-code' or 'username'. */
    autocomplete?: string;
    /** Attribute to provide a regular expression pattern. */
    pattern?: string;
    /** Classes to add to the date input item. */
    classes?: string;
    /** HTML attributes to add to the date input item. */
    attributes?: Record<string, string>;
  }

  interface DateValues {
    day?: string;
    month?: string;
    year?: string;
  }

  interface Props {
    /** This is used for the main component and to compose id attribute for each item. */
    id?: string;
    /** Optional prefix. This is used to prefix each item.name using '-'. */
    namePrefix?: string;
    /** An array of input objects with name, value and classes. */
    items?: DateInputItem[];
    /** Options for the fieldset component. */
    fieldset?: FieldsetOptions;
    /** Options for the hint component. */
    hint?: HintOptions;
    /** Options for the error message component. */
    errorMessage?: ErrorMessageOptions;
    /** Additional options for the form group. */
    formGroup?: FormGroupOptions;
    /** Classes to add to the date-input container. */
    classes?: string;
    /** HTML attributes to add to the date-input container. */
    attributes?: Record<string, string>;
    /** An optional object to specify value attributes for the date parts. */
    values?: DateValues;
  }

  let {
    id = '',
    namePrefix = '',
    items = [],
    fieldset,
    hint,
    errorMessage,
    formGroup,
    classes = '',
    attributes = {},
    values = $bindable({})
  }: Props = $props();

  const dispatch = createEventDispatcher<{
    change: { name: string; value: string; values: DateValues };
    input: { name: string; value: string; values: DateValues };
  }>();

  // Generate default items if none provided
  const dateInputItems = $derived(() => {
    if (items.length > 0) {
      return items;
    }
    
    return [
      {
        name: 'day',
        classes: 'nhsuk-input--width-2',
        value: values.day || ''
      },
      {
        name: 'month', 
        classes: 'nhsuk-input--width-2',
        value: values.month || ''
      },
      {
        name: 'year',
        classes: 'nhsuk-input--width-4',
        value: values.year || ''
      }
    ];
  });

  // Generate IDs for accessibility
  const hintId = $derived(id ? `${id}-hint` : '');
  const errorId = $derived(id ? `${id}-error` : '');

  // Build describedBy string for accessibility
  const ariaDescribedBy = $derived(() => {
    const parts = [];
    if (fieldset?.describedBy) parts.push(fieldset.describedBy);
    if (hint && hintId) parts.push(hintId);
    if (errorMessage && errorId) parts.push(errorId);
    return parts.join(' ').trim() || undefined;
  });

  // Handle input changes
  function handleInput(event: Event, itemName: string) {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;
    
    // Update values object
    values = {
      ...values,
      [itemName]: newValue
    };

    dispatch('input', {
      name: itemName,
      value: newValue,
      values: { ...values }
    });
  }

  function handleChange(event: Event, itemName: string) {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;

    dispatch('change', {
      name: itemName,
      value: newValue,
      values: { ...values }
    });
  }

  // Generate item ID
  function getItemId(item: DateInputItem): string {
    if (item.id) return item.id;
    if (id) return `${id}-${item.name}`;
    return item.name;
  }

  // Generate item name
  function getItemName(item: DateInputItem): string {
    if (namePrefix) return `${namePrefix}[${item.name}]`;
    return item.name;
  }

  // Get item value
  function getItemValue(item: DateInputItem): string {
    return item.value || values[item.name as keyof DateValues] || '';
  }

  // Get item label
  function getItemLabel(item: DateInputItem): string {
    return item.label || item.name.charAt(0).toUpperCase() + item.name.slice(1);
  }
</script>

<div class="nhsuk-form-group{errorMessage ? ' nhsuk-form-group--error' : ''}{formGroup?.classes ? ` ${formGroup.classes}` : ''}">
  {#if fieldset}
    <fieldset 
      class="nhsuk-fieldset{fieldset.classes ? ` ${fieldset.classes}` : ''}"
      aria-describedby={ariaDescribedBy}
      role="group"
      {...(fieldset.attributes || {})}
    >
      {#if fieldset.legend}
        {#if fieldset.legend.isPageHeading}
          <h1 class="nhsuk-fieldset__legend{fieldset.legend.classes ? ` ${fieldset.legend.classes}` : ''}" {...(fieldset.legend.attributes || {})}>
            {#if fieldset.legend.html}
              {@html fieldset.legend.html}
            {:else}
              {fieldset.legend.text}
            {/if}
          </h1>
        {:else}
          <legend class="nhsuk-fieldset__legend{fieldset.legend.classes ? ` ${fieldset.legend.classes}` : ''}" {...(fieldset.legend.attributes || {})}>
            {#if fieldset.legend.html}
              {@html fieldset.legend.html}
            {:else}
              {fieldset.legend.text}
            {/if}
          </legend>
        {/if}
      {/if}

      <!-- Hint -->
      {#if hint}
        <div class="nhsuk-hint{hint.classes ? ` ${hint.classes}` : ''}" id={hintId} {...(hint.attributes || {})}>
          {#if hint.html}
            {@html hint.html}
          {:else}
            {hint.text}
          {/if}
        </div>
      {/if}

      <!-- Error Message -->
      {#if errorMessage}
        <span class="nhsuk-error-message{errorMessage.classes ? ` ${errorMessage.classes}` : ''}" id={errorId} {...(errorMessage.attributes || {})}>
          <span class="nhsuk-u-visually-hidden">Error:</span>
          {#if errorMessage.html}
            {@html errorMessage.html}
          {:else}
            {errorMessage.text}
          {/if}
        </span>
      {/if}

      <!-- Date Input Container -->
      <div 
        class="nhsuk-date-input{classes ? ` ${classes}` : ''}"
        {id}
        {...attributes}
      >
        {#each dateInputItems as item}
          <div class="nhsuk-date-input__item">
            <label 
              class="nhsuk-label nhsuk-date-input__label"
              for={getItemId(item)}
            >
              {getItemLabel(item)}
            </label>
            <input
              class="nhsuk-input nhsuk-date-input__input{item.classes ? ` ${item.classes}` : ''}"
              id={getItemId(item)}
              name={getItemName(item)}
              type="text"
              value={getItemValue(item)}
              inputmode={item.inputmode || 'numeric'}
              autocomplete={item.autocomplete}
              pattern={item.pattern}
              on:input={(e) => handleInput(e, item.name)}
              on:change={(e) => handleChange(e, item.name)}
              {...(item.attributes || {})}
            />
          </div>
        {/each}
      </div>
    </fieldset>
  {:else}
    <!-- Without Fieldset -->
    
    <!-- Hint -->
    {#if hint}
      <div class="nhsuk-hint{hint.classes ? ` ${hint.classes}` : ''}" id={hintId} {...(hint.attributes || {})}>
        {#if hint.html}
          {@html hint.html}
        {:else}
          {hint.text}
        {/if}
      </div>
    {/if}

    <!-- Error Message -->
    {#if errorMessage}
      <span class="nhsuk-error-message{errorMessage.classes ? ` ${errorMessage.classes}` : ''}" id={errorId} {...(errorMessage.attributes || {})}>
        <span class="nhsuk-u-visually-hidden">Error:</span>
        {#if errorMessage.html}
          {@html errorMessage.html}
        {:else}
          {errorMessage.text}
        {/if}
      </span>
    {/if}

    <!-- Date Input Container -->
    <div 
      class="nhsuk-date-input{classes ? ` ${classes}` : ''}"
      {id}
      aria-describedby={ariaDescribedBy}
      {...attributes}
    >
      {#each dateInputItems as item}
        <div class="nhsuk-date-input__item">
          <label 
            class="nhsuk-label nhsuk-date-input__label"
            for={getItemId(item)}
          >
            {getItemLabel(item)}
          </label>
          <input
            class="nhsuk-input nhsuk-date-input__input{item.classes ? ` ${item.classes}` : ''}"
            id={getItemId(item)}
            name={getItemName(item)}
            type="text"
            value={getItemValue(item)}
            inputmode={item.inputmode || 'numeric'}
            autocomplete={item.autocomplete}
            pattern={item.pattern}
            on:input={(e) => handleInput(e, item.name)}
            on:change={(e) => handleChange(e, item.name)}
            {...(item.attributes || {})}
          />
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  @import '../../core/tools';

  /*
   * Date input component
   *
   * 1. font-size: 0 removes whitespace caused by inline-block
   */

  :global(.nhsuk-date-input) {
    font-size: 0; /* [1] */
    @include nhsuk-clearfix;
  }

  :global(.nhsuk-date-input__item) {
    display: inline-block;
    margin-bottom: 0;
    margin-right: nhsuk-spacing(4);
  }

  :global(.nhsuk-date-input__label) {
    display: block;
  }

  :global(.nhsuk-date-input__input) {
    margin-bottom: 0;
  }
</style>
