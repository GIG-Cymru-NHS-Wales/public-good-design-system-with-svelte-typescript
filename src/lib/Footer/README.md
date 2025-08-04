# Footer

1. Footer.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax

- Handles both single-column and multi-column layouts

- Properly manages the display logic for different footer configurations

- Includes all compiled CSS from the SCSS with proper NHS UK styling

- Supports custom classes and attributes

2. types.ts - TypeScript Types

- Defines `FooterLink` interface for link items

- Defines `FooterProps` interface for component props

- Fully typed with JSDoc comments

- Sets default copyright text via documentation

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Can be used for component documentation generation

4. +example.svelte - Examples

- Default single-column footer

- Multi-column footer with all link groups

- Footer with custom copyright statement

- Footer with custom classes and attributes

- Minimal footer example

- Includes styling to properly display the examples

## Key Changes from Nunjucks to Svelte 5:

1. **Props syntax**: Using the new `$props()` rune with destructuring and defaults
2. **Conditionals**: Using Svelte's `{#if}` blocks instead of Nunjucks' `{% if %}`
3. **Loops**: Using `{#each}` blocks instead of `{% for %}`
4. **URL property**: Changed from uppercase `URL` to lowercase `url` to follow JavaScript conventions
5. **CSS**: Converted SCSS to vanilla CSS with:
   - Calculated rem values (base 16px)
   - Expanded media queries (desktop: 61.875em, tablet: 40.0625em)
   - NHS UK color values (#f0f4f5 for grey-4, #005eb8 for blue, etc.)
   - Clearfix implementation
   - Print media query for hiding footer

## Notable Features:

1. **Layout Logic**: The component automatically switches between single-column and multi-column layouts based on whether `linksColumn2` has content
2. **Copyright Positioning**: Copyright text is positioned differently in single vs multi-column layouts
3. **Responsive Design**: The footer adapts from mobile to desktop layouts
4. **Accessibility**: Includes proper semantic HTML with `role="contentinfo"` and visually hidden heading
5. **Focus States**: Includes proper focus styling for keyboard navigation

The component assumes you have:

- A `parseAttributes` utility function in `$lib/utils/attributes.js`

- The NHS UK font family (Frutiger W01) available

- Proper NHS UK container and utility classes
