# TaskList

## Files

**TaskList.svelte** - Main component

- **Table Layout**: Uses CSS table display for flexible column widths
- **Clickable Rows**: Entire row is clickable when href is provided
- **Status Types**: Supports both tag-based and text-based statuses
- **Accessibility**: ARIA labels connect hints and statuses to task links
- **Hover States**: Visual feedback for interactive items
- **Fallback Tag Styles**: Includes basic tag styles if Tag component isn't available
- **Responsive Design**: Adjusts margins at different breakpoints

**+example.svelte** - Comprehensive examples

- Default health assessment example
- Application process workflow
- Registration with HTML content
- Interactive example with dynamic status updates
- Pre-configured patterns showcase
- Tasks without links
- Custom styling examples
- Accessibility features documentation

**types.ts** - TypeScript type definitions

- TaskStatusTag: Interface for tag-based statuses
- TaskStatus: Status configuration interface
- TaskTitle & TaskHint: Content configuration interfaces
- TaskItem: Individual task item

**config.ts** - Component configuration

- CSS class name constants
- Default configuration values
- Common task status configurations (completed, incomplete, cannot-start, in-progress, not-started)
- Helper function `createTaskStatus()` for easy status creation
- Pre-configured task list patterns for common use cases (health assessment, application, registration)

## Key Improvements:

1. **Type Safety**: Full TypeScript support with comprehensive interfaces
2. **Helper Functions**: `createTaskStatus()` simplifies status creation
3. **Pre-configured Patterns**: Common task list patterns ready to use
4. **Interactive Demo**: Shows how to dynamically update task statuses
5. **Better Organization**: Separated configuration from component logic
6. **Fallback Support**: Works even if Tag component isn't available

## Usage Examples:

### Basic Usage:
```svelte
<script>
  import TaskList from './TaskList.svelte';
</script>

<TaskList 
  items={[
    {
      title: { text: 'Complete form' },
      href: '#form',
      status: {
        text: 'Completed',
        classes: 'nhsuk-task-list__status--completed'
      }
    },
    {
      title: { text: 'Upload documents' },
      hint: { text: 'Passport and proof of address' },
      href: '#docs',
      status: {
        tag: {
          text: 'Incomplete',
          classes: 'nhsuk-tag--blue'
        }
      }
    }
  ]}
/>
```

### Using Helper Functions:
```svelte
<script>
  import TaskList from './TaskList.svelte';
  import { createTaskStatus } from './config';
</script>

<TaskList 
  items={[
    {
      title: { text: 'Step 1' },
      href: '#step1',
      status: createTaskStatus('completed')
    },
    {
      title: { text: 'Step 2' },
      href: '#step2',
      status: createTaskStatus('in-progress')
    },
    {
      title: { text: 'Step 3' },
      status: createTaskStatus('cannot-start')
    }
  ]}
/>
```

### Using Pre-configured Patterns:
```svelte
<script>
  import TaskList from './TaskList.svelte';
  import { taskListPatterns, createTaskStatus } from './config';
  
  // Convert pattern to task items
  const tasks = taskListPatterns.healthAssessment.map(item => ({
    title: { text: item.title },
    href: '#',
    status: createTaskStatus(item.status)
  }));
</script>

<TaskList items={tasks} />
```

## Features:

- **Progressive Enhancement**: Works without JavaScript, with enhanced interactivity when available
- **Keyboard Navigation**: Full keyboard support for navigation
- **Screen Reader Support**: Proper ARIA attributes for accessibility
- **Flexible Content**: Supports both text and HTML content
- **Status Variety**: Multiple status types with different visual treatments
- **Hover Effects**: Clear visual feedback for interactive elements
- **Print Friendly**: Optimized styles for printing

The component maintains full compatibility with the NHS UK Design System while providing a modern Svelte 5 implementation with improved developer experience and type safety.