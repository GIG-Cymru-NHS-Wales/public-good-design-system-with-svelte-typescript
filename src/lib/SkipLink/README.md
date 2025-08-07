# SkipLink

1. SkipLink.svelte - Main Component

- Fully functional Svelte 5 component using the new runes syntax (`$props()`)

- Implements the skip link functionality with proper focus management

- Includes compiled CSS from the original SCSS with NHS UK design system values

- Handles click events to focus target elements and manage focus styles

- Includes accessibility features like programmatic focus and blur handling

2. +example.svelte - Example Usage

- Comprehensive examples showing different use cases

- Includes default usage, custom text, custom classes, and custom attributes

- Provides actual page sections (navigation, main content, search, footer) to demonstrate the skip functionality

- Styled to match NHS UK design patterns

3. types.ts - TypeScript Types

- Complete type definitions for component props

- Interfaces for configuration options

- Type safety for all component parameters

- Documentation for each prop type

4. config.ts - Component Configuration

- Default configuration values

- Component metadata and documentation

- Example configurations for different use cases

- NHS UK design system constants (spacing, colors)

- Helper function for initializing skip links

## 🎯 Key Features:

1. Accessibility First: The component maintains all accessibility features from the original, including:
   - Visually hidden but keyboard accessible
   - Proper focus management
   - Removes tabindex on blur
   - Screen reader friendly

2. NHS UK Design System: Faithfully implements the NHS UK design patterns:
   - Correct spacing values (converted from SCSS variables)
   - Focus styles with yellow background
   - Proper positioning and z-index

3. Svelte 5 Features: Uses modern Svelte 5 syntax:
   - Runes for props (`$props()`)
   - TypeScript support
   - Proper event handling
   - Component lifecycle with `onMount`

4. Complete Functionality: Includes all features from the original:
   - Skip to any page section
   - Custom text and href support
   - Additional CSS classes
   - Custom HTML attributes
   - Error handling for missing targets

The component is production-ready and maintains full compatibility with the NHS UK Frontend design system while leveraging Svelte 5's latest features.