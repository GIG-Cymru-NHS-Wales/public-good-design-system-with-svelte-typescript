# Image

1. Image.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax with full TypeScript typing

- Implements a semantic `<figure>` element with optional `<figcaption>`

- Supports responsive images with `srcset` and `sizes` attributes

- Handles custom classes and attributes

- Uses `{@html}` directive for caption to support HTML content

2. types.ts - TypeScript Types

- Defines the `ImageProps` interface with all component options

- `src` and `alt` are required props for accessibility

- All other props are optional

- Properly documented with JSDoc comments

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Component name is 'Images' to match the original

4. +example.svelte - Examples

- Shows 10 different use cases:

  - Default image

  - Image with caption

  - Multiple consecutive images (demonstrating margin removal)

  - Image with custom classes

  - Image with custom attributes

  - Responsive image with multiple sources

  - Image with HTML caption

  - Image without caption

  - Responsive width demonstration

  - Image in content context

## Key Implementation Details:

1. Responsive Width:
   - Full width on mobile
   - 66.67% width on desktop (two-thirds)
   - 50% width for print media

2. Spacing:
   - Responsive margins (32px mobile, 48px desktop)
   - Consecutive images have their top margin removed

3. Styling:
   - White background with grey bottom border
   - Caption has padding and smaller font size

4. Accessibility:
   - Uses semantic HTML (`<figure>` and `<figcaption>`)
   - Requires `alt` text for all images

5. Responsive Images:
   - Full support for `srcset` and `sizes` attributes
   - Images are block-level and scale to container width

The component assumes you have:
- A `parseAttributes` utility function in `$lib/utils/attributes.js` to handle attribute spreading
- The NHS UK font family (Frutiger W01) available
