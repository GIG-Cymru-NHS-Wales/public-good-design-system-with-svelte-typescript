import type { SkipLinkConfig, SkipLinkExample, SkipLinkMetadata } from './types';

/**
 * Default configuration for the SkipLink component
 */
export const config: SkipLinkConfig = {
  defaultText: 'Skip to main content',
  defaultHref: '#maincontent',
  className: 'nhsuk-skip-link',
  focusedElementClassName: 'nhsuk-skip-link-focused-element'
};

/**
 * Component metadata and documentation
 */
export const metadata: SkipLinkMetadata = {
  name: 'Skip link',
  description: 'A skip link component that allows users to skip to the main content area of a page. Essential for keyboard navigation and accessibility.',
  version: '1.0.0',
  params: {
    text: {
      type: 'string',
      required: false,
      description: 'Text to use within the skip link component.',
      default: 'Skip to main content'
    },
    href: {
      type: 'string',
      required: false,
      description: 'The value of the skip link\'s href attribute.',
      default: '#maincontent'
    },
    class: {
      type: 'string',
      required: false,
      description: 'Additional CSS classes to add to the skip link.'
    },
    attributes: {
      type: 'object',
      required: false,
      description: 'Additional HTML attributes (for example data attributes) to add to the skip link.'
    }
  }
};

/**
 * Example configurations for the SkipLink component
 */
export const examples: SkipLinkExample[] = [
  {
    name: 'default',
    description: 'Default skip link with standard text and href',
    props: {
      href: '#maincontent',
      text: 'Skip to main content'
    }
  },
  {
    name: 'custom-text',
    description: 'Skip link with custom text',
    props: {
      href: '#navigation',
      text: 'Skip to navigation menu'
    }
  },
  {
    name: 'with-classes',
    description: 'Skip link with additional CSS classes',
    props: {
      href: '#maincontent',
      text: 'Skip to main content',
      class: 'custom-skip-link highlight'
    }
  },
  {
    name: 'with-attributes',
    description: 'Skip link with custom data attributes',
    props: {
      href: '#maincontent',
      text: 'Skip to main content',
      'data-testid': 'skip-link',
      'data-analytics': 'skip-to-main'
    }
  },
  {
    name: 'skip-to-search',
    description: 'Skip link targeting search section',
    props: {
      href: '#search',
      text: 'Skip to search'
    }
  },
  {
    name: 'skip-to-footer',
    description: 'Skip link targeting footer section',
    props: {
      href: '#footer',
      text: 'Skip to footer'
    }
  }
];

/**
 * NHS UK spacing values (in pixels)
 * These correspond to the NHS UK design system spacing scale
 */
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 16,
  4: 24,
  5: 32,
  6: 40,
  7: 48,
  8: 56,
  9: 64
} as const;

/**
 * NHS UK color palette
 */
export const colors = {
  // Primary colors
  nhsukBlue: '#005eb8',
  nhsukDarkBlue: '#003087',
  nhsukBrightBlue: '#0072ce',
  nhsukLightBlue: '#41b6e6',
  nhsukAquaBlue: '#00a9ce',

  // Secondary colors
  nhsukGreen: '#007f3b',
  nhsukLightGreen: '#78be20',
  nhsukAquaGreen: '#00a499',
  nhsukPurple: '#330072',
  nhsukPink: '#ae2573',
  nhsukRed: '#d5281b',
  nhsukDarkRed: '#8a1538',
  nhsukOrange: '#ed8b00',
  nhsukWarmYellow: '#ffb81c',
  nhsukYellow: '#fad61d',

  // Neutrals
  nhsukBlack: '#212b32',
  nhsukDarkGrey: '#425563',
  nhsukMidGrey: '#768692',
  nhsukPaleGrey: '#aeb7bd',
  nhsukLightGrey: '#d8dde0',
  nhsukVeryLightGrey: '#f0f4f5',
  nhsukWhite: '#ffffff',

  // Focus color
  nhsukFocusColor: '#ffeb3b',
  nhsukFocusTextColor: '#212b32'
} as const;

/**
 * Helper function to initialize all skip links on a page
 */
export function initSkipLinks(options: { scope?: Element | Document | null } = {}): void {
  const scope = options.scope || document;
  const skipLinks = scope.querySelectorAll(`.${config.className}`);

  skipLinks.forEach((skipLink) => {
    if (!(skipLink instanceof HTMLAnchorElement)) {
      console.warn('SkipLink: Element is not an anchor element', skipLink);
      return;
    }

    // The Svelte component handles its own initialization
    // This function is provided for compatibility with non-Svelte environments
    console.log('Skip link found:', skipLink);
  });
}

/**
 * Export all configurations
 */
export default {
  config,
  metadata,
  examples,
  spacing,
  colors,
  initSkipLinks
};
