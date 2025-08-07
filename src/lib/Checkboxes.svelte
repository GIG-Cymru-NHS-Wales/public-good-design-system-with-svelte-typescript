<!-- Checkboxes.svelte -->
<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';

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

  interface LabelOptions {
    classes?: string;
    attributes?: Record<string, string>;
  }

  interface ConditionalOptions {
    html: string;
  }

  interface CheckboxItem {
    text?: string;
    html?: string;
    id?: string;
    name?: string;
    label?: LabelOptions;
    value: string;
    divider?: string;
    hint?: HintOptions;
    checked?: boolean;
    conditional?: ConditionalOptions;
    disabled?: boolean;
    attributes?: Record<string, string>;
    exclusive?: boolean;
    exclusiveGroup?: string;
  }

  interface Props {
    /** One or more element IDs to add to the input aria-describedby attribute without a fieldset */
    describedBy?: string;
    /** Options for the fieldset component */
    fieldset?: FieldsetOptions;
    /** Options for the hint component */
    hint?: HintOptions;
    /** Options for the error message component */
    errorMessage?: ErrorMessageOptions;
    /** Additional options for the form group */
    formGroup?: FormGroupOptions;
    /** String to prefix id for each checkbox item */
    idPrefix?: string;
    /** Name attribute for all checkbox items */
    name: string;
    /** Array of checkbox items objects */
    items: CheckboxItem[];
    /** Array of values for checkboxes which should be checked when the page loads */
    values?: string[];
    /** Classes to add to the checkboxes container */
    classes?: string;
    /** HTML attributes to add to the container */
    attributes?: Record<string, string>;
  }

  let {
    describedBy = '',
    fieldset,
    hint,
    errorMessage,
    formGroup,
    idPrefix = '',
    name,
    items,
    values = $bindable([]),
    classes = '',
    attributes = {}
  }: Props = $props();

  const dispatch = createEventDispatcher<{
    change: { value: string; checked: boolean; values: string[] };
  }>();

  // Determine if any items have conditional content
  const hasConditional = $derived(items.some(item => item.conditional && !item.divider));

  // Generate IDs for accessibility
  const prefix = $derived(idPrefix || name);
  const hintId = $derived(`${prefix}-hint`);
  const errorId = $derived(`${prefix}-error`);

  // Build describedBy string for accessibility
  const ariaDescribedBy = $derived(() => {
    const parts = [];
    if (describedBy) parts.push(describedBy);
    if (fieldset?.describedBy) parts.push(fieldset.describedBy);
    if (hint) parts.push(hintId);
    if (errorMessage) parts.push(errorId);
    return parts.join(' ').trim() || undefined;
  });

  // Track which conditional content is visible
  let conditionalStates: Record<string, boolean> = $state({});

  // Initialize conditional states based on checked values
  function initializeConditionalStates() {
    const newStates: Record<string, boolean> = {};
    items.forEach((item, index) => {
      if (item.conditional && !item.divider) {
        const itemId = item.id || `${prefix}${index > 0 ? `-${index + 1}` : ''}`;
        const isChecked = values.includes(item.value) || item.checked || false;
        newStates[itemId] = isChecked;
      }
    });
    conditionalStates = newStates;
  }

  // Handle checkbox change
  function handleChange(event: Event, item: CheckboxItem, itemId: string) {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    let newValues = [...values];

    if (isChecked) {
      // Add value if not already present
      if (!newValues.includes(item.value)) {
        newValues.push(item.value);
      }

      // Handle exclusive behavior
      if (item.exclusive && item.exclusiveGroup) {
        // Uncheck all other items in the same exclusive group
        newValues = newValues.filter(value => {
          const otherItem = items.find(i => i.value === value && i.exclusiveGroup === item.exclusiveGroup);
          return !otherItem || otherItem.value === item.value;
        });

        // Update conditional states for unchecked items
        items.forEach((otherItem, index) => {
          if (otherItem.exclusiveGroup === item.exclusiveGroup && otherItem.value !== item.value) {
            const otherId = otherItem.id || `${prefix}${index > 0 ? `-${index + 1}` : ''}`;
            if (conditionalStates[otherId] !== undefined) {
              conditionalStates[otherId] = false;
            }
          }
        });
      } else if (item.exclusiveGroup) {
        // Uncheck exclusive items in the same group
        const exclusiveItems = items.filter(i =>
          i.exclusive &&
          i.exclusiveGroup === item.exclusiveGroup
        );

        exclusiveItems.forEach(exclusiveItem => {
          newValues = newValues.filter(v => v !== exclusiveItem.value);
          const exclusiveIndex = items.indexOf(exclusiveItem);
          const exclusiveId = exclusiveItem.id || `${prefix}${exclusiveIndex > 0 ? `-${exclusiveIndex + 1}` : ''}`;
          if (conditionalStates[exclusiveId] !== undefined) {
            conditionalStates[exclusiveId] = false;
          }
        });
      }
    } else {
      // Remove value
      newValues = newValues.filter(v => v !== item.value);
    }

    // Update conditional state
    if (item.conditional) {
      conditionalStates[itemId] = isChecked;
    }

    values = newValues;

    dispatch('change', {
      value: item.value,
      checked: isChecked,
      values: newValues
    });
  }

  // Handle page show event for browser back navigation
  function handlePageShow() {
    initializeConditionalStates();
  }

  onMount(() => {
    initializeConditionalStates();
    window.addEventListener('pageshow', handlePageShow);
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('pageshow', handlePageShow);
    }
  });
</script>

<div class="nhsuk-form-group{errorMessage ? ' nhsuk-form-group--error' : ''}{formGroup?.classes ? ` ${formGroup.classes}` : ''}">
  {#if fieldset}
    <fieldset
      class="nhsuk-fieldset{fieldset.classes ? ` ${fieldset.classes}` : ''}"
      aria-describedby={ariaDescribedBy}
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

      <!-- Checkboxes Container -->
      <div
        class="nhsuk-checkboxes{hasConditional ? ' nhsuk-checkboxes--conditional' : ''}{classes ? ` ${classes}` : ''}"
        data-module="nhsuk-checkboxes"
        {...attributes}
      >
        {#each items as item, index}
          {@const itemId = item.id || `${prefix}${index > 0 ? `-${index + 1}` : ''}`}
          {@const itemName = item.name || name}
          {@const conditionalId = `conditional-${itemId}`}
          {@const hasHint = !!(item.hint?.text || item.hint?.html)}
          {@const itemHintId = `${itemId}-item-hint`}
          {@const isChecked = values.includes(item.value) || item.checked || false}

          {#if item.divider}
            <div class="nhsuk-checkboxes__divider">{item.divider}</div>
          {:else}
            <div class="nhsuk-checkboxes__item">
              <input
                class="nhsuk-checkboxes__input"
                id={itemId}
                name={itemName}
                type="checkbox"
                value={item.value}
                checked={isChecked}
                disabled={item.disabled}
                aria-controls={item.conditional ? conditionalId : undefined}
                aria-expanded={item.conditional ? (conditionalStates[itemId] || false) : undefined}
                aria-describedby={hasHint ? itemHintId : undefined}
                data-checkbox-exclusive={item.exclusive || undefined}
                data-checkbox-exclusive-group={item.exclusiveGroup || undefined}
                on:change={(e) => handleChange(e, item, itemId)}
                {...(item.attributes || {})}
              />

              <label
                class="nhsuk-checkboxes__label{item.label?.classes ? ` ${item.label.classes}` : ''}"
                for={itemId}
                {...(item.label?.attributes || {})}
              >
                {#if item.html}
                  {@html item.html}
                {:else}
                  {item.text}
                {/if}
              </label>

              {#if hasHint}
                <div
                  class="nhsuk-hint nhsuk-checkboxes__hint{item.hint?.classes ? ` ${item.hint.classes}` : ''}"
                  id={itemHintId}
                  {...(item.hint?.attributes || {})}
                >
                  {#if item.hint?.html}
                    {@html item.hint.html}
                  {:else}
                    {item.hint?.text}
                  {/if}
                </div>
              {/if}
            </div>

            {#if item.conditional}
              <div
                class="nhsuk-checkboxes__conditional{!conditionalStates[itemId] ? ' nhsuk-checkboxes__conditional--hidden' : ''}"
                id={conditionalId}
              >
                {@html item.conditional.html}
              </div>
            {/if}
          {/if}
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

    <!-- Checkboxes Container -->
    <div
      class="nhsuk-checkboxes{hasConditional ? ' nhsuk-checkboxes--conditional' : ''}{classes ? ` ${classes}` : ''}"
      data-module="nhsuk-checkboxes"
      aria-describedby={ariaDescribedBy}
      {...attributes}
    >
      {#each items as item, index}
        {@const itemId = item.id || `${prefix}${index > 0 ? `-${index + 1}` : ''}`}
        {@const itemName = item.name || name}
        {@const conditionalId = `conditional-${itemId}`}
        {@const hasHint = !!(item.hint?.text || item.hint?.html)}
        {@const itemHintId = `${itemId}-item-hint`}
        {@const isChecked = values.includes(item.value) || item.checked || false}

        {#if item.divider}
          <div class="nhsuk-checkboxes__divider">{item.divider}</div>
        {:else}
          <div class="nhsuk-checkboxes__item">
            <input
              class="nhsuk-checkboxes__input"
              id={itemId}
              name={itemName}
              type="checkbox"
              value={item.value}
              checked={isChecked}
              disabled={item.disabled}
              aria-controls={item.conditional ? conditionalId : undefined}
              aria-expanded={item.conditional ? (conditionalStates[itemId] || false) : undefined}
              aria-describedby={hasHint ? itemHintId : undefined}
              data-checkbox-exclusive={item.exclusive || undefined}
              data-checkbox-exclusive-group={item.exclusiveGroup || undefined}
              on:change={(e) => handleChange(e, item, itemId)}
              {...(item.attributes || {})}
            />

            <label
              class="nhsuk-checkboxes__label{item.label?.classes ? ` ${item.label.classes}` : ''}"
              for={itemId}
              {...(item.label?.attributes || {})}
            >
              {#if item.html}
                {@html item.html}
              {:else}
                {item.text}
              {/if}
            </label>

            {#if hasHint}
              <div
                class="nhsuk-hint nhsuk-checkboxes__hint{item.hint?.classes ? ` ${item.hint.classes}` : ''}"
                id={itemHintId}
                {...(item.hint?.attributes || {})}
              >
                {#if item.hint?.html}
                  {@html item.hint.html}
                {:else}
                  {item.hint?.text}
                {/if}
              </div>
            {/if}
          </div>

          {#if item.conditional}
            <div
              class="nhsuk-checkboxes__conditional{!conditionalStates[itemId] ? ' nhsuk-checkboxes__conditional--hidden' : ''}"
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
  @import '../../core/settings';
  @import '../../core/tools';

  /*
   * Checkboxes component
   *
   * 1. remove 300ms pause on mobile.
   * 2. Fix bug in IE11 caused by transform rotate (-45deg).
   */

  $nhsuk-checkboxes-size: nhsuk-spacing(6);
  $nhsuk-checkboxes-label-padding-left-right: 12px;

  :global(.nhsuk-checkboxes__item) {
    clear: left;
    display: block;
    margin-bottom: nhsuk-spacing(2);
    min-height: $nhsuk-checkboxes-size;
    padding: 0 0 0 $nhsuk-checkboxes-size;
    position: relative;

    @include nhsuk-font(19);
  }

  :global(.nhsuk-checkboxes__item:last-child),
  :global(.nhsuk-checkboxes__item:last-of-type) {
    margin-bottom: 0;
  }

  :global(.nhsuk-checkboxes__input) {
    cursor: pointer;
    height: $nhsuk-checkboxes-size;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: $nhsuk-checkboxes-size;
    z-index: 1;
  }

  :global(.nhsuk-checkboxes__label) {
    cursor: pointer;
    display: inline-block;
    margin-bottom: 0;
    padding: 8px $nhsuk-checkboxes-label-padding-left-right nhsuk-spacing(1);
    -ms-touch-action: manipulation; /* [1] */
    touch-action: manipulation;
  }

  :global(.nhsuk-checkboxes__hint) {
    display: block;
    padding-left: $nhsuk-checkboxes-label-padding-left-right;
    padding-right: $nhsuk-checkboxes-label-padding-left-right;
  }

  :global(.nhsuk-checkboxes__input + .nhsuk-checkboxes__label::before) {
    background: $nhsuk-form-element-background-color;
    border: $nhsuk-border-width-form-element solid $nhsuk-form-border-color;
    box-sizing: border-box;
    content: "";
    height: $nhsuk-checkboxes-size;
    left: 0;
    position: absolute;
    top: 0;
    width: $nhsuk-checkboxes-size;
  }

  :global(.nhsuk-checkboxes__input + .nhsuk-checkboxes__label::after) {
    background: transparent;
    border: solid;
    border-top-color: transparent;
    border-width: 0 0 $nhsuk-border-width $nhsuk-border-width;
    content: "";
    height: 10px;
    left: 10px;
    opacity: 0; /* [2] */
    position: absolute;
    top: 13px;
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: 22px;
  }

  /* Focus state */

  :global(.nhsuk-checkboxes__input:focus + .nhsuk-checkboxes__label::before) {
    @include nhsuk-focused-checkbox;
  }

  /* Selected state */

  :global(.nhsuk-checkboxes__input:checked + .nhsuk-checkboxes__label::after) {
    opacity: 1;
  }

  /* Disabled state */

  :global(.nhsuk-checkboxes__input:disabled),
  :global(.nhsuk-checkboxes__input:disabled + .nhsuk-checkboxes__label) {
    cursor: default;
  }

  :global(.nhsuk-checkboxes__input:disabled + .nhsuk-checkboxes__label) {
    opacity: 0.5;
  }

  /* Divider variant */

  :global(.nhsuk-checkboxes__divider) {
    $nhsuk-divider-size: $nhsuk-checkboxes-size !default;

    color: $nhsuk-text-color;
    margin-bottom: nhsuk-spacing(2);
    text-align: center;
    width: $nhsuk-divider-size;

    @include nhsuk-font(19);
  }

  /* Conditional content */

  :global(.nhsuk-checkboxes__conditional) {
    $conditional-border-width: $nhsuk-border-width-mobile;
    $conditional-border-padding: math.div($nhsuk-checkboxes-size, 2) - math.div($conditional-border-width, 2);
    $conditional-margin-left: $conditional-border-padding;
    $conditional-padding-left: $conditional-border-padding + $nhsuk-checkboxes-label-padding-left-right;

    border-left: $conditional-border-width solid $nhsuk-form-border-color;
    margin-left: $conditional-margin-left;
    padding-left: $conditional-padding-left;
    @include nhsuk-responsive-margin(4, "bottom");

    & > :last-child {
      margin-bottom: 0;
    }
  }

  :global(.nhsuk-frontend-supported .nhsuk-checkboxes__conditional--hidden) {
    display: none;
  }
</style>
