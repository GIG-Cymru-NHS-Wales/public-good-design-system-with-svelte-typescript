<script lang="ts">
  import ContentsList from '$lib/components/ContentsList.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import type { ContentsItem } from '$lib/types';

  // Static contents list
  const amdGuideItems: ContentsItem[] = [
    {
      href: '/conditions/amd/what-is-amd',
      text: 'What is AMD?',
      current: true
    },
    {
      href: '/conditions/amd/symptoms',
      text: 'Symptoms'
    },
    {
      href: '/conditions/amd/getting-diagnosed',
      text: 'Getting diagnosed'
    },
    {
      href: '/conditions/amd/treatments',
      text: 'Treatments'
    },
    {
      href: '/conditions/amd/living-with-amd',
      text: 'Living with AMD'
    }
  ];

  // Dynamic contents list based on current page
  const guideItems: ContentsItem[] = [
    {
      href: '/guide/overview',
      text: 'Overview'
    },
    {
      href: '/guide/getting-started',
      text: 'Getting started'
    },
    {
      href: '/guide/advanced-features',
      text: 'Advanced features'
    },
    {
      href: '/guide/troubleshooting',
      text: 'Troubleshooting'
    }
  ];

  // Set current page based on route
  $: currentPath = $page.url.pathname;
  $: dynamicItems = guideItems.map(item => ({
    ...item,
    current: item.href === currentPath
  }));

  function handleNavigation(event: CustomEvent) {
    console.log('Navigating to:', event.detail);
    // Custom navigation logic if needed
    goto(event.detail.href);
  }
</script>

<!-- Basic contents list -->
<ContentsList
  items={amdGuideItems}
  on:navigate={handleNavigation}
/>

<!-- Dynamic contents list with current page detection -->
<ContentsList
  items={dynamicItems}
  ariaLabel="Guide navigation"
  on:navigate={handleNavigation}
/>

<!-- Contents list with custom styling -->
<ContentsList
  items={guideItems}
  classes="custom-contents-list"
  attributes={{
    'data-testid': 'main-navigation',
    'data-track-section': 'contents'
  }}
/>
