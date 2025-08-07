# Header

1. Header.svelte - Main Component

- Uses Svelte 5's new `$props()` syntax with full TypeScript typing

- Handles all the complex logic for combining logo and service name links

- Supports all variants: default, white, organisational, with navigation, search, and account features

- Integrates with the JavaScript header class for responsive navigation menu functionality

- Includes all compiled CSS from the SCSS with proper NHS UK styling

2. types.ts - TypeScript Types

- Comprehensive type definitions for all component props and sub-objects

- Includes interfaces for:

  - `NavigationItem` - Navigation menu items

  - `AccountItem` - Account section items

  - `LogoOptions` - Logo configuration

  - `ServiceOptions` - Service name configuration

  - `OrganisationOptions` - Organisation branding

  - `NavigationOptions` - Navigation settings

  - `SearchOptions` - Search box configuration

  - `AccountOptions` - Account section settings

  - `HeaderProps` - Main component props

3. config.ts - Component Configuration

- Exports component metadata and parameter definitions

- Maintains the same structure as the original for documentation

- Includes detailed descriptions for all parameters

4. +example.svelte - Examples

- Shows 15 different header configurations:

  - Default header with navigation and search

  - Navigation variants (standard and white)

  - Account states (logged in/out)

  - Complex multi-feature headers

  - Service name variations

  - Organisational headers

  - White header variants

  - Custom logo support

  - Justified navigation

  - Long service names

  - Minimal configuration

## Key Implementation Details:

1. Smart Link Combination: The component automatically combines the logo and service name into a single link when appropriate to avoid duplicate links

2. Responsive Navigation: Integrates with the JavaScript Header class to handle responsive navigation with overflow menu

3. Search Flexibility: Search can be enabled with just `search={true}` or customized with an options object

4. Account Features: Supports both links and form buttons for account items, with optional user icons

5. CSS Architecture:
   - Converted all SCSS to vanilla CSS
   - Maintained all responsive breakpoints
   - Preserved all hover, focus, and active states
   - Included print styles
   - Supports all color variants

6. Accessibility:
   - Proper ARIA labels and roles
   - Keyboard navigation support
   - Screen reader friendly markup
   - Current page indicators

Note: The component assumes you have:
- A `parseAttributes` utility function in `$lib/utils/attributes.js`
- The `header.js` JavaScript class for responsive menu functionality
- The NHS UK font family (Frutiger W01) available
