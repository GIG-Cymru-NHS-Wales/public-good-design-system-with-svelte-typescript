export function createAnalyticsCard(
  cardProps: CardProps,
  analyticsData: {
    event: string;
    category: string;
    label?: string;
    value?: number;
  }
): CardProps {
  return {
    ...cardProps,
    attributes: {
      ...cardProps.attributes,
      'data-analytics-event': analyticsData.event,
      'data-analytics-category': analyticsData.category,
      'data-analytics-label': analyticsData.label || '',
      'data-analytics-value': analyticsData.value?.toString() || ''
    }
  };
}
