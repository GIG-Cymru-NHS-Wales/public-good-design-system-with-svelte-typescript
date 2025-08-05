# Pagination

1. Pagination.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax with full TypeScript typing

- Conditionally renders previous and next links based on provided props

- Includes SVG arrow icons positioned correctly

- Maintains all accessibility features (aria-label, visually hidden colons)

2. types.ts - TypeScript Types

- Defines the `PaginationProps` interface with all component options

- All props are optional to allow flexible usage (only previous, only next, or both)

- Properly documented with JSDoc comments

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Notes that previousUrl/previousPage and nextUrl/nextPage are required as pairs

4. +example.svelte - Examples

- Shows 12 different use cases:

  - Default pagination with both links

  - Only previous link

  - Only next link

  - Long page titles

  - Custom classes

  - Custom attributes

  - Article navigation

  - Guide navigation

  - Search results pagination

  - Chapter navigation

  - Form steps navigation

  - Minimal text version

## Key Implementation Details:

1. Layout:
   - Previous link floats left (50% width)
   - Next link floats right (50% width)
   - Clearfix on the list container

2. Icons:
   - SVG arrows positioned absolutely
   - Left arrow offset by -6px
   - Right arrow offset by -6px
   - Icons inherit color from link

3. Typography:
   - Title: 26px (desktop) / 20px (mobile)
   - Page name: 19px (desktop) / 16px (mobile)
   - Page name underlined by default, removed on hover/focus

4. Accessibility:
   - Navigation landmark with aria-label
   - Visually hidden colons between "Previous/Next" and page name
   - Focus states with yellow outline

5. Print Styles:
   - Links appear in black
   - "page" text appended after "Previous" and "Next"

## CSS Features:

1. Responsive Margins: 56px (desktop) / 40px (mobile) top and bottom
2. Link States: Proper color transitions for hover, active, and visited
3. Focus States: Yellow background with black text and 4px transparent outline
4. Icon Positioning: Absolute positioning with proper offsets
5. Text Decoration: Underline on page names, removed on interaction

## Usage Example:

```svelte
<!-- Both links -->
<Pagination
  previousUrl="/section/intro"
  previousPage="Introduction"
  nextUrl="/section/details"
  nextPage="Details"
/>

<!-- Only previous -->
<Pagination
  previousUrl="/page/2"
  previousPage="Page 2"
/>

<!-- Only next -->
<Pagination
  nextUrl="/page/2"
  nextPage="Page 2"
/>
```

The component assumes you have:
- A `parseAttributes` utility function in `$lib/utils/attributes.js`
- The NHS UK font family (Frutiger W01) available
