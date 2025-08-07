<script>
  import DoAndDoNotList from './DoAndDoNotList.svelte';
</script>

<div class="example-container">
  <h1>Do and Don't List Component Examples</h1>

  <section>
    <h2>Default Example - Do List</h2>
    <DoAndDoNotList
      title="Do"
      type="tick"
      items={[
        { item: 'cover blisters with a soft plaster or padded dressing' },
        { item: 'wash your hands before touching a burst blister' },
        { item: 'allow the fluid in a burst blister to drain before covering it with a plaster or dressing' }
      ]}
    />
  </section>

  <section>
    <h2>Don't List Example</h2>
    <DoAndDoNotList
      title="Don't"
      type="cross"
      items={[
        { item: 'burst a blister yourself' },
        { item: 'peel the skin off a burst blister' },
        { item: 'pick at the edges of the remaining skin' },
        { item: 'wear the shoes or use the equipment that caused your blister until it heals' }
      ]}
    />
  </section>

  <section>
    <h2>Custom Heading Level</h2>
    <DoAndDoNotList
      title="Important Steps"
      type="tick"
      headingLevel={2}
      items={[
        { item: 'Follow the instructions carefully' },
        { item: 'Complete each step before moving to the next' },
        { item: 'Ask for help if you need it' }
      ]}
    />
  </section>

  <section>
    <h2>Without "do not" Prefix</h2>
    <DoAndDoNotList
      title="Avoid"
      type="cross"
      hidePrefix={true}
      items={[
        { item: 'Using hot water on burns' },
        { item: 'Applying ice directly to skin' },
        { item: 'Ignoring persistent pain' }
      ]}
    />
  </section>

  <section>
    <h2>With Custom Classes and Attributes</h2>
    <DoAndDoNotList
      title="Best Practices"
      type="tick"
      class="custom-class"
      data-testid="best-practices-list"
      items={[
        { item: 'Test your code regularly' },
        { item: 'Write clear documentation' },
        { item: 'Use <strong>semantic HTML</strong>' }
      ]}
    />
  </section>
</div>

<style>
  .example-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    color: #005eb8;
    margin-bottom: 40px;
  }

  h2 {
    color: #212b32;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  section {
    margin-bottom: 60px;
  }

  :global(.custom-class) {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
