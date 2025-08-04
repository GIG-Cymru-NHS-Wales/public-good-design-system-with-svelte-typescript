# FieldSet

I'll help you convert this Nunjucks component to Svelte 5. Let me create the necessary files for you.I've successfully converted the Nunjucks fieldset component to Svelte 5. Here's what I've created:

1. Fieldset.svelte - main component

- Uses Svelte 5's new `$props()` syntax for props

- Supports conditional rendering for legend text/HTML

- Handles the `isPageHeading` option to wrap legend in an `<h1>`

- Uses `{@html}` directive for HTML content

- Includes compiled CSS from the SCSS with proper NHS UK styling

2. types.ts - TypeScript Types

- Defines `LegendOptions` interface for legend configuration

- Defines `FieldsetProps` interface for component props

- Uses Svelte 5's `Snippet` type for the children prop (replacing the caller block)

- Fully typed with JSDoc comments

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation purposes

- Can be used for component documentation generation

4. +example.svelte - Examples

- Default fieldset

- Fieldset as page heading

- Fieldset with form inputs

- Different legend sizes (xl, l, m, s)

- HTML legend content

- Custom attributes and aria-describedby

- Includes basic styling for the example page

## Key Changes from Nunjucks to Svelte 5:

1. **Props syntax**: Using the new `$props()` rune

2. **Children/Slots**: Using Svelte 5's `Snippet` type and `{@render children()}` instead of Nunjucks' `caller()`

3. **Conditionals**: Using Svelte's `{#if}` blocks instead of Nunjucks' `{% if %}`

4. **HTML content**: Using `{@html}` directive for safe HTML rendering

5. **CSS**: Converted SCSS to vanilla CSS with:

   - Calculated rem values (using base 16px)

   - Expanded media queries

   - Clearfix implementation

   - NHS UK color values (#212b32 for black)

Note: The component assumes you have:

- A `parseAttributes` utility function in `$lib/utils/attributes.js` to handle attribute spreading

- An `Input` component for the examples

- The NHS UK font family (Frutiger W01) available
