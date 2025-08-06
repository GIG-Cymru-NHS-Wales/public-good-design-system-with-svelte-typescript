# Select

1. Select.svelte - Main Component

- Uses Svelte 5's new $props() syntax with full TypeScript typing

- Implements two-way binding with bind:value and $bindable()

- Handles dynamic ID generation and aria-describedby attributes

- Supports all features: label, hint, error messages, disabled state

- Properly handles options with or without explicit values

2. types.ts - TypeScript Types

-  Comprehensive type definitions for all component props

-  Separate interfaces for:

  - SelectItem - Individual option configuration

  - LabelOptions, HintOptions, ErrorMessageOptions - Component options

  - FormGroupOptions - Form group wrapper options

  - SelectProps - Main component props

- All properly documented with JSDoc comments

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Marks label, hint, and errorMessage as component dependencies

4. +example.svelte - Examples

- Shows 10 different use cases:

- Default select with pre-selected value
- Select with disabled options
- Select with hint text
- Select with error message
- Options without explicit values
- Disabled select
- Custom classes and attributes
- Select without label
- Multiple selects in a form (date picker)
- Long country list example

## Key Implementation Details:

Select Styling:

- White background with 2px border
- Fixed height of 2.5rem for consistency
- Minimum width of 23ex for usability
- Responsive font sizing

Focus States:

- Yellow outline (#ffeb3b) with 4px width
- Inset box shadow for additional emphasis
- Proper outline offset

Selected Option Styling:

- Blue background (#005eb8) with white text
- Works across browsers including IE/Edge

Error States:

- 4px red border for error state
- Form group with left border indicator

Value Handling:

- Supports options with explicit values
- Falls back to text content when no value specified
