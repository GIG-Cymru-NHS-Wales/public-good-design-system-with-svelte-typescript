<!-- CharacterCount.svelte -->
<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';

  interface LabelOptions {
    text?: string;
    html?: string;
    classes?: string;
    isPageHeading?: boolean;
    attributes?: Record<string, string>;
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

  interface CountMessageOptions {
    classes?: string;
  }

  interface Props {
    /** The ID of the textarea. Defaults to the value of name. */
    id?: string;
    /** The name of the textarea, which is submitted with the form data. */
    name: string;
    /** Optional number of textarea rows (default is 5 rows). */
    rows?: number;
    /** Optional initial value of the textarea. */
    value?: string;
    /** Options for the label component. */
    label: LabelOptions;
    /** Options for the hint component. */
    hint?: HintOptions;
    /** Options for the error message component. */
    errorMessage?: ErrorMessageOptions;
    /** Additional options for the form group containing the character count component. */
    formGroup?: FormGroupOptions;
    /** Optional additional classes to add to the textarea tag. Separate each class with a space. */
    classes?: string;
    /** The maximum number of characters. If maxwords is provided, the maxlength argument will be ignored. */
    maxlength?: number;
    /** The maximum number of words. If maxwords is provided, the maxlength argument will be ignored. */
    maxwords?: number;
    /** The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default. */
    threshold?: number;
    /** Optional field to enable or disable the spellcheck attribute on the textarea. */
    spellcheck?: boolean;
    /** Any extra HTML attributes (for example data attributes) to add to the textarea tag. */
    attributes?: Record<string, string>;
    /** Additional options for the count message used by the character count component. */
    countMessage?: CountMessageOptions;
  }

  let {
    id = '',
    name,
    rows = 5,
    value = $bindable(''),
    label,
    hint,
    errorMessage,
    formGroup,
    classes = '',
    maxlength,
    maxwords,
    threshold = 0,
    spellcheck,
    attributes = {},
    countMessage
  }: Props = $props();

  const dispatch = createEventDispatcher<{
    input: Event;
    focus: FocusEvent;
    blur: FocusEvent;
    change: Event;
  }>();

  // Set ID if not provided
  const elementId = $derived(id || name);
  const infoId = $derived(`${elementId}-info`);

  // Determine if we're counting words or characters
  const isWordCount = $derived(!!maxwords);
  const limit = $derived(maxwords || maxlength || 0);

  // State management
  let textareaElement: HTMLTextAreaElement;
  let lastInputTimestamp: number | null = null;
  let valueChecker: ReturnType<typeof setInterval> | null = null;
  let oldValue = '';

  // Count characters or words
  function count(text: string): number {
    if (isWordCount) {
      const tokens = text.match(/\S+/g) || [];
      return tokens.length;
    }
    return text.length;
  }

  // Calculate remaining count
  const remainingCount = $derived(() => {
    const currentCount = count(value);
    return limit - currentCount;
  });

  // Check if over threshold
  const isOverThreshold = $derived(() => {
    const currentCount = count(value);
    const thresholdValue = (limit * threshold) / 100;
    return thresholdValue <= currentCount;
  });

  // Check if over limit
  const isOverLimit = $derived(() => remainingCount < 0);

  // Format the update message
  const formattedMessage = $derived(() => {
    const remaining = remainingCount;
    const displayNumber = Math.abs(remaining);

    let noun = isWordCount ? 'word' : 'character';
    noun += displayNumber === 1 ? '' : 's';

    const verb = remaining < 0 ? 'too many' : 'remaining';

    return `You have ${displayNumber} ${noun} ${verb}`;
  });

  // Determine textarea classes
  const textareaClasses = $derived(() => {
    const classList = ['nhsuk-textarea', 'nhsuk-js-character-count'];
    if (errorMessage || isOverLimit) classList.push('nhsuk-textarea--error');
    if (classes) classList.push(classes);
    return classList.join(' ');
  });

  // Determine count message classes
  const countClasses = $derived(() => {
    const classList = ['nhsuk-character-count__status'];
    if (isOverLimit) {
      classList.push('nhsuk-error-message');
    } else {
      classList.push('nhsuk-hint');
    }
    if (countMessage?.classes) classList.push(countMessage.classes);
    return classList.join(' ');
  });

  // Determine visibility classes for count message
  const countVisibilityClasses = $derived(() => {
    return !isOverThreshold ? 'nhsuk-character-count__message--disabled' : '';
  });

  // Static fallback message
  const staticMessage = $derived(() => {
    const noun = isWordCount ? 'words' : 'characters';
    return `You can enter up to ${limit} ${noun}`;
  });

  // Handle input events
  function handleInput(event: Event) {
    lastInputTimestamp = Date.now();
    dispatch('input', event);
  }

  function handleFocus(event: FocusEvent) {
    // Start polling for changes (for speech recognition software)
    valueChecker = setInterval(() => {
      if (!lastInputTimestamp || Date.now() - 500 >= lastInputTimestamp) {
        checkIfValueChanged();
      }
    }, 1000);

    dispatch('focus', event);
  }

  function handleBlur(event: FocusEvent) {
    // Stop polling
    if (valueChecker) {
      clearInterval(valueChecker);
      valueChecker = null;
    }

    dispatch('blur', event);
  }

  function handleChange(event: Event) {
    dispatch('change', event);
  }

  // Check if value changed (for speech recognition software)
  function checkIfValueChanged() {
    if (textareaElement && textareaElement.value !== oldValue) {
      oldValue = textareaElement.value;
      value = textareaElement.value;
    }
  }

  // Handle pageshow event for browser back navigation
  function handlePageShow() {
    if (textareaElement) {
      value = textareaElement.value;
    }
  }

  onMount(() => {
    // Set initial old value
    oldValue = value;

    // Handle browser back navigation
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  });

  onDestroy(() => {
    if (valueChecker) {
      clearInterval(valueChecker);
    }
  });
</script>

<div
  class="nhsuk-character-count"
  data-module="nhsuk-character-count"
  data-maxlength={maxlength}
  data-maxwords={maxwords}
  data-threshold={threshold}
>
  <div class="nhsuk-form-group{formGroup?.classes ? ` ${formGroup.classes}` : ''}">
    <!-- Label -->
    {#if label.html}
      <label class="nhsuk-label{label.classes ? ` ${label.classes}` : ''}" for={elementId} {...(label.attributes || {})}>
        {@html label.html}
      </label>
    {:else}
      <label class="nhsuk-label{label.classes ? ` ${label.classes}` : ''}" for={elementId} {...(label.attributes || {})}>
        {label.text}
      </label>
    {/if}

    <!-- Hint -->
    {#if hint}
      <div class="nhsuk-hint{hint.classes ? ` ${hint.classes}` : ''}" {...(hint.attributes || {})}>
        {#if hint.html}
          {@html hint.html}
        {:else}
          {hint.text}
        {/if}
      </div>
    {/if}

    <!-- Error Message -->
    {#if errorMessage}
      <span class="nhsuk-error-message{errorMessage.classes ? ` ${errorMessage.classes}` : ''}" {...(errorMessage.attributes || {})}>
        <span class="nhsuk-u-visually-hidden">Error:</span>
        {#if errorMessage.html}
          {@html errorMessage.html}
        {:else}
          {errorMessage.text}
        {/if}
      </span>
    {/if}

    <!-- Textarea -->
    <textarea
      bind:this={textareaElement}
      bind:value
      class={textareaClasses}
      {name}
      id={elementId}
      {rows}
      {spellcheck}
      aria-describedby={infoId}
      on:input={handleInput}
      on:focus={handleFocus}
      on:blur={handleBlur}
      on:change={handleChange}
      {...attributes}
    ></textarea>

    <!-- Static fallback message (hidden when JS runs) -->
    <div
      class="nhsuk-hint nhsuk-character-count__message nhsuk-u-visually-hidden{countMessage?.classes ? ` ${countMessage.classes}` : ''}"
      id={infoId}
    >
      {staticMessage}
    </div>

    <!-- Dynamic count message (visible) -->
    <div
      class="{countClasses} {countVisibilityClasses}"
      aria-hidden="true"
    >
      {formattedMessage}
    </div>

    <!-- Screen reader count message -->
    <div
      class="nhsuk-character-count__sr-status nhsuk-u-visually-hidden"
      aria-live="polite"
      aria-hidden={!isOverThreshold}
    >
      {formattedMessage}
    </div>
  </div>
</div>

<style>
  @import '../../core/tools';

  :global(.nhsuk-character-count) {
    @include nhsuk-responsive-margin(6, "bottom");

    .nhsuk-form-group,
    .nhsuk-textarea {
      margin-bottom: nhsuk-spacing(1);
    }
  }

  :global(.nhsuk-character-count__message) {
    margin-bottom: 0;
    margin-top: 0;
  }

  :global(.nhsuk-character-count__message--disabled) {
    visibility: hidden;
  }

  :global(.nhsuk-character-count__status) {
    margin-bottom: 0;
    margin-top: 0;
  }

  :global(.nhsuk-character-count__sr-status) {
    margin-bottom: 0;
    margin-top: 0;
  }
</style>
