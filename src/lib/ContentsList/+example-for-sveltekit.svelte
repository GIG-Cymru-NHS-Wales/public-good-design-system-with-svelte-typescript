<script lang="ts">
  import ContentsList from '$lib/components/ContentsList.svelte';
  import { page } from '$app/stores';
  import type { ContentsItem } from '$lib/types';

  // Page data from load function
  export let data;

  // Generate contents from page data
  $: contentsItems = data.guide?.sections?.map((section: any, index: number) => ({
    href: `/guide/${section.slug}`,
    text: section.title,
    current: $page.url.pathname === `/guide/${section.slug}`
  })) || [];

  // Handle navigation with preloading
  function handleNavigate(event: CustomEvent) {
    const { href } = event.detail;
    
    // Prevent default if using custom navigation
    event.preventDefault();
    
    // Use SvelteKit's goto with preloading
    goto(href, {
      preloadData: 'hover'
    });
  }
</script>

<ContentsList 
  items={contentsItems}
  ariaLabel="Guide sections"
  attributes={{
    'data-sveltekit-preload-data': 'hover'
  }}
  on:navigate={handleNavigate}
/>
