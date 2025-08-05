# Radios

1. Radios.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax with full TypeScript typing

- Implements two-way binding with `$bindable()` for the selected value

- Handles conditional reveals with reactive state management

- Supports all features: fieldset wrapper, hints, errors, dividers, inline layout

- Includes JavaScript behavior for conditional content show/hide

- Handles browser back button properly with pageshow event

2. types.ts - TypeScript Types

- Comprehensive type definitions for all component options

- Separate interfaces for:

  - `RadioItem` - Individual radio button configuration

  - `FieldsetOptions` - Fieldset wrapper options

  - `ConditionalOptions` - Conditional content configuration

  - Supporting types for hints, errors, labels, etc.

- All properly documented with JSDoc comments

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Marks fieldset, hint, errorMessage, and label as component dependencies


4. +example.svelte - Examples

- Shows 12 different use cases:

  - Default radios with fieldset

  - Radios with item hints

  - Disabled radios

  - Inline layout

  - Error states

  - Divider between options

  - Conditional content reveals

  - Without fieldset

  - Different legend sizes

  - HTML labels

  - Custom attributes

  - Complex form example

## Key Implementation Details:

1. Radio Button Mechanics:
   - 48px circular touch target
   - Custom styled radio with CSS pseudo-elements
   - 10px blue dot when selected
   - Focus ring with 5px yellow outline

2. Conditional Reveals:
   - JavaScript-powered show/hide functionality
   - Proper ARIA attributes (aria-controls, aria-expanded)
   - Smooth transitions with display toggle
   - Left border indicator for conditional content

3. Layout Options:
   - Default stacked layout
   - Inline layout for desktop (floated items)
   - Divider support for visual separation

4. Accessibility:
   - Proper labeling and ARIA attributes
   - Keyboard navigation support
   - Screen reader friendly hints
   - Disabled state handling

5. State Management:
   - Two-way binding for selected value
   - Reactive conditional state tracking
   - Handles initial checked states properly

## CSS Features:

1. Touch-Friendly Design: 48px touch targets on all devices
2. Focus States: Clear visual feedback with yellow ring
3. Disabled States: 50% opacity for disabled items
4. Responsive Typography: Scales from 19px to 22px
5. Conditional Styling: 4px blue left border for revealed content

## Usage Example:

```svelte
<script>
  let contactMethod = $state('');
</script>

<Radios
  bind:value={contactMethod}
  name="contact"
  fieldset={{
    legend: {
      text: 'How would you prefer to be contacted?',
      classes: 'nhsuk-fieldset__legend--l'
    }
  }}
  items={[
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: '<input type="email" placeholder="Email address">'
      }
    },
    {
      value: 'phone',
      text: 'Phone'
    }
  ]}
/>
```

The component assumes you have:
- A `parseAttributes` utility function in `$lib/utils/attributes.js`
- Related components: Fieldset, Hint, ErrorMessage, Label
- The NHS UK font family (Frutiger W01) available
