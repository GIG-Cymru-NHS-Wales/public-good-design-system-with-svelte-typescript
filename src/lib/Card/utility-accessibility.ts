export function createAccessibleCard(
  cardProps: CardProps,
  options: {
    ariaLabel?: string;
    role?: string;
    tabIndex?: number;
  } = {}
): CardProps {
  return {
    ...cardProps,
    attributes: {
      ...cardProps.attributes,
      ...(options.ariaLabel && { 'aria-label': options.ariaLabel }),
      ...(options.role && { role: options.role }),
      ...(options.tabIndex !== undefined && { tabindex: options.tabIndex.toString() })
    }
  };
}
