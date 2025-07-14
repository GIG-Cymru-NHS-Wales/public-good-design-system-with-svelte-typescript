# ContentsList

 This is a navigation component that displays a list of page contents with current page highlighting.

## Key Features:

**Simple Navigation Structure**:

- **Clean Layout**: Ordered list with proper semantic structure

- **Visual Indicators**: Em-dash bullets and current page highlighting

- **Responsive Design**: Different bullet sizes for mobile and tablet

- **Keyboard Navigation**: Full keyboard accessibility support

**Current Page Detection**:

- **Static Current**: Manual current page setting via props

- **Dynamic Current**: Automatic detection based on current route

- **Multiple Patterns**: Support for both static and dynamic content lists

- **State Synchronization**: Reactive updates when navigation changes

**SvelteKit Integration**:

- **Route Awareness**: Integration with `$page` store for current page detection

- **Navigation Enhancement**: Works with SvelteKit's `goto()` function

- **Preloading Support**: Built-in support for data and code preloading

- **Progressive Enhancement**: Works without JavaScript, enhanced with it

**Developer Experience**:

- **Type Safety**: Complete TypeScript support with proper interfaces

- **Utility Functions**: Helper functions for common navigation patterns

- **Event Tracking**: Built-in navigation event dispatch for analytics

- **Flexible Configuration**: Props-based configuration with sensible defaults

**Advanced Navigation Features**:

- **Progress Tracking**: Support for completion status and bookmarking

- **Multi-level Navigation**: Hierarchical navigation structure support

- **Navigation Helpers**: Previous/next item detection and progress calculation

- **SEO Support**: Structured data generation for breadcrumbs

**Content Management**:

- **Dynamic Generation**: Runtime generation from page data or API responses

- **Custom Styling**: Support for additional CSS classes and custom attributes

- **Interactive Elements**: Support for bookmarking, completion tracking, and actions

- **Content Flexibility**: Works with static and dynamic content structures

**Performance Optimizations**:

- **Reactive Updates**: Efficient updates only when navigation state changes

- **Minimal Rendering**: Only re-renders affected items when current page changes

- **Preloading Integration**: Smart preloading of linked content

- **Memory Efficient**: Proper cleanup and minimal memory footprint
