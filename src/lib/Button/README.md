# Button

This component supports multiple element types, variants, and includes JavaScript functionality for accessibility and double-click prevention.

## Key Features

**Smart Element Type Detection**:

- Automatically chooses `<a>`, `<button>`, or `<input>` based on props

- Supports explicit element override

- Maintains semantic HTML structure

**Comprehensive Event Handling**:

- Built-in click and keydown event forwarding

- Double-click prevention with configurable timeout

- Space key accessibility for link buttons

- Proper cleanup of timers

**Full Variant Support**:

- Primary, secondary, warning, login, and reverse variants

- Disabled states with proper ARIA attributes

- All original NHS design system styling

**SvelteKit Integration**:

- Works with SvelteKit's `enhance` action for forms

- Supports `goto()` for programmatic navigation

- Integration with `$page` store for conditional rendering

- Preloading support for link buttons

**TypeScript Safety**:

- Complete type definitions for all props

- Event type safety with proper generics

- Utility functions for common patterns

- IDE autocompletion and error checking

**Advanced Features**:

- HTML content support with `{@html}`

- Custom attribute spreading

- Reactive class computation

- Form integration helpers

- Loading state management
