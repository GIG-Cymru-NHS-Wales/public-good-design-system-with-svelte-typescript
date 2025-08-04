# Input

1. Input.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax with full TypeScript typing

- Supports all input features: label, hint, error messages, prefix/suffix

- Handles dynamic ID generation and aria-describedby attributes

- Two-way binding with `bind:value`

- Responsive wrapper for prefix/suffix on mobile

- All width modifier classes (width-2 through width-30)

2. types.ts - TypeScript Types

- Comprehensive type definitions for all component props

- Separate interfaces for:

  - `LabelOptions` - Label configuration

  - `HintOptions` - Hint text configuration

  - `ErrorMessageOptions` - Error message configuration

  - `FormGroupOptions` - Form group styling

  - `InputProps` - Main component props

- All props properly documented with JSDoc comments

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Marks label, hint, and errorMessage as component dependencies

4. +example.svelte - Examples

- Shows 13 different use cases:

  - Default input

  - Input with hint text

  - Input with error message

  - All width modifiers (2-30 characters)

  - Input with prefix (£)

  - Input with suffix (kg)

  - Input with both prefix and suffix

  - Input with autocomplete

  - Error state with prefix/suffix

  - Different input types (email, password, tel, date, number)

  - Custom attributes

  - HTML labels and hints

- Interactive examples with value binding display

## Key Implementation Details:

1. Form Group Container: Wraps the entire input with label, hint, and error message

2. Accessibility:

   - Automatic ID generation from name if not provided

   - Proper aria-describedby linking for hints and errors

   - Semantic HTML structure

3. Error Handling:

   - Visual error state with red border

   - Error message display

   - Form group error styling with left border

4. Prefix/Suffix:

   - Flexible wrapper that switches from flex to block on mobile

   - Proper border handling for seamless appearance

   - aria-hidden on decorative elements

5. Width Modifiers:

   - Based on ex units for character-based sizing

   - Accounts for Safari's prefill icon with extra space

6. Input Types:

   - Supports all HTML5 input types

   - Special handling for number inputs (removes spinners)

   - Proper inputmode attribute support

7. Spellcheck Handling:

   - Converts boolean to string values for HTML attribute

   - Only sets attribute when explicitly true or false

## CSS Features:

1. Responsive Typography: Font sizes scale from 19px to 22px

2. Focus States: 
   - Yellow outline (#ffeb3b) with 4px width
   - Inset box shadow for additional emphasis
   - Z-index management for prefix/suffix layouts

3. Error States:
   - 4px red border on input
   - 5px left border on form group
   - 15px left padding for error indicator

4. Browser Compatibility:
   - Removes default appearance in all browsers
   - Handles webkit spin buttons for number inputs
   - Firefox-specific textfield appearance for numbers

5. Mobile Optimization:
   - Prefix/suffix stack vertically on small screens
   - Input takes full width in stacked layout
   - Proper border adjustments for stacked elements

## Component Dependencies:

The component imports and uses:
- `Label` component for input labels
- `Hint` component for hint text
- `ErrorMessage` component for error display

Note: You'll need to ensure these components are also converted to Svelte 5 or create placeholder versions.

## Usage Example:

```svelte
<Input
  label={{ text: 'NHS number', classes: 'nhsuk-label--l' }}
  hint={{ text: "It's a 10-digit number" }}
  name="nhs-number"
  classes="nhsuk-input--width-10"
  errorMessage={{ text: 'Enter a valid NHS number' }}
  bind:value={nhsNumber}
/>
```
