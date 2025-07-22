# DoAndDontList

## 1. **DoAndDontList.svelte** - Main Component
- Uses Svelte 5's new `$props()` syntax
- Implements dynamic heading levels using `svelte:element`
- Includes compiled CSS from the SCSS with proper responsive breakpoints
- Maintains all functionality including the `hidePrefix` option
- Uses `{@html}` directive to support HTML content in items

## 2. **+example.svelte** - Example Usage
- Shows multiple use cases of the component
- Demonstrates all available props
- Includes examples with custom classes and attributes
- Shows HTML content support in items

## 3. **types.ts** - TypeScript Type Definitions
- Properly typed interfaces for all props
- Extends HTMLDivElement attributes for full HTML attribute support
- Includes JSDoc comments for better IDE support

## 4. **config.ts** - Component Configuration
- Contains all parameter definitions with proper types
- Includes example configurations matching the original
- Provides color constants that would typically come from the NHS design system
- Adds additional examples to showcase different use cases

### Key Changes from Nunjucks to Svelte 5:

1. **Props handling**: Used Svelte 5's `$props()` syntax with TypeScript typing
2. **Dynamic elements**: Used `svelte:element` for dynamic heading levels
3. **CSS compilation**: Converted SCSS mixins to vanilla CSS with media queries
4. **HTML content**: Used `{@html}` directive instead of `| safe` filter
5. **Class prop**: Renamed to avoid reserved word conflict in Svelte
6. **Attributes spreading**: Used rest operator for additional HTML attributes
