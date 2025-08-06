# Table

## Files Created:

- **Table.svelte** - Main Svelte 5 component with compiled CSS styles
- **+example.svelte** - Examples showcasing table variations
- **types.ts** - TypeScript interfaces for the table component props
- **config.ts** - Component configuration with default props

## Key Features Converted:

✅ **Full component functionality**: All props and features from the original Nunjucks version
✅ **Responsive design**: Mobile-first responsive table that transforms on smaller screens
✅ **Panel mode**: Table with heading tab styling
✅ **Accessibility**: Proper ARIA roles and screen reader support
✅ **Flexible content**: Support for both text and HTML content in cells
✅ **Styling options**: Caption classes, cell formatting (numeric), custom classes
✅ **CSS compilation**: All SCSS styles converted to vanilla CSS

## Notable Svelte 5 Features Used:

- **Modern props syntax**: Using `$props()` destructuring
- **Conditional attributes**: Dynamic attribute binding based on props
- **HTML rendering**: Safe HTML rendering with `{@html}`
- **Component composition**: Clean separation of types, config, and component logic

## Responsive Behavior:

The table automatically transforms on mobile devices:
- Headers become inline labels for each data cell
- Table rows stack vertically
- Better mobile usability while maintaining desktop table layout

The component maintains full compatibility with the original NHS UK design system while providing a modern Svelte 5 implementation.