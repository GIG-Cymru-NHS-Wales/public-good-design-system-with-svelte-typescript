
<script lang="ts">
  import ContentsList from '$lib/components/ContentsList.svelte';
  import { enhance } from '$app/forms';

  let bookmarkedSections = new Set();
  let completedSections = new Set();

  // Interactive contents with progress tracking
  const courseItems = [
    { href: '/course/introduction', text: 'Introduction' },
    { href: '/course/basics', text: 'The Basics' },
    { href: '/course/intermediate', text: 'Intermediate Topics' },
    { href: '/course/advanced', text: 'Advanced Concepts' },
    { href: '/course/conclusion', text: 'Conclusion' }
  ];

  // Enhanced items with completion status
  $: enhancedItems = courseItems.map(item => ({
    ...item,
    current: $page.url.pathname === item.href,
    completed: completedSections.has(item.href),
    bookmarked: bookmarkedSections.has(item.href)
  }));

  function markAsCompleted(href: string) {
    completedSections.add(href);
    completedSections = completedSections; // Trigger reactivity
  }

  function toggleBookmark(href: string) {
    if (bookmarkedSections.has(href)) {
      bookmarkedSections.delete(href);
    } else {
      bookmarkedSections.add(href);
    }
    bookmarkedSections = bookmarkedSections; // Trigger reactivity
  }
</script>

<!-- Enhanced contents list with custom item rendering -->
<nav class="nhsuk-contents-list course-contents" role="navigation" aria-label="Course sections">
  <h2 class="nhsuk-u-visually-hidden">Contents</h2>
  <ol class="nhsuk-contents-list__list">
    {#each enhancedItems as item}
      <li
        class="nhsuk-contents-list__item course-item"
        class:completed={item.completed}
        class:bookmarked={item.bookmarked}
        aria-current={item.current ? 'page' : undefined}
      >
        {#if item.current}
          <span class="nhsuk-contents-list__current">
            {item.text}
            {#if item.completed}
              <span class="completion-badge" aria-label="Completed">✓</span>
            {/if}
          </span>
        {:else}
          <a class="nhsuk-contents-list__link" href={item.href}>
            {item.text}
            {#if item.completed}
              <span class="completion-badge" aria-label="Completed">✓</span>
            {/if}
          </a>
        {/if}

        <div class="item-actions">
          <button
            type="button"
            class="bookmark-btn"
            class:active={item.bookmarked}
            on:click={() => toggleBookmark(item.href)}
            aria-label={item.bookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            {item.bookmarked ? '★' : '☆'}
          </button>

          {#if !item.completed && item.current}
            <button
              type="button"
              class="complete-btn"
              on:click={() => markAsCompleted(item.href)}
            >
              Mark as complete
            </button>
          {/if}
        </div>
      </li>
    {/each}
  </ol>
</nav>