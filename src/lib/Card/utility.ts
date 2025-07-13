
export function createCareCard(
  type: CareCardType,
  heading: string,
  content?: string,
  options: Partial<CardProps> = {}
): CardProps {
  return {
    type,
    heading,
    headingLevel: 3,
    description: content,
    ...options
  };
}

export function createClickableCard(
  heading: string,
  href: string,
  description?: string,
  options: Partial<CardProps> = {}
): CardProps {
  return {
    heading,
    href,
    clickable: true,
    description,
    headingClasses: 'nhsuk-heading-m',
    ...options
  };
}

export function createPrimaryCard(
  heading: string,
  href: string,
  description?: string,
  options: Partial<CardProps> = {}
): CardProps {
  return {
    heading,
    href,
    primary: true,
    clickable: true,
    headingClasses: 'nhsuk-heading-m',
    description,
    ...options
  };
}

export function createFeatureCard(
  heading: string,
  href: string,
  description?: string,
  options: Partial<CardProps> = {}
): CardProps {
  return {
    heading,
    href,
    feature: true,
    headingClasses: 'nhsuk-heading-m',
    description,
    ...options
  };
}
