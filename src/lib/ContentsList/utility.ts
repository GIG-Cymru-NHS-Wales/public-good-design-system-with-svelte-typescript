export function createContentsListProps(
  items: Array<{ href: string; text: string; current?: boolean }>,
  options: Partial<ContentsListProps> = {}
): ContentsListProps {
  return {
    items,
    ariaLabel: 'Pages in this guide',
    ...options
  };
}

export function createContentsItem(
  href: string,
  text: string,
  current = false
): ContentsItem {
  return {
    href,
    text,
    current
  };
}

export function createGuideContents(
  basePath: string,
  sections: Array<{ slug: string; title: string }>,
  currentPath: string
): ContentsItem[] {
  return sections.map(section => ({
    href: `${basePath}/${section.slug}`,
    text: section.title,
    current: `${basePath}/${section.slug}` === currentPath
  }));
}

// Navigation helpers
export function findCurrentItem(items: ContentsItem[]): ContentsItem | null {
  return items.find(item => item.current) || null;
}

export function findNextItem(items: ContentsItem[]): ContentsItem | null {
  const currentIndex = items.findIndex(item => item.current);
  if (currentIndex >= 0 && currentIndex < items.length - 1) {
    return items[currentIndex + 1];
  }
  return null;
}

export function findPreviousItem(items: ContentsItem[]): ContentsItem | null {
  const currentIndex = items.findIndex(item => item.current);
  if (currentIndex > 0) {
    return items[currentIndex - 1];
  }
  return null;
}

// Progress tracking helpers
export function calculateProgress(
  items: ContentsItem[],
  completedHrefs: Set<string>
): number {
  if (items.length === 0) return 0;
  const completed = items.filter(item => completedHrefs.has(item.href)).length;
  return Math.round((completed / items.length) * 100);
}

export function getNavigationData(
  items: ContentsItem[],
  currentPath: string
) {
  const currentIndex = items.findIndex(item => item.href === currentPath);

  return {
    current: currentIndex >= 0 ? items[currentIndex] : null,
    previous: currentIndex > 0 ? items[currentIndex - 1] : null,
    next: currentIndex >= 0 && currentIndex < items.length - 1 ? items[currentIndex + 1] : null,
    isFirst: currentIndex === 0,
    isLast: currentIndex === items.length - 1,
    position: currentIndex + 1,
    total: items.length
  };
}

// SEO and structured data helpers
export function generateBreadcrumbStructuredData(items: ContentsItem[]) {
  const currentItem = items.find(item => item.current);
  if (!currentItem) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.text,
      "item": item.href
    }))
  };
}
