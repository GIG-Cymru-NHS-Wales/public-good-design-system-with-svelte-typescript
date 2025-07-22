import type { DoAndDontListExample } from './types';

/**
 * Component metadata
 */
export const componentInfo = {
  name: "Do and Don't list",
  description: "Do and Don't lists help users understand more easily what they should and shouldn't do.",
  category: "components",
  nhsukVersion: "latest"
};

/**
 * Component parameter definitions for documentation
 */
export const parameterDefinitions = {
  title: {
    type: 'string',
    required: true,
    description: "Title to be displayed on the do and don't list component."
  },
  type: {
    type: 'string',
    required: true,
    description: "Type of do and don't list component – 'cross' or 'tick'.",
    options: ['cross', 'tick']
  },
  items: {
    type: 'array',
    required: true,
    description: "Array of do and don't items objects.",
    children: {
      item: {
        type: 'string',
        required: true,
        description: "Text to use within each do and don't item label. HTML is supported."
      }
    }
  },
  hidePrefix: {
    type: 'boolean',
    required: false,
    default: false,
    description: "If set to true when type is 'cross', then removes the default 'do not' text prefix to each item."
  },
  headingLevel: {
    type: 'integer',
    required: false,
    default: 3,
    description: 'Optional heading level for the title heading. Defaults to 3.',
    min: 1,
    max: 6
  },
  class: {
    type: 'string',
    required: false,
    description: "Classes to add to the do and don't list container."
  },
  attributes: {
    type: 'object',
    required: false,
    description: "HTML attributes (for example data attributes) to add to the do and don't list container."
  }
};

/**
 * Predefined examples for the component
 */
export const examples: Record<string, DoAndDontListExample> = {
  default: {
    name: 'Default Do List',
    description: 'A standard "Do" list with tick icons',
    props: {
      title: 'Do',
      type: 'tick',
      items: [
        { item: 'cover blisters with a soft plaster or padded dressing' },
        { item: 'wash your hands before touching a burst blister' },
        { item: 'allow the fluid in a burst blister to drain before covering it with a plaster or dressing' }
      ]
    }
  },
  dont: {
    name: "Don't List",
    description: 'A standard "Don\'t" list with cross icons',
    props: {
      title: "Don't",
      type: 'cross',
      items: [
        { item: 'burst a blister yourself' },
        { item: 'peel the skin off a burst blister' },
        { item: 'pick at the edges of the remaining skin' },
        { item: 'wear the shoes or use the equipment that caused your blister until it heals' }
      ]
    }
  },
  customHeading: {
    name: 'Custom Heading Level',
    description: 'Example with a different heading level',
    props: {
      title: 'Important Guidelines',
      type: 'tick',
      headingLevel: 2,
      items: [
        { item: 'Always follow safety protocols' },
        { item: 'Report any incidents immediately' },
        { item: 'Keep your workspace clean and organized' }
      ]
    }
  },
  withoutPrefix: {
    name: 'Without "do not" Prefix',
    description: 'Cross list without the automatic "do not" prefix',
    props: {
      title: 'Avoid',
      type: 'cross',
      hidePrefix: true,
      items: [
        { item: 'Processed foods high in sugar' },
        { item: 'Excessive screen time before bed' },
        { item: 'Skipping regular health check-ups' }
      ]
    }
  },
  withHtml: {
    name: 'With HTML Content',
    description: 'Example showing HTML content in items',
    props: {
      title: 'Do',
      type: 'tick',
      items: [
        { item: 'Use <strong>strong</strong> tags for emphasis' },
        { item: 'Include <a href="#">links</a> when necessary' },
        { item: 'Apply <em>italic</em> text for subtle emphasis' }
      ]
    }
  }
};

/**
 * CSS color variables used by the component
 * These would typically come from the NHS design system
 */
export const nhsColors = {
  white: '#ffffff',
  blue: '#005eb8',
  textColor: '#212b32',
  grey4: '#d8dde0',
  errorRed: '#d5281b',
  successGreen: '#007f3b'
};
