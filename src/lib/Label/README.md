# Label

1. Label.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax with full TypeScript typing

- Handles the `for` attribute (renamed to `htmlFor` in props to avoid JavaScript reserved word)

- Supports both text and HTML content

- Implements the `isPageHeading` feature that wraps the label in an `<h1>`

- Only renders if there's content (text or html)

2. types.ts - TypeScript Types

- Defines the `LabelProps` interface with all component options

- Uses `for` as the prop name (matching the original) but it's destructured as `htmlFor` in the component

- All props except content are optional

- Properly documented with JSDoc comments

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Reflects that either `text` or `html` is required

4. +example.svelte - Examples

- Shows 11 different use cases:

  - Default label

  - Bold text (small)

  - Label as page heading (extra large)

  - All size variations (xl, l, m, s, default)

  - HTML content with visually hidden text

  - Custom classes

  - Custom attributes

  - Multiple labels in a form

  - Labels for different input types (select, textarea, radio)

  - Label without for attribute (not recommended)

## Key Implementation Details:

1. Size Modifiers:
   - `nhsuk-label--xl`: 48px (desktop) / 32px (mobile)
   - `nhsuk-label--l`: 36px (desktop) / 24px (mobile)
   - `nhsuk-label--m`: 26px (desktop) / 20px (mobile)
   - `nhsuk-label--s`: 22px (desktop) / 19px (mobile) - bold
   - Default: 22px (desktop) / 19px (mobile)

2. Page Heading Feature:
   - When `isPageHeading` is true, the label is wrapped in an `<h1>`
   - The wrapper has no margins to maintain proper spacing

3. Typography:
   - Uses NHS UK font stack
   - Responsive font sizes with rem units
   - Proper line heights for readability

4. Spacing:
   - Default bottom margin of 5px
   - Larger labels (xl, l, m) have 24px bottom margin

5. Accessibility:
   - Proper `for` attribute linking to form controls
   - Support for HTML content allows for visually hidden elements

## CSS Features:

1. Global Selectors: Used for size modifiers to allow them to be applied via the `classes` prop
2. Responsive Design: All sizes have mobile and desktop variants
3. Font Weights: Bold for heading-style labels (xl, l, m, s)
4. Inheritance: Label wrapper inherits font properties when used

## Usage Examples:

```svelte
<!-- Basic label -->
<Label text="NHS number" for="nhs-number" />

<!-- Large label as page heading -->
<Label
  text="What is your NHS number?"
  classes="nhsuk-label--xl"
  isPageHeading={true}
  for="nhs-number"
/>

<!-- Label with HTML content -->
<Label
  html="Email <span class='nhsuk-u-visually-hidden'>(required)</span>"
  for="email"
/>
```

The component assumes you have:

- A `parseAttributes` utility function in `$lib/utils/attributes.js`

- The NHS UK font family (Frutiger W01) available
