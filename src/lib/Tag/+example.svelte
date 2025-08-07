<script lang="ts">
  import Tag from './Tag.svelte';
  import { commonStatuses } from './config';
  import type { TagColor } from './types';

  // All color variants
  const colorVariants: Array<{ color: TagColor; text: string }> = [
    { color: 'default', text: 'Active' },
    { color: 'white', text: 'In progress' },
    { color: 'grey', text: 'Inactive' },
    { color: 'green', text: 'New' },
    { color: 'aqua-green', text: 'Active' },
    { color: 'blue', text: 'Pending' },
    { color: 'purple', text: 'Received' },
    { color: 'pink', text: 'Sent' },
    { color: 'red', text: 'Rejected' },
    { color: 'orange', text: 'Declined' },
    { color: 'yellow', text: 'Delayed' }
  ];

  // Example with HTML content
  const htmlExample = '<em>Important</em> status';

  // Interactive state
  let selectedStatus = $state('active');
  let customText = $state('Custom Tag');
  let customColor = $state<TagColor>('blue');
  let noBorder = $state(false);
</script>

<div class="examples">
  <section>
    <h2>Color Variants</h2>
    <p>All available color options for the Tag component.</p>
    <div class="tag-grid">
      {#each colorVariants as variant}
        <div class="tag-example">
          <Tag color={variant.color} text={variant.text} />
          <span class="label">{variant.color === 'default' ? 'default (blue)' : variant.color}</span>
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2>Without Border</h2>
    <p>Tags can be displayed without borders using the <code>noBorder</code> prop.</p>
    <div class="tag-row">
      <Tag text="No Border Default" noBorder />
      <Tag color="green" text="No Border Green" noBorder />
      <Tag color="red" text="No Border Red" noBorder />
      <Tag color="yellow" text="No Border Yellow" noBorder />
    </div>
  </section>

  <section>
    <h2>HTML Content</h2>
    <p>Tags can contain HTML content using the <code>html</code> prop.</p>
    <div class="tag-row">
      <Tag html={htmlExample} color="purple" />
      <Tag html="<strong>Bold</strong> text" color="blue" />
      <Tag html="Status: <code>200</code>" color="green" />
    </div>
  </section>

  <section>
    <h2>Common Status Tags</h2>
    <p>Pre-configured status tags with recommended colors.</p>
    <div class="tag-grid">
      {#each Object.entries(commonStatuses) as [key, status]}
        <div class="tag-example">
          <Tag text={status.text} color={status.color} />
          <span class="label">{key}</span>
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2>Custom Attributes</h2>
    <p>Additional HTML attributes can be added to tags.</p>
    <div class="tag-row">
      <Tag
        text="With ID"
        color="blue"
        attributes={{ id: 'status-tag', 'data-status': 'active' }}
      />
      <Tag
        text="With Classes"
        color="green"
        classes="custom-class another-class"
      />
      <Tag
        text="With Title"
        color="purple"
        attributes={{ title: 'This is a tooltip' }}
      />
    </div>
  </section>

  <section>
    <h2>Interactive Example</h2>
    <p>Customize the tag properties to see how it changes.</p>

    <div class="controls">
      <div class="control-group">
        <label for="custom-text">Text:</label>
        <input
          id="custom-text"
          type="text"
          bind:value={customText}
        />
      </div>

      <div class="control-group">
        <label for="custom-color">Color:</label>
        <select id="custom-color" bind:value={customColor}>
          {#each colorVariants as variant}
            <option value={variant.color}>
              {variant.color === 'default' ? 'default (blue)' : variant.color}
            </option>
          {/each}
        </select>
      </div>

      <div class="control-group">
        <label>
          <input
            type="checkbox"
            bind:checked={noBorder}
          />
          Remove border
        </label>
      </div>
    </div>

    <div class="preview">
      <Tag
        text={customText}
        color={customColor}
        noBorder={noBorder}
      />
    </div>
  </section>

  <section>
    <h2>Use Cases</h2>
    <p>Common scenarios where tags are useful.</p>

    <div class="use-case">
      <h3>Task Status</h3>
      <div class="tag-row">
        <Tag text="To Do" color="grey" />
        <Tag text="In Progress" color="blue" />
        <Tag text="Review" color="orange" />
        <Tag text="Complete" color="green" />
      </div>
    </div>

    <div class="use-case">
      <h3>Priority Levels</h3>
      <div class="tag-row">
        <Tag text="Low" color="grey" />
        <Tag text="Medium" color="yellow" />
        <Tag text="High" color="orange" />
        <Tag text="Critical" color="red" />
      </div>
    </div>

    <div class="use-case">
      <h3>Content Types</h3>
      <div class="tag-row">
        <Tag text="Article" color="blue" />
        <Tag text="Video" color="purple" />
        <Tag text="Guide" color="aqua-green" />
        <Tag text="News" color="pink" />
      </div>
    </div>
  </section>

  <section>
    <h2>Accessibility</h2>
    <p>Tags use semantic HTML and appropriate color contrast for accessibility.</p>
    <ul>
      <li>Uses <code>&lt;strong&gt;</code> element for semantic emphasis</li>
      <li>All color combinations meet WCAG AA contrast requirements</li>
      <li>Focus states are clearly visible</li>
      <li>Works well with screen readers</li>
    </ul>
    <div class="tag-row">
      <Tag text="Semantic HTML" color="green" />
      <Tag text="WCAG AA" color="blue" />
      <Tag text="Screen Reader Ready" color="purple" />
    </div>
  </section>
</div>

<style>
  .examples {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    font-family: "Frutiger W01", Arial, sans-serif;
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

  h3 {
    color: #212b32;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #425563;
    margin-bottom: 1rem;
  }

  .tag-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .tag-example {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .label {
    font-size: 0.875rem;
    color: #768692;
  }

  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background-color: #f0f4f5;
    border-radius: 4px;
  }

  .control-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .control-group label {
    font-weight: 600;
    color: #212b32;
  }

  input[type="text"],
  select {
    padding: 0.5rem;
    border: 2px solid #768692;
    border-radius: 4px;
    font-size: 16px;
  }

  input[type="text"]:focus,
  select:focus {
    outline: 3px solid #ffeb3b;
    outline-offset: 0;
    border-color: #212b32;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }

  .preview {
    padding: 1.5rem;
    background-color: white;
    border: 1px solid #d8dde0;
    border-radius: 4px;
    text-align: center;
  }

  .use-case {
    margin-bottom: 1.5rem;
  }

  code {
    background-color: #f0f4f5;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: monospace;
    font-size: 0.9em;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: #425563;
  }
</style>
