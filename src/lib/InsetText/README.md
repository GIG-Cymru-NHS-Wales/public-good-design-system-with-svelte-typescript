# InsetText

1. InsetText.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax with full TypeScript typing

- Supports three content methods: children (snippets), HTML, or plain text

- Includes the visually hidden "Information:" text for screen readers

- Handles custom classes and attributes

- Max-width constraint for optimal readability (44em)

2. types.ts - TypeScript Types

- Defines the `InsetTextProps` interface with all component options

- Uses Svelte 5's `Snippet` type for the children prop

- All props are optional, allowing flexible usage

- Properly documented with JSDoc comments

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Component name is 'Inset text' to match the original

4. +example.svelte - Examples

- Shows 12 different use cases:

  - Default with snippet content

  - Simple text

  - HTML content

  - Multiple paragraphs

  - With lists (unordered and ordered)

  - With headings

  - Custom classes

  - Custom attributes

  - Complex content with mixed elements

  - Warning notices

  - Mixed content types

  - Nested elements

## Key Implementation Details:

1. Border and Spacing:
   - 10px blue left border (#005eb8)
   - Responsive padding (24px mobile, 32px desktop)
   - Responsive margins (40px mobile, 56px desktop)

2. Content Handling:
   - Priority order: children > html > text
   - Automatic paragraph wrapping for plain text
   - First/last child margin removal for proper spacing

3. Typography:
   - All text content scales responsively
   - Proper link styling with focus states
   - Support for headings, paragraphs, and lists

4. Accessibility:
   - Hidden "Information:" prefix for screen readers
   - Semantic HTML structure
   - High contrast focus states

5. Print Styles:
   - Border color changes to print-friendly color

## CSS Features:

1. Reading Width: Maximum width of 44em for optimal line length
2. Responsive Design: Font sizes and spacing adapt to screen size
3. Content Styles: Global selectors for all child elements
4. Focus States: Yellow background with black outline for links

## Usage Example:

```svelte
<!-- Using snippet (recommended for complex content) -->
<InsetText>
  <p>Important information goes here with <a href="#">links</a>.</p>
</InsetText>

<!-- Using text prop -->
<InsetText text="Simple text content" />

<!-- Using HTML prop -->
<InsetText html="<p>HTML content with <strong>formatting</strong></p>" />
```

The component assumes you have:

- A `parseAttributes` utility function in `$lib/utils/attributes.js`

- The NHS UK font family (Frutiger W01) available
