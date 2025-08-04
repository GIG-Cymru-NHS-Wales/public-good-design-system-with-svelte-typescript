# Hint

1. Hint.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax with full TypeScript typing

- Supports both text and HTML content

- Handles custom ID, classes, and attributes

- Includes all the responsive typography styles

2. types.ts - TypeScript Types

- Defines the `HintProps` interface with all component options

- All props are optional as the component can work with just text or HTML

- Properly documented with JSDoc comments

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Includes the component name as 'Hint text' to match the original

4. +example.svelte - Examples

- Shows 11 different use cases:

  - Default hint with text

  - Hint with HTML content (bold text example)

  - Hint with custom ID

  - Hint with custom classes

  - Hint with data attributes

  - Hint after different label sizes (default, small, medium)

  - Hint within a fieldset with legend

  - Multiple hints with bullet list

  - Long hint text example

- Includes necessary form element styles for the examples

## Key Implementation Details:

1. Responsive Typography: The hint text scales from 19px on mobile to 22px on desktop

2. Contextual Spacing: 
   - Default margin-bottom of 24px
   - Reduced to 16px when following small labels or legends
   - Negative top margin when following a fieldset legend

3. Flexible Content: Supports both plain text and HTML content, with HTML taking precedence

4. Color: Uses the NHS UK secondary text color (#425563)

5. Global Selectors: Uses `:global()` for the contextual spacing rules that depend on preceding elements

The component assumes you have:

- A `parseAttributes` utility function in `$lib/utils/attributes.js` to handle attribute spreading

- The NHS UK font family (Frutiger W01) available
