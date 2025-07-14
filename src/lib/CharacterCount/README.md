# CharacterCount

This component includes TypeScript functionality for counting characters/words, threshold management, and accessibility features.
I'll convert this NHS UK character count component from Nunjucks to SvelteKit 5. This component includes complex JavaScript functionality for counting characters/words, threshold management, and accessibility features.

## Key Features

**Counting Logic**:

- **Character Count**: Accurate character counting including whitespace

- **Word Count**: Intelligent word detection using regex patterns

- **Threshold Display**: Configurable threshold for showing count messages

- **Dynamic Messages**: Context-aware messaging (remaining vs. too many)

**Accessibility**:

- **Screen Reader Support**: Dedicated live region for assistive technology

- **ARIA Attributes**: Proper labeling and describedby relationships

- **Progressive Enhancement**: Static fallback message for non-JS environments

- **Keyboard Navigation**: Full keyboard accessibility support

**Real-time Validation**:

- **Visual Feedback**: Automatic error styling when limits exceeded

- **Live Updates**: Instant feedback on character/word count changes

- **Speech Recognition**: Polling mechanism for speech-to-text software

- **Browser Navigation**: Handles back/forward navigation state restoration

**SvelteKit Integration**:

- **Form Enhancement**: Works with SvelteKit's `enhance` action

- **Reactive Validation**: Real-time client-side validation

- **Two-way Binding**: Seamless data binding with `$bindable()`

- **Event Forwarding**: Proper event handling and custom event dispatch

**Developer Experience**:

- **Type Safety**: Complete TypeScript support with comprehensive interfaces

- **Utility Functions**: Helper functions for common patterns

- **Validation Helpers**: Built-in validation with error message generation

- **Configuration**: Flexible prop-based configuration

**Advanced Features**:

- **Content Analysis**: Built-in readability and content analysis tools

- **Form State Management**: Integration with Svelte stores

- **Custom Validation**: Extensible validation system

- **Analytics Ready**: Easy integration with tracking systems

**Performance Optimizations**:

- **Debounced Updates**: Intelligent update timing for screen readers

- **Derived Values**: Efficient reactive calculations

- **Memory Management**: Proper cleanup of intervals and event listeners

- **Minimal DOM Manipulation**: Reactive updates without manual DOM handling
