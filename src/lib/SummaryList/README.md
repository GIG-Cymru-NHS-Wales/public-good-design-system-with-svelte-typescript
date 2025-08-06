# SummaryList

Files:

- **`SummaryList.svelte`** - Main Svelte 5 component with compiled CSS styles
- **`+example.svelte`** - Example file showcasing different use cases
- **`types.ts`** - TypeScript interfaces for all component props and data structures
- **`config.ts`** - Component configuration with examples and default props

## Key Features Implemented:

### Component Logic:
- ✅ Automatic detection of rows with actions for proper column layout
- ✅ Support for HTML and text content in keys and values
- ✅ Multiple action links per row with proper list formatting
- ✅ Visually hidden text for accessibility
- ✅ Dynamic class and attribute handling

### Styling:
- ✅ Fully compiled CSS from the original SCSS (no dependencies needed)
- ✅ Responsive design with mobile-first approach
- ✅ Table layout on tablet+ screens, stacked on mobile
- ✅ Border variants (no border, selective row borders)
- ✅ Proper focus states and accessibility
- ✅ NHS UK design system colors and typography

### Svelte 5 Features:
- ✅ Uses new `$props()` rune for prop handling
- ✅ Uses `$derived` rune for computed values
- ✅ Modern reactive patterns
- ✅ Full TypeScript support

### Examples Include:
- Default summary list with actions
- Summary list without actions
- Summary list without borders
- Summary list with selective row borders
- Custom usage example
