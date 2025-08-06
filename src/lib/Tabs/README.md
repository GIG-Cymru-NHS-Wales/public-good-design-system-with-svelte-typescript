I've successfully converted the NHS UK Tabs component from Nunjucks to Svelte 5. Here's a summary of what was created:

## Files Created:

### 1. **types.ts** - TypeScript type definitions
- `TabPanel`: Interface for panel content (text/html)
- `TabItem`: Interface for individual tab items
- `TabsProps`: Main component props interface
- `TabState`: Internal state management interface

### 2. **config.ts** - Component configuration
- Default configuration values
- CSS class name constants
- ARIA configuration for accessibility
- Responsive breakpoint definitions

### 3. **Tabs.svelte** - Main component
Key features implemented:
- **Progressive Enhancement**: Works without JavaScript, enhances when available
- **Responsive Design**: Mobile-first approach, switches to tabbed interface on tablets+
- **Keyboard Navigation**: Arrow keys, Tab, Enter support
- **ARIA Support**: Full accessibility with roles and attributes
- **Hash Navigation**: URL hash synchronization for deep linking
- **Focus Management**: Proper focus handling and tab order

### 4. **+example.svelte** - Example implementations
Includes multiple examples:
- Default example with HTML content
- Example with anchors in panels
- Text-only content example
- Custom attributes example
- Minimal implementation
- Interactive demo with keyboard navigation guide

## Key Differences from Original:

1. **Svelte 5 Runes**: Uses `$state`, `$props`, and `$bindable` for reactive state management
2. **TypeScript**: Fully typed for better developer experience
3. **Compiled CSS**: SCSS compiled to vanilla CSS with CSS custom properties
4. **Simplified Logic**: Leverages Svelte's reactivity instead of manual DOM manipulation
5. **Modern JavaScript**: Uses modern ES6+ features throughout

## Usage Example:

```svelte
<script>
  import Tabs from './Tabs.svelte';
</script>

<Tabs
  title="Contents"
  items={[
    {
      label: 'First Tab',
      id: 'first',
      panel: {
        html: '<h2>First Tab Content</h2><p>Your content here</p>'
      }
    },
    {
      label: 'Second Tab',
      id: 'second',
      panel: {
        text: 'Plain text content for second tab'
      }
    }
  ]}
/>
```
