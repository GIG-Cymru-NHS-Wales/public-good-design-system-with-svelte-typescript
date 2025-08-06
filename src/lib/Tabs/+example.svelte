<script lang="ts">
  import Tabs from './Tabs.svelte';
  import type { TabsProps } from './types';

  // Default example
  const defaultExample: TabsProps = {
    items: [
      {
        label: 'Tab one',
        id: 'tab-one',
        panel: {
          html: `
            <h2>Tab one content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          `
        }
      },
      {
        label: 'Tab two',
        id: 'tab-two',
        panel: {
          html: `
            <h2>Tab two content</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          `
        }
      },
      {
        label: 'Tab three',
        id: 'tab-three',
        panel: {
          html: `
            <h2>Tab three content</h2>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          `
        }
      }
    ]
  };

  // Example with anchor in panel
  const anchorExample: TabsProps = {
    items: [
      {
        label: 'Tab one',
        id: 'tab-one',
        panel: {
          html: `
            <h2>Tab one content</h2>
            <p>Testing that when you click the anchor it moves to the anchor point successfully</p>
            <p><a href="#anchor">Anchor</a></p>
            <p><a id="anchor" tabindex="0">Anchor Point</a></p>
          `
        }
      },
      {
        label: 'Tab two',
        id: 'tab-two',
        panel: {
          html: `
            <h2>Tab two content</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          `
        }
      },
      {
        label: 'Tab three',
        id: 'tab-three',
        panel: {
          html: `
            <h2>Tab three content</h2>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          `
        }
      }
    ]
  };

  // Example with text content instead of HTML
  const textExample: TabsProps = {
    title: 'Information sections',
    idPrefix: 'info',
    items: [
      {
        label: 'Overview',
        panel: {
          text: 'This is the overview section with plain text content. It provides a simple introduction to the topic at hand.'
        }
      },
      {
        label: 'Details',
        panel: {
          text: 'The details section contains more specific information about the subject, presented in a clear and concise manner.'
        }
      },
      {
        label: 'Resources',
        panel: {
          text: 'Here you can find additional resources and references for further reading on this topic.'
        }
      }
    ]
  };

  // Example with custom attributes
  const customAttributesExample: TabsProps = {
    id: 'custom-tabs',
    classes: 'custom-tabs-class',
    attributes: {
      'data-test': 'tabs-component'
    },
    items: [
      {
        label: 'First tab',
        id: 'custom-first',
        attributes: {
          'data-analytics': 'tab-1'
        },
        panel: {
          html: '<h3>Custom first tab</h3><p>This tab has custom attributes.</p>',
          attributes: {
            'data-panel': 'panel-1'
          }
        }
      },
      {
        label: 'Second tab',
        id: 'custom-second',
        attributes: {
          'data-analytics': 'tab-2'
        },
        panel: {
          html: '<h3>Custom second tab</h3><p>This tab also has custom attributes.</p>',
          attributes: {
            'data-panel': 'panel-2'
          }
        }
      }
    ]
  };

  // Minimal example
  const minimalExample: TabsProps = {
    items: [
      {
        label: 'Tab A',
        panel: {
          text: 'Content for Tab A'
        }
      },
      {
        label: 'Tab B',
        panel: {
          text: 'Content for Tab B'
        }
      }
    ]
  };
</script>

<!-- For the examples to work properly, add this class to the body in your app -->
<svelte:head>
  <script>
    // Add the nhsuk-frontend-supported class to enable JavaScript enhancements
    if (typeof document !== 'undefined') {
      document.body.classList.add('nhsuk-frontend-supported');
    }
  </script>
</svelte:head>

<div class="examples">
  <section>
    <h2>Default Example</h2>
    <p>Standard tabs with three panels containing HTML content.</p>
    <Tabs {...defaultExample} />
  </section>

  <section>
    <h2>Example with Anchor in Panel</h2>
    <p>Demonstrates that anchors within panels work correctly.</p>
    <Tabs {...anchorExample} />
  </section>

  <section>
    <h2>Text Content Example</h2>
    <p>Tabs using plain text content instead of HTML, with a custom title.</p>
    <Tabs {...textExample} />
  </section>

  <section>
    <h2>Custom Attributes Example</h2>
    <p>Tabs with custom CSS classes and data attributes for analytics tracking.</p>
    <Tabs {...customAttributesExample} />
  </section>

  <section>
    <h2>Minimal Example</h2>
    <p>Simplest possible tabs implementation with auto-generated IDs.</p>
    <Tabs {...minimalExample} />
  </section>

  <section>
    <h2>Interactive Example</h2>
    <p>Try navigating with keyboard arrows when focused on a tab.</p>
    <Tabs
      title="Interactive Demo"
      items={[
        {
          label: 'Getting Started',
          panel: {
            html: `
              <h3>Keyboard Navigation</h3>
              <ul>
                <li>Use <kbd>Tab</kbd> to focus on the tabs</li>
                <li>Use <kbd>←</kbd> and <kbd>→</kbd> arrow keys to navigate between tabs</li>
                <li>Use <kbd>↑</kbd> and <kbd>↓</kbd> arrow keys as alternatives</li>
                <li>Press <kbd>Enter</kbd> or click to select a tab</li>
              </ul>
            `
          }
        },
        {
          label: 'Accessibility',
          panel: {
            html: `
              <h3>Built-in Accessibility Features</h3>
              <ul>
                <li>ARIA roles and attributes for screen readers</li>
                <li>Keyboard navigation support</li>
                <li>Focus management</li>
                <li>Progressive enhancement (works without JavaScript)</li>
              </ul>
            `
          }
        },
        {
          label: 'Responsive',
          panel: {
            html: `
              <h3>Responsive Design</h3>
              <p>On mobile devices (screens smaller than 641px), tabs display as a simple list with all panels visible.</p>
              <p>On larger screens, tabs provide an interactive tabbed interface.</p>
            `
          }
        }
      ]}
    />
  </section>
</div>

<style>
  .examples {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  section {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #d8dde0;
  }

  section:last-child {
    border-bottom: none;
  }

  h2 {
    color: #005eb8;
    margin-bottom: 0.5rem;
  }

  p {
    color: #425563;
    margin-bottom: 1rem;
  }

  kbd {
    background-color: #f0f4f5;
    border: 1px solid #d8dde0;
    border-radius: 3px;
    padding: 2px 6px;
    font-family: monospace;
    font-size: 0.9em;
  }
</style>
