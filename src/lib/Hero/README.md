# Hero

1. Hero.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax with full TypeScript typing

- Supports all hero variants: default, with image, with image and content

- Handles dynamic heading levels (h1-h6)

- Supports text, HTML, or custom content via Svelte snippets

- Properly manages the complex styling for image overlays and arrow decorations

- Includes responsive design for all screen sizes

2. types.ts - TypeScript Types

- Defines the `HeroProps` interface with all component options

- Uses Svelte 5's `Snippet` type for the children prop

- Includes proper TypeScript types for heading levels (1-6)

- All props are properly documented with JSDoc comments

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Includes descriptions for all parameters

4. +example.svelte - Examples

- Shows 10 different hero configurations:

  - Default hero with heading and text

  - Hero with image only

  - Hero with image and content

  - Hero with HTML content

  - Hero with custom content using snippets

  - Different heading levels

  - Hero without content

  - Custom classes and attributes

  - Long content with image

  - Complex hero with multiple elements

## Key Implementation Details:

1. Image Background: The component properly handles background images with CSS inline styles

2. Content Overlay: When both image and heading are present, the content appears in a blue box with an arrow pointer

3. Responsive Behavior:
   - Mobile: Content stacks vertically
   - Desktop: Content overlays the image with absolute positioning
   - Print: Appropriate styles for printed output

4. Arrow Decoration: The arrow is created using CSS transforms and pseudo-elements, maintaining the exact visual design

5. Grid System: Uses the NHS UK grid system with proper responsive columns

6. Accessibility:
   - Proper heading hierarchy
   - Hidden decorative elements with `aria-hidden`
   - High contrast mode support

7. Link Styling: All links within the hero maintain white color for contrast against the blue background

Note: The component assumes you have:
- A `parseAttributes` utility function in `$lib/utils/attributes.js`
- The NHS UK font family (Frutiger W01) available
- Additional NHS UK components like Button if used in examples

The component maintains full feature parity with the original Nunjucks version while following Svelte 5 best practices and providing a more flexible API through the use of snippets for custom content.