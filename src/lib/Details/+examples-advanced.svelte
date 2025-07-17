<script lang="ts">
  import Details from '$lib/components/Details.svelte';
  import { writable } from 'svelte/store';

  // Store for managing multiple details states
  const detailsStore = writable({
    faq1: false,
    faq2: false,
    faq3: false
  });

  // FAQ data
  const faqData = [
    {
      id: 'faq1',
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment online through our patient portal or by calling our reception team.'
    },
    {
      id: 'faq2',
      question: 'What should I bring to my appointment?',
      answer: 'Please bring a valid form of ID, your NHS card, and any relevant medical documents.'
    },
    {
      id: 'faq3',
      question: 'Can I cancel my appointment?',
      answer: 'Yes, you can cancel your appointment up to 24 hours in advance through our online system or by phone.'
    }
  ];

  // Handle FAQ toggle with analytics
  function handleFaqToggle(faqId: string, isOpen: boolean) {
    detailsStore.update(state => ({
      ...state,
      [faqId]: isOpen
    }));

    // Track in analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', isOpen ? 'faq_opened' : 'faq_closed', {
        event_category: 'faq',
        event_label: faqId,
        value: isOpen ? 1 : 0
      });
    }
  }

  // Expand all functionality
  function expandAll() {
    const allOpen = Object.fromEntries(
      faqData.map(faq => [faq.id, true])
    );
    detailsStore.set(allOpen);
  }

  function collapseAll() {
    const allClosed = Object.fromEntries(
      faqData.map(faq => [faq.id, false])
    );
    detailsStore.set(allClosed);
  }
</script>

<div class="faq-controls">
  <button type="button" class="nhsuk-button nhsuk-button--secondary" on:click={expandAll}>
    Expand All
  </button>
  <button type="button" class="nhsuk-button nhsuk-button--secondary" on:click={collapseAll}>
    Collapse All
  </button>
</div>

<div class="faq-list">
  {#each faqData as faq}
    <Details
      summaryText={faq.question}
      text={faq.answer}
      classes="nhsuk-expander"
      bind:open={$detailsStore[faq.id]}
      on:toggle={(e) => handleFaqToggle(faq.id, e.detail.open)}
      attributes={{
        'data-faq-id': faq.id,
        'data-testid': `faq-${faq.id}`
      }}
    />
  {/each}
</div>