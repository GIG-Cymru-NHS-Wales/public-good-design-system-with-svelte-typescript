# DateInput

This component creates a date input with separate fields for day, month, and year.

## Key Features

**Flexible Date Input Structure**:

- **Default Layout**: Automatic day/month/year layout with proper widths

- **Custom Items**: Support for custom field configurations (e.g., month/year only)

- **Responsive Design**: Proper spacing and inline-block layout

- **Input Modes**: Numeric input mode for better mobile experience

**Validation**:

- **Real-time Validation**: Immediate feedback as user types

- **NHS-specific Validation**: Built-in validators for common NHS scenarios

- **Date Logic**: Proper date validation including leap years and valid dates

- **Business Rules**: Support for appointment-specific rules (no weekends, advance booking limits)

**Value Management**:

- **Two-way Binding**: Seamless synchronization with parent component state

- **Value Persistence**: Maintains values across re-renders and navigation

- **Format Conversion**: Utilities for converting between date formats

- **Default Values**: Support for pre-populated date fields

**Accessibility**:

- **Screen Reader Support**: Proper labeling and ARIA attributes

- **Keyboard Navigation**: Full keyboard accessibility between fields

- **Error Association**: Proper error message association with fieldset

- **Live Announcements**: Optional live region announcements for date changes

**Developer Experience**:

- **Utility Functions**: Rich set of helper functions for common date operations

- **Validation Helpers**: Pre-built validators for common scenarios

- **Form Integration**: Easy integration with SvelteKit forms and validation

**More Features**:

- **Age Calculation**: Built-in age calculation from date of birth

- **Date Comparison**: Utilities for comparing and validating date ranges

- **Serialization**: Helpers for form data serialization and deserialization

- **Custom Autocomplete**: Support for browser autocomplete attributes

**Performance Optimizations**:

- **Reactive Updates**: Efficient updates only when necessary

- **Minimal Re-renders**: Smart derived values prevent unnecessary recalculations

- **Memory Efficient**: Proper cleanup and minimal memory footprint

- **Form Optimization**: Optimized for large forms with multiple date inputs
