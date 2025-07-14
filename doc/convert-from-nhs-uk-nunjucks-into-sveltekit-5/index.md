# Convert from NHS UK Design System Nunjucks to Public Good Design System using SvelteKit 5

## Key Aspects

**Key Features**:

- **Type Safety**: Full TypeScript support with proper interfaces

- **Event Handling**: Built-in click handler for button elements

- **Safety**: Safe HTML rendering with `{@html}` where appropriate

- **SvelteKit Integration**: Works seamlessly with SvelteKit navigation

- **Accessibility**: Maintains all original ARIA attributes and semantic structure

**Key Technical Benefits**:

- **Better Developer Experience**: Provide IDE support, type checking, autocompletion, IntelliSense.

- **Reactive Updates**: Automatically update when props change.

- **Tree-shaking**: Better performance.

- **Integration**: Use SvelteKit's routing and preloading.

- **Event Integration**: Easy to handle custom navigation logic

- **Performance**: Optimize rendering with Svelte's reactivity.

- **Safety**: Provide type-safe props with TypeScript.

- **Maintainability**: Use cleaner code structure and better separation of concerns.

- **Progressive enhancement**: Works without JavaScript, enhanced with it

- **Accessibility**: Built-in screen reader support with live regions

- **Form integration**: Seamless integration with SvelteKit form validation

## Setup

Clone the NHS UK Design System repository:

```sh
git clone https://github.com/nhsuk/nhsuk-frontend.git
```

Change directory to the components:

```sh
cd packages/nhsuk-frontend/src/nhsuk/components 
```

Delete superfluous files that are all the same:

```sh
rm */README.md
find . -depth 2 | grep "./\(.*\)/_\1.scss$" | xargs rm
```

## Convert each component

**Prompt**:

- "Convert this code from Nunjucks to Svelte 5"

- Then provide the component's code.

## Key changes from Nunjucks to SvelteKit 5

- **Flexibility**: Supports both `<a>` and `<button>` elements

**Component Structure**:

- Nunjucks macro → Svelte component with `<script>`, `<template>`, `<style>`

- Props defined using Svelte 5's new `$props()` rune

- TypeScript interface for type safety

**CSS Integration**:

- SCSS remains the same, merely moved to `<style>` block

- Imports converted from `@use` to `@import` (adjust based on your setup)

**CSS Global Integration**:

- **Nunjucks**: Complex SCSS with many variant-specific rules

- **Svelte**: Global CSS classes with `:global()` selectors for framework compatibility

**Template Syntax**:

- `{{ params.text }}` → `{text}`

- `{% if params.classes %}` → `{classes ? ` ${classes}` : ''}`

- `{% endif %}` → removed (uses ternary operators)

**Default Values**:

- **Nunjucks**: Handled in template with complex ternary

- **Svelte**: Clean default values in props destructuring

**Attribute Spread**:

- **Nunjucks**: `nhsukAttributes(params.attributes)`

- **Svelte**: `{...attributes}` (this is the spread operator, which is cleaner and more native)

**Conditional Attributes**:

- Conditional attributes use `attribute={condition ? value : undefined}`

**Conditional Classes**:

- **Nunjucks**: `{%- if params.classes %} {{ params.classes }}{% endif %}`

- **Svelte**: `{classes ? ` ${classes}` : ''}` (more concise)

**HTML Content Handling**:

- **Nunjucks**: `{{ (params.html | safe if params.html else (params.text if params.text else 'Back')) }}`

- **Svelte**: `{@html html}` for HTML content and `{text}` for plain text with proper conditional logic

**Dynamic Element Rendering**:

- **Nunjucks**: `{% set element='button' %}` and `<{{element}}>`

- **Svelte**: `{#if element === 'button'}` blocks to conditionally render different elements

**Event Handling**:

- **Nunjucks**: No built-in event handling

- **Svelte**: Added `createEventDispatcher` for button click events with proper TypeScript typing

**Svelte 5 Features**:

- Uses new `$props()` rune for prop declaration

- Improved TypeScript integration

- Better reactivity with the new rune system

**Complex Logic Handling**:

- **Nunjucks**: Multiple `{% set %}` statements, and complex conditionals with multiple `{% if %}` blocks and variable assignments.

- **Svelte**: `$derived()` runes for reactive computations for classes, content determination, last item, etc.

**Dynamics**:

- **Svelte**: Dynamic element creation uses `svelte:element` for dynamic heading levels.

**Array Processing:** 

- **Nunjucks**: `{% for item in params.items %}` with complex loop logic

- **Svelte**: Clean `{#each allItems as item, index}` with derived arrays

**Conditional Rendering**:

- **Nunjucks**: `{%- if item.href %}...{%- endif -%}`

- **Svelte**: `{#if item.href}...{/if}` blocks

**Last Item Logic**:

- **Nunjucks**: Complex template logic with `{% set lastItem = params.items | last%}`

- **Svelte**: Clean derived reactive function that handles both cases

**Attribute Handling**:

- **Nunjucks**: `nhsukAttributes(item.attributes)`

- **Svelte**: `{...(item.attributes || {})}` with null safety

**Responsive Design**:

- **Original**: Shows full breadcrumb on tablet+, back link on mobile

- **Svelte**: Maintains same responsive behavior with CSS

**Dynamic Element Type Logic**:

- **Nunjucks**: Complex template logic with `{% set element %}` blocks

- **Svelte**: Clean `$derived()` reactive function that automatically determines element type

**Content Rendering Strategy**:

- **Nunjucks**: `caller()` blocks and complex conditional content rendering

- **Svelte**: Modern `{#snippet children()}` pattern for flexible content injection

**Conditional Element Rendering**:

- **Nunjucks**: Three separate template blocks for different elements

- **Svelte**: Single reactive block with `{#if elementType === 'a'}` conditions

**JavaScript Functionality Integration**:

- **Nunjucks**: Separate JavaScript files with complex initialization

- **Svelte**: Built-in event handling with `createEventDispatcher` and lifecycle management

**Double-Click Prevention**:

- **Original**: Complex class-based debounce logic

- **Svelte**: Clean reactive implementation with proper cleanup

**Accessibility Features**:

- **Original**: Manual event listener setup for space key handling

- **Svelte**: Integrated accessibility with proper event forwarding

**Care Card Accessibility**:

- **Original**: Complex visually hidden text logic in templates

- **Svelte**: Clean function-based approach for generating accessibility text

- **Semantic structure**: Maintains proper `role="text"` and screen reader support

**Class Management**:

- **Nunjucks**: String concatenation with multiple conditionals

- **Svelte**: Reactive derived values that automatically update based on props

**Complex JavaScript Integration**:

- **Nunjucks**: Separate JavaScript class with complex DOM manipulation

- **Svelte**: Built-in reactive state management with `$derived()` and `$bindable()`

**State Management**:

- **Nunjucks**: Manual DOM updates and class toggling

- **Svelte**: Reactive derived values that automatically update UI

**CharacterCount Logic**:

- **Nunjucks**: Complex counting methods in JavaScript class

- **Svelte**: Clean reactive functions with proper word/character detection

- **Performance**: Optimized with derived values to prevent unnecessary recalculations

**Threshold Management**:

- **Nunjucks**: Manual visibility toggling with classes

- **Svelte**: Reactive visibility based on threshold percentage

**Error State Handling**:

- **Nunjucks**: Complex class manipulation for error states

- **Svelte**: Reactive classes that automatically reflect error state
