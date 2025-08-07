/**
 * Get fragment from URL
 * Extract the fragment (everything after #) from a URL
 */
export function getFragmentFromUrl(url: string): string | null {
  if (!url || url.indexOf('#') === -1) {
    return null;
  }

  return url.split('#').pop() || null;
}