# Tag

## Files

**Tag.svelte** - Main component:

- **Simple & Semantic**: Uses `<strong>` element for semantic emphasis
- **Color Variants**: 11 color options including default blue
- **Border Control**: Optional border removal
- **HTML Support**: Can render HTML content or plain text
- **Custom Attributes**: Support for additional HTML attributes and classes
- **Accessible**: Proper color contrast and focus states
- **Compiled CSS**: SCSS color functions converted to CSS with calculated values

**types.ts** - TypeScript type definitions:

- `TagColor`: Type for all available color variants
- `TagProps`: Main component props interface
- `TagStatus`: Interface for predefined status mappings

**config.ts** - Component configuration:

- CSS class name constants
- Common status configurations with recommended colors
- Helper function to get color classes
- Pre-configured status tags for common use cases

**+example.svelte** - various examples:

- All color variants showcase
- Border removal examples
- HTML content examples
- Common status tags
- Custom attributes demo
- Interactive playground
- Real-world use cases
- Accessibility information

## Key Improvements:

1. **Type Safety**: Full TypeScript support with proper typing
2. **Simplified API**: Added `color` prop for easier variant selection instead of requiring class names
3. **Pre-configured Statuses**: Common status tags with recommended colors in config
4. **Interactive Examples**: Live playground to test different configurations
5. **Better Organization**: Separated concerns into types, config, and component files

## Usage Example:

```svelte
<script>
  import Tag from './Tag.svelte';
</script>

<!-- Simple usage -->
<Tag text="Active" />

<!-- With color variant -->
<Tag text="Pending" color="blue" />

<!-- Without border -->
<Tag text="Draft" color="grey" noBorder />

<!-- With HTML content -->
<Tag html="<em>Important</em>" color="red" />

<!-- With custom attributes -->
<Tag
  text="Custom"
  color="green"
  attributes={{ 'data-id': '123' }}
  classes="my-custom-class"
/>
```
