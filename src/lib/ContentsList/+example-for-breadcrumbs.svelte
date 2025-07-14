<script lang="ts">
  import ContentsList from '$lib/components/ContentsList.svelte';
  import { page } from '$app/stores';
  import { writable } from 'svelte/store';

  // Store for navigation state
  const navigationStore = writable({
    currentSection: '',
    visitedPages: new Set(),
    lastVisited: null
  });

  // Multi-level contents structure
  const healthGuide = {
    conditions: [
      { href: '/conditions/diabetes', text: 'Diabetes' },
      { href: '/conditions/hypertension', text: 'High blood pressure' },
      { href: '/conditions/asthma', text: 'Asthma' }
    ],
    treatments: [
      { href: '/treatments/medications', text: 'Medications' },
      { href: '/treatments/surgery', text: 'Surgery' },
      { href: '/treatments/therapy', text: 'Therapy' }
    ],
    lifestyle: [
      { href: '/lifestyle/diet', text: 'Diet and nutrition' },
      { href: '/lifestyle/exercise', text: 'Exercise' },
      { href: '/lifestyle/mental-health', text: 'Mental health' }
    ]
  };

  // Determine current section and items
  $: currentSection = $page.url.pathname.split('/')[1];
  $: currentItems = healthGuide[currentSection] || [];
  $: contentsWithCurrent = currentItems.map(item => ({
    ...item,
    current: item.href === $page.url.pathname
  }));

  function handleSectionNavigation(event: CustomEvent) {
    const { href, text } = event.detail;
    
    // Update navigation store
    navigationStore.update(state => ({
      ...state,
      currentSection,
      visitedPages: state.visitedPages.add(href),
      lastVisited: { href, text, timestamp: Date.now() }
    }));

    // Custom analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'navigate', {
        event_category: 'contents_list',
        event_label: text,
        value: href
      });
    }
  }
</script>

{#if contentsWithCurrent.length > 0}
  <ContentsList 
    items={contentsWithCurrent}
    ariaLabel="{currentSection} guide navigation"
    classes="health-guide-contents"
    on:navigate={handleSectionNavigation}
  />
{/if}
