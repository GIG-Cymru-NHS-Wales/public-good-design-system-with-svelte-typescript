<script lang="ts">
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import { page } from '$app/stores';
  import type { BreadcrumbItem } from '$lib/types';

  // Dynamic breadcrumbs based on current route
  const breadcrumbItems = $derived(() => {
    const pathSegments = $page.url.pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [
      { href: '/', text: 'Home' }
    ];

    let currentPath = '';
    pathSegments.slice(0, -1).forEach((segment, index) => {
      currentPath += `/${segment}`;
      items.push({
        href: currentPath,
        text: segment.charAt(0).toUpperCase() + segment.slice(1),
        attributes: {
          'data-sveltekit-preload-data': 'hover'
        }
      });
    });

    return items;
  });

  // Current page info
  const currentPageText = $derived(() => {
    const segments = $page.url.pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return lastSegment ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1) : 'Home';
  });
</script>

<Breadcrumb
  items={breadcrumbItems}
  text={currentPageText}
  href={$page.url.pathname}
  attributes={{
    'data-current-page': $page.route.id
  }}
/>
