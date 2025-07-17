# Details

Key Changes from Nunjucks to SvelteKit 5:

1. Native HTML Details Element

Original: Used HTML <details> element with custom styling
Svelte: Maintains native <details> element with two-way binding via $bindable()
Progressive Enhancement: Works without JavaScript, enhanced with Svelte reactivity

2. Content Rendering Strategy

Nunjucks: Complex conditional logic with caller() blocks and HTML/text options
Svelte: Modern {#snippet children()} pattern with fallback to HTML and text props
Flexibility: Supports all content types: snippets, HTML strings, and plain text

3. State Management

Original: No state management capabilities
Svelte: Reactive state with $bindable() for two-way binding
Event System: Comprehensive event dispatch for toggle, open, and close events

4. Programmatic Control

Original: No programmatic control
Svelte: Built-in methods (toggle(), show(), hide()) for external control
Component References: Support for template refs to control multiple details

5. Advanced Features

Original: Basic details functionality
Svelte: Rich ecosystem with stores, managers, and utility functions
Analytics Integration: Built-in tracking for user interactions

Key Features:
1. Dual Visual Variants

Standard Details: Traditional details with arrow indicators and underlined text
Expander Variant: Card-like appearance with plus/minus icons and bordered container
Responsive Design: Different padding and spacing for mobile and desktop

2. Comprehensive Event System

Toggle Events: Fires when details opens or closes
Specific Events: Separate open and close events for granular control
Event Data: Provides current state information in event payloads

3. Flexible Content Management

Snippet Content: Modern Svelte 5 snippet pattern for complex content
HTML Content: Support for HTML strings with safe rendering
Plain Text: Simple text content for basic use cases
Mixed Content: Can combine different content types

4. Advanced State Management

Details Store: Centralized state management for multiple details
Details Manager: Class-based management with callbacks and bulk operations
Reactive State: Built-in reactivity with Svelte stores integration

5. Accessibility Excellence

Native Semantics: Uses native HTML details/summary elements
Keyboard Navigation: Full keyboard accessibility out of the box
Screen Reader Support: Proper ARIA attributes and semantic structure
Focus Management: Proper focus handling and visual indicators

6. NHS Design System Compliance

Visual Consistency: Maintains all original NHS styling and colors
Expander Styling: Complete expander variant with proper icons and borders
Responsive Behavior: Correct spacing and padding across device sizes
Browser Compatibility: Includes IE11 fallbacks and feature detection

7. Developer Experience

Type Safety: Complete TypeScript support with comprehensive interfaces
Utility Functions: Rich set of helper functions for common patterns
Component Composition: Easy creation of details groups and collections
Testing Support: Built-in testing utilities and mock functions

8. Performance & Analytics

Performance Monitoring: Built-in performance measurement capabilities
Analytics Integration: Ready-to-use analytics tracking functions
Debounced Operations: Optimized event handling for better performance
Memory Management: Proper cleanup and efficient re-renders

9. Advanced Patterns

FAQ Systems: Built-in support for FAQ page structures
Structured Data: SEO-friendly structured data generation
Responsive Content: Adaptive content based on screen size
Error Handling: Comprehensive error handling and reporting

10. Integration Features

Form Integration: Seamless integration with form workflows
SvelteKit Compatibility: Works with SvelteKit's SSR and hydration
Store Integration: Compatible with Svelte stores and reactive patterns
Component Ecosystem: Integrates with other NHS components

The component successfully maintains all the visual design and functionality of the original NHS UK details component while providing a significantly more powerful, flexible, and maintainable implementation in SvelteKit 5. It's perfect for FAQs, help sections, collapsible content, and any scenario where progressive disclosure is needed.