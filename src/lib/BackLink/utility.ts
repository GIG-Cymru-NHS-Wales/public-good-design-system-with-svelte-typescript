export function createBackLinkProps(
  type: 'history' | 'href' | 'custom',
  options: Partial<BackLinkProps> = {}
): BackLinkProps {
  const baseProps: BackLinkProps = {
    text: 'Back',
    ...options
  };

  switch (type) {
    case 'history':
      return {
        ...baseProps,
        element: 'button'
      };
    case 'href':
      return {
        ...baseProps,
        element: 'a',
        href: options.href || '#'
      };
    case 'custom':
    default:
      return baseProps;
  }
}
