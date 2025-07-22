# ErrorSummary

## 1. **ErrorSummary.svelte** - Main Component
- Uses Svelte 5's new `$props()` syntax with TypeScript
- Implements the focus management and click handling from the original JavaScript
- Automatically focuses on page load (configurable)
- Handles scrolling to form fields and proper focus management
- Compiled SCSS to vanilla CSS with all responsive breakpoints

## 2. **utils.ts** - Utility Functions
- Extracted the `getFragmentFromUrl` helper function
- Properly typed for TypeScript

## 3. **+example.svelte** - Example Usage
- Comprehensive examples showing all use cases
- Demonstrates error lists, HTML content, descriptions
- Shows integration with form fields
- Includes examples with and without auto-focus
- Custom attributes and slot content examples

## 4. **types.ts** - TypeScript Type Definitions
- Properly typed interfaces for all props
- Supports error list items with optional HTML content
- Full HTML attribute support for the container

## 5. **config.ts** - Component Configuration
- Complete parameter definitions matching the original
- Multiple example configurations
- Usage guidelines and accessibility information
- NHS design system constants for colors and spacing

### Key Features:

1. **Focus Management**: Automatically focuses the error summary on page load (can be disabled)
2. **Smart Scrolling**: Clicking error links scrolls to the label/legend before focusing the input
3. **Accessibility**: Maintains all ARIA attributes and keyboard navigation
4. **Flexibility**: Supports both text and HTML content for all text areas
5. **TypeScript**: Full type safety with proper interfaces
