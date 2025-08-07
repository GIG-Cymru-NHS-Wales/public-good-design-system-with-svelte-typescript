export function createDetailsProps(
  summaryText: string,
  content: string,
  options: Partial<DetailsProps> = {}
): DetailsProps {
  return {
    summaryText,
    text: content,
    ...options
  };
}

export function createExpanderProps(
  summaryText: string,
  content: string,
  options: Partial<DetailsProps> = {}
): DetailsProps {
  return {
    summaryText,
    text: content,
    classes: 'nhsuk-expander',
    ...options
  };
}

// Accessibility helpers
export function announceDetailsToggle(summaryText: string, isOpen: boolean): void {
  const action = isOpen ? 'expanded' : 'collapsed';
  const message = `${summaryText} ${action}`;

  // Announce to screen readers
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'nhsuk-u-visually-hidden';
  announcement.textContent = message;

  document.body.appendChild(announcement);
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// State management helpers
export function createDetailsStore<T extends Record<string, boolean>>(
  initialState: T
) {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
    update,
    toggle: (key: keyof T) => {
      update(state => ({
        ...state,
        [key]: !state[key]
      }));
    },
    open: (key: keyof T) => {
      update(state => ({
        ...state,
        [key]: true
      }));
    },
    close: (key: keyof T) => {
      update(state => ({
        ...state,
        [key]: false
      }));
    },
    openAll: () => {
      update(state => {
        const newState = { ...state };
        Object.keys(newState).forEach(key => {
          newState[key] = true;
        });
        return newState;
      });
    },
    closeAll: () => {
      update(state => {
        const newState = { ...state };
        Object.keys(newState).forEach(key => {
          newState[key] = false;
        });
        return newState;
      });
    }
  };
}

// Analytics helpers
export function trackDetailsInteraction(
  summaryText: string,
  action: 'opened' | 'closed',
  category = 'details'
) {
  if (typeof gtag !== 'undefined') {
    gtag('event', `details_${action}`, {
      event_category: category,
      event_label: summaryText,
      value: action === 'opened' ? 1 : 0
    });
  }
}

// Component validation
export function validateDetailsProps(props: DetailsProps): string[] {
  const errors: string[] = [];

  if (!props.summaryText && !props.summaryHtml) {
    errors.push('Either summaryText or summaryHtml must be provided');
  }

  if (!props.text && !props.html && !props.children) {
    errors.push('Either text, html, or children must be provided');
  }

  return errors;
}

// component.config.ts - Configuration file
export const detailsConfig = {
  name: 'Details',
  variants: ['default', 'expander'],
  examples: {
    default: {
      summaryText: 'Where can I find my NHS number?',
      text: 'An NHS number is a 10 digit number, like 485 777 3456. You can find your NHS number on any document sent to you by the NHS.'
    },
    expander: {
      summaryText: 'Opening times',
      classes: 'nhsuk-expander',
      html: `
        <table class="nhsuk-table">
          <thead class="nhsuk-table__head">
            <tr class="nhsuk-table__row">
              <th class="nhsuk-table__header">Day of the week</th>
              <th class="nhsuk-table__header">Opening hours</th>
            </tr>
          </thead>
          <tbody class="nhsuk-table__body">
            <tr class="nhsuk-table__row">
              <td class="nhsuk-table__cell">Monday</td>
              <td class="nhsuk-table__cell">9am to 6pm</td>
            </tr>
            <tr class="nhsuk-table__row">
              <td class="nhsuk-table__cell">Tuesday</td>
              <td class="nhsuk-table__cell">9am to 6pm</td>
            </tr>
            <tr class="nhsuk-table__row">
              <td class="nhsuk-table__cell">Wednesday</td>
              <td class="nhsuk-table__cell">9am to 6pm</td>
            </tr>
            <tr class="nhsuk-table__row">
              <td class="nhsuk-table__cell">Thursday</td>
              <td class="nhsuk-table__cell">9am to 6pm</td>
            </tr>
            <tr class="nhsuk-table__row">
              <td class="nhsuk-table__cell">Friday</td>
              <td class="nhsuk-table__cell">9am to 6pm</td>
            </tr>
            <tr class="nhsuk-table__row">
              <td class="nhsuk-table__cell">Saturday</td>
              <td class="nhsuk-table__cell">9am to 1pm</td>
            </tr>
            <tr class="nhsuk-table__row">
              <td class="nhsuk-table__cell">Sunday</td>
              <td class="nhsuk-table__cell">Closed</td>
            </tr>
          </tbody>
        </table>
      `
    },
    withHtmlSummary: {
      summaryHtml: '<strong>Important:</strong> Privacy information',
      text: 'Your personal information is protected under GDPR regulations.'
    },
    openByDefault: {
      summaryText: 'Already expanded',
      text: 'This details element is open by default.',
      open: true
    }
  }
} as const;

// Advanced composition patterns
export class DetailsManager {
  private details: Map<string, boolean> = new Map();
  private callbacks: Map<string, (isOpen: boolean) => void> = new Map();

  constructor(initialState: Record<string, boolean> = {}) {
    Object.entries(initialState).forEach(([id, isOpen]) => {
      this.details.set(id, isOpen);
    });
  }

  register(id: string, callback: (isOpen: boolean) => void, initialState = false) {
    this.details.set(id, initialState);
    this.callbacks.set(id, callback);
  }

  unregister(id: string) {
    this.details.delete(id);
    this.callbacks.delete(id);
  }

  toggle(id: string) {
    const currentState = this.details.get(id) || false;
    const newState = !currentState;
    this.details.set(id, newState);

    const callback = this.callbacks.get(id);
    if (callback) {
      callback(newState);
    }

    return newState;
  }

  open(id: string) {
    this.details.set(id, true);
    const callback = this.callbacks.get(id);
    if (callback) {
      callback(true);
    }
  }

  close(id: string) {
    this.details.set(id, false);
    const callback = this.callbacks.get(id);
    if (callback) {
      callback(false);
    }
  }

  openAll() {
    this.details.forEach((_, id) => {
      this.open(id);
    });
  }

  closeAll() {
    this.details.forEach((_, id) => {
      this.close(id);
    });
  }

  isOpen(id: string): boolean {
    return this.details.get(id) || false;
  }

  getState(): Record<string, boolean> {
    return Object.fromEntries(this.details);
  }

  getOpenCount(): number {
    return Array.from(this.details.values()).filter(Boolean).length;
  }

  getClosedCount(): number {
    return Array.from(this.details.values()).filter(state => !state).length;
  }
}

// SEO and structured data helpers
export function generateFAQStructuredData(
  faqItems: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

// Performance optimization helpers
export function debounceDetailsToggle(
  callback: (isOpen: boolean) => void,
  delay = 300
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (isOpen: boolean) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(isOpen);
    }, delay);
  };
}

// Accessibility audit helpers
export function auditDetailsAccessibility(element: HTMLDetailsElement): string[] {
  const issues: string[] = [];

  // Check for summary element
  const summary = element.querySelector('summary');
  if (!summary) {
    issues.push('Details element missing summary');
  }

  // Check for accessible content
  const content = element.querySelector('.nhsuk-details__text');
  if (!content || !content.textContent?.trim()) {
    issues.push('Details element missing accessible content');
  }

  // Check for proper heading structure
  const headings = content?.querySelectorAll('h1, h2, h3, h4, h5, h6');
  if (headings && headings.length > 0) {
    // Verify heading hierarchy
    const headingLevels = Array.from(headings).map(h =>
      parseInt(h.tagName.charAt(1), 10)
    );

    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] > headingLevels[i-1] + 1) {
        issues.push('Heading hierarchy skips levels');
        break;
      }
    }
  }

  // Check for keyboard accessibility
  if (summary && !summary.hasAttribute('tabindex')) {
    // This is actually correct - native summary elements are keyboard accessible
    // But we check if it's been accidentally disabled
    if (summary.getAttribute('tabindex') === '-1') {
      issues.push('Summary element has been removed from tab order');
    }
  }

  return issues;
}

// Custom hooks for Svelte integration
export function createDetailsState(initialOpen = false) {
  let isOpen = $state(initialOpen);

  return {
    get isOpen() {
      return isOpen;
    },
    set isOpen(value: boolean) {
      isOpen = value;
    },
    toggle() {
      isOpen = !isOpen;
    },
    open() {
      isOpen = true;
    },
    close() {
      isOpen = false;
    }
  };
}

// Testing helpers
export function createMockDetailsProps(overrides: Partial<DetailsProps> = {}): DetailsProps {
  return {
    summaryText: 'Test summary',
    text: 'Test content',
    open: false,
    ...overrides
  };
}

export function simulateDetailsToggle(
  element: HTMLDetailsElement,
  shouldOpen: boolean
) {
  element.open = shouldOpen;

  // Dispatch toggle event
  const event = new Event('toggle', { bubbles: true });
  element.dispatchEvent(event);
}

// Integration with other NHS components
export function createNHSCard(
  title: string,
  content: string,
  isExpander = false
): DetailsProps {
  return {
    summaryText: title,
    text: content,
    classes: isExpander ? 'nhsuk-expander' : '',
    attributes: {
      'data-module': 'nhsuk-details',
      'data-component': 'card'
    }
  };
}

// Responsive behavior helpers
export function createResponsiveDetails(
  mobileTitle: string,
  desktopTitle: string,
  content: string
): DetailsProps {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return {
    summaryText: isMobile ? mobileTitle : desktopTitle,
    text: content,
    attributes: {
      'data-responsive': 'true'
    }
  };
}

// Error handling
export class DetailsError extends Error {
  constructor(message: string, public readonly context?: any) {
    super(message);
    this.name = 'DetailsError';
  }
}

export function handleDetailsError(error: unknown, context?: any) {
  if (error instanceof DetailsError) {
    console.error('Details component error:', error.message, error.context);
  } else {
    console.error('Unexpected error in Details component:', error, context);
  }
}

// Performance monitoring
export function measureDetailsPerformance(
  detailsId: string,
  operation: 'open' | 'close' | 'toggle'
) {
  if (typeof performance !== 'undefined') {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;

      console.log(`Details ${operation} operation for ${detailsId} took ${duration}ms`);

      // Send to analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', 'timing_complete', {
          name: `details_${operation}`,
          value: Math.round(duration),
          event_category: 'performance'
        });
      }
    };
  }

  return () => {}; // No-op if performance API not available
}
