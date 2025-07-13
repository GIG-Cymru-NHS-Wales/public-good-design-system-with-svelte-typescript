# Breadcrumb

This is component provides navigation logic, responsive behavior, and accessibility features.

## Key Features:

**Reactive Breadcrumb Logic**:

- Automatically determines last item for back link

- Handles both explicit final item and array-based logic

- Filters items to only show those with href

**SvelteKit Integration**:

- Works seamlessly with `$page` store for dynamic breadcrumbs

- Supports SvelteKit's preloading with `data-sveltekit-preload-data`

- Type-safe route handling

**Accessibility**:

- Maintains proper `aria-label` and landmark navigation

- Screen reader support with visually hidden text

- Semantic HTML structure

**Advanced Features**:

- Utility functions for generating breadcrumbs from routes

- Support for navigation data structures

- Custom attribute and class handling

- Reverse styling for dark backgrounds

**Type Safety**:

- Full TypeScript interfaces

- Proper null/undefined handling

- IDE autocompletion and error checking
