# ErrorMessage

## 1. **ErrorMessage.svelte** - Main Component
- Uses Svelte 5's new `$props()` syntax with TypeScript
- Implements conditional rendering for HTML vs text content
- Includes the visually hidden text functionality for screen readers
- Compiled SCSS to vanilla CSS with proper media queries

## 2. **+example.svelte** - Example Usage
- Comprehensive examples showing all use cases
- Demonstrates integration with form fields
- Shows custom classes, attributes, and HTML content
- Includes complex examples with lists and multiple errors

## 3. **types.ts** - TypeScript Type Definitions
- Properly typed interfaces extending HTMLSpanElement
- Clear documentation for all props
- Type safety for all component properties

## 4. **config.ts** - Component Configuration
- Complete parameter definitions matching the original
- Multiple example configurations
- Usage guidelines and accessibility notes
- Color constants from the NHS design system

### Key Features:

1. **Accessibility**: The component maintains the visually hidden text prefix for screen readers
2. **Flexibility**: Supports both plain text and HTML content
3. **Styling**: Matches NHS design system with proper error color (#d5281b)
4. **Integration**: Works seamlessly with form validation
5. **TypeScript**: Full type safety with proper prop definitions
