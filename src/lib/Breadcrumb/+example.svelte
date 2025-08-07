<script lang="ts">
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import type { BreadcrumbItem } from '$lib/types';

  // Basic breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      href: '/',
      text: 'Home'
    },
    {
      href: '/services',
      text: 'Services'
    },
    {
      href: '/services/health',
      text: 'Health services'
    }
  ];

  // Advanced breadcrumb items with attributes
  const advancedItems: BreadcrumbItem[] = [
    {
      href: '/',
      text: 'Home',
      attributes: { 'data-track': 'breadcrumb-home' }
    },
    {
      href: '/departments',
      text: 'Departments',
      attributes: { lang: 'en' }
    },
    {
      href: '/departments/cardiology',
      text: 'Cardiology',
      classes: 'custom-breadcrumb-item',
      attributes: {
        lang: 'en',
        'data-department-id': 'card-001'
      }
    }
  ];
</script>

<!-- Basic usage -->
<Breadcrumb
  items={breadcrumbItems}
  text="Current Page"
  href="/services/health/current"
/>

<!-- Without final breadcrumb item (uses last item in array for back link) -->
<Breadcrumb items={breadcrumbItems} />

<!-- Reverse style (for dark backgrounds) -->
<Breadcrumb
  items={breadcrumbItems}
  text="Current Page"
  href="/current"
  classes="nhsuk-breadcrumb--reverse"
/>

<!-- With custom accessibility label -->
<Breadcrumb
  items={breadcrumbItems}
  text="Patient Information"
  href="/patients/info"
  labelText="Navigation breadcrumb"
/>

<!-- With custom attributes -->
<Breadcrumb
  items={advancedItems}
  text="Patient Details"
  href="/patients/12345"
  attributes={{
    'data-testid': 'main-breadcrumb',
    'data-track-section': 'navigation'
  }}
/>
