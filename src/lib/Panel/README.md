# Panel


1. Panel.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax with full TypeScript typing

- Supports dynamic heading levels (h1-h6)

- Handles title and content with both plain text and HTML options

- Uses Svelte 5's snippet system for complex content

- Includes transparent border for high contrast modes

2. types.ts - TypeScript Types

- Defines the `PanelProps` interface with all component options

- Uses union type for heading levels (1-6)

- Includes Svelte 5's `Snippet` type for children prop

- All props except title are optional

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Clarifies that either `titleText` or `titleHtml` is required

4. +example.svelte - Examples

- Shows 12 different use cases:

  - Default panel with title and text

  - Title only

  - HTML title

  - HTML content

  - Complex content using snippets

  - Different heading levels

  - Panels with links

  - Panel with button

  - Custom classes

  - Custom attributes

  - Long content with multiple elements

  - Multiple panels in sequence

## Key Implementation Details:

1. Styling:
   - Green background (#007f3b) with white text
   - 8px transparent border for high contrast modes
   - Responsive padding (32px desktop, 24px mobile)
   - Word breaking on narrow viewports

2. Typography:
   - Panel text: 26px (desktop) / 20px (mobile)
   - Title: 48px (desktop) / 32px (mobile) bold
   - Proper font family and line heights

3. Content Handling:
   - Priority: children > html > text
   - Title priority: titleHtml > titleText
   - Panel body only renders if there's content

4. Accessibility:
   - Semantic heading levels
   - High contrast mode support
   - Print styles (black text, no background)

5. Responsive Features:
   - Text size adjustments
   - Padding changes
   - Word breaking for overflow prevention

## CSS Features:

1. Print Styles: Border becomes visible, background removed, text color changes
2. Link Styles: White links with proper focus states within panel
3. Button Styles: Inverted button colors when inside panel
4. Word Breaking: Prevents text overflow on narrow screens
5. Margin Collapsing: Last child margin removal

## Usage Examples:

```svelte
<!-- Basic panel -->
<Panel
  titleText="Success"
  text="Your action was completed successfully"
/>

<!-- Panel with HTML -->
<Panel
  titleHtml="Application <strong>approved</strong>"
  html="<p>Reference: <strong>ABC123</strong></p>"
/>

<!-- Panel with complex content -->
<Panel titleText="Next steps">
  <p>Your application has been received.</p>
  <ul>
    <li>We'll review it within 5 days</li>
    <li>You'll receive an email confirmation</li>
  </ul>
</Panel>
```

The component assumes you have:
- A `parseAttributes` utility function in `$lib/utils/attributes.js`
- The NHS UK font family (Frutiger W01) available
