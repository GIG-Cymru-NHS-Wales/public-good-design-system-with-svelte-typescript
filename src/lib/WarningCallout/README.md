# Warning Callout

## Files

**WarningCallout.svelte** - Main component:

- **Dynamic Heading Levels**: Supports H1-H6 elements
- **Smart Screen Reader Support**: Automatically adds "Important:" prefix for screen readers when needed
- **Flexible Content**: Supports text, HTML, or Svelte slots
- **Accessibility**: Proper ARIA attributes and visually hidden text
- **Responsive Design**: Adjusts padding and font sizes at breakpoints
- **Print Optimized**: Special styles for printing
- **High Contrast Support**: Enhanced borders in high contrast mode

**+example.svelte** - Comprehensive examples:

- Default warning with "Important" heading
- Custom heading examples
- HTML content support
- Slot usage for complex content
- Common warning types showcase
- Different heading levels
- Interactive playground
- Custom attributes and classes
- Complex multi-part warnings
- Accessibility features documentation

**types.ts** - TypeScript type definitions:

- WarningCalloutProps: Main component props interface
- WarningType: Predefined warning types (important, safety, medical, etc.)
- WarningConfig: Configuration structure for warnings

**config.ts** - Component configuration:

- CSS class name constants
- Default configuration (heading level 3, default heading "Important")
- 12 pre-configured warning types with appropriate headings
- Common warning messages organized by category (medicines, health, procedures, lifestyle)
- Helper functions:
  - `isImportantHeading()`: Checks if heading contains "Important"
  - `createWarningConfig()`: Creates warning configuration from type

## Key Improvements:

1. **Type Safety**: Full TypeScript support with proper interfaces
2. **Slot Support**: Uses Svelte 5's snippet syntax for flexible content
3. **Pre-configured Warnings**: Common medical warning messages ready to use
4. **Better Developer Experience**: Helper functions and organized configurations
5. **Semantic HTML**: Proper heading hierarchy with configurable levels
6. **Enhanced Accessibility**: Smart screen reader announcements

## Usage Examples:

### Basic Usage:
```svelte
<script>
  import WarningCallout from './WarningCallout.svelte';
</script>

<WarningCallout
  heading="Important"
  text="For safety, tell your doctor about all medicines you're taking."
/>
```

### With Custom Heading:
```svelte
<WarningCallout
  heading="Storage instructions"
  text="Store in a cool, dry place away from direct sunlight."
/>
```

### With HTML Content:
```svelte
<WarningCallout
  heading="Side effects"
  html={`
    <p>Seek immediate help if you experience:</p>
    <ul>
      <li>Difficulty breathing</li>
      <li>Severe allergic reaction</li>
    </ul>
  `}
/>
```

### Using Slots:
```svelte
<WarningCallout heading="Before your appointment">
  {#snippet children()}
    <p>Please remember to:</p>
    <ul>
      <li>Bring your medication list</li>
      <li>Arrive 15 minutes early</li>
      <li>Bring your insurance card</li>
    </ul>
  {/snippet}
</WarningCallout>
```

### Using Helper Functions:
```svelte
<script>
  import { createWarningConfig, commonWarnings } from './config';
</script>

<WarningCallout
  {...createWarningConfig('pregnancy', commonWarnings.medicines.pregnancy)}
/>
```

### With Different Heading Level:
```svelte
<WarningCallout
  heading="Section warning"
  headingLevel={4}
  text="This uses an H4 element for proper document structure."
/>
```

## Features:

- **Progressive Enhancement**: Works without JavaScript
- **Screen Reader Friendly**: Smart "Important:" prefix addition
- **Flexible Content**: Text, HTML, or Svelte snippets
- **Pre-configured Messages**: Common medical warnings ready to use
- **Responsive Design**: Adapts to different screen sizes
- **Print Friendly**: Optimized styles for printing
- **High Contrast Mode**: Enhanced visibility support
- **Customizable**: Extensive options for styling and attributes
- **Semantic HTML**: Proper heading hierarchy
- **WCAG Compliant**: Meets accessibility standards

## CSS Implementation Notes:

The SCSS mixins `panel-with-label` and `heading-label` have been converted to vanilla CSS:
- Panel styles include pale yellow background, yellow border, and responsive padding
- Label styles include yellow background, inline-block display, and negative margins for overlay effect
- All SCSS variables converted to CSS custom properties
- Responsive breakpoints implemented with media queries
