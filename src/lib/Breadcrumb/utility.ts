export function createBreadcrumbFromRoute(
  pathname: string,
  routeLabels: Record<string, string> = {}
): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [
    { href: '/', text: 'Home' }
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

    items.push({
      href: currentPath,
      text: label,
      attributes: {
        'data-sveltekit-preload-data': 'hover'
      }
    });
  });

  return items.slice(0, -1); // Remove the last item as it's the current page
}

export function createBreadcrumbFromData(
  navigationData: Array<{ id: string; name: string; path: string }>,
  currentPath: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [];

  // Find the current page and build breadcrumb trail
  const findPath = (path: string): BreadcrumbItem[] => {
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { href: '/', text: 'Home' }
    ];

    segments.forEach((segment, index) => {
      const itemPath = '/' + segments.slice(0, index + 1).join('/');
      const item = navigationData.find(nav => nav.path === itemPath);

      if (item) {
        breadcrumbs.push({
          href: item.path,
          text: item.name,
          attributes: {
            'data-nav-id': item.id
          }
        });
      }
    });

    return breadcrumbs.slice(0, -1); // Remove current page
  };

  return findPath(currentPath);
}
