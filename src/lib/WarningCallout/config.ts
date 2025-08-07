import type { WarningType, WarningConfig } from './types';

/**
 * CSS class names used by the component
 */
export const classNames = {
  root: 'nhsuk-warning-callout',
  label: 'nhsuk-warning-callout__label',
  visuallyHidden: 'nhsuk-u-visually-hidden'
} as const;

/**
 * Default configuration
 */
export const defaultConfig = {
  headingLevel: 3 as const,
  defaultHeading: 'Important'
};

/**
 * Common warning configurations
 */
export const warningConfigs: Record<WarningType, WarningConfig> = {
  important: {
    heading: 'Important',
    type: 'important'
  },
  safety: {
    heading: 'Safety information',
    type: 'safety'
  },
  medical: {
    heading: 'Medical warning',
    type: 'medical'
  },
  allergy: {
    heading: 'Allergy warning',
    type: 'allergy'
  },
  interaction: {
    heading: 'Drug interactions',
    type: 'interaction'
  },
  dosage: {
    heading: 'Dosage warning',
    type: 'dosage'
  },
  storage: {
    heading: 'Storage instructions',
    type: 'storage'
  },
  pregnancy: {
    heading: 'Pregnancy and breastfeeding',
    type: 'pregnancy'
  },
  driving: {
    heading: 'Driving and using machines',
    type: 'driving'
  },
  alcohol: {
    heading: 'Alcohol warning',
    type: 'alcohol'
  },
  'side-effects': {
    heading: 'Possible side effects',
    type: 'side-effects'
  },
  emergency: {
    heading: 'Emergency warning',
    type: 'emergency'
  }
};

/**
 * Common warning messages by category
 */
export const commonWarnings = {
  medicines: {
    interactions: "For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements.",
    pregnancy: "If you're pregnant or breastfeeding, check with your doctor or pharmacist before taking this medicine.",
    driving: "Do not drive or use machines if this medicine makes you feel drowsy, dizzy or affects your vision.",
    alcohol: "Do not drink alcohol while taking this medicine as it may increase side effects.",
    storage: "Store this medicine in a cool, dry place away from direct sunlight and out of reach of children.",
    allergies: "Do not take this medicine if you are allergic to any of its ingredients. Check the patient information leaflet for a full list."
  },
  
  health: {
    emergency: "Call 999 or go to A&E immediately if you experience severe symptoms.",
    infection: "Stay away from school, nursery or work until you're no longer infectious.",
    contagious: "This condition is highly contagious. Avoid close contact with others until symptoms improve.",
    symptoms: "See a GP urgently if your symptoms get worse or don't improve after a few days.",
    vaccination: "Make sure your vaccinations are up to date to prevent this condition."
  },
  
  procedures: {
    beforeSurgery: "Tell your surgeon about all medicines you're taking, including supplements and herbal remedies.",
    aftercare: "Follow all aftercare instructions carefully to avoid complications.",
    recovery: "Do not do strenuous activities for the time specified by your doctor.",
    wounds: "Keep the wound clean and dry. Contact your GP if you notice signs of infection.",
    appointments: "Do not miss your follow-up appointments as they are important for your recovery."
  },
  
  lifestyle: {
    diet: "Some foods may interact with this treatment. Ask your doctor about dietary restrictions.",
    exercise: "Avoid strenuous exercise until your doctor says it's safe to resume normal activities.",
    sun: "This treatment may make your skin more sensitive to sunlight. Use sun protection.",
    smoking: "Smoking may reduce the effectiveness of this treatment or increase side effects.",
    travel: "Check with your doctor before travelling, especially to areas that require vaccinations."
  }
};

/**
 * Helper to check if heading contains "Important" (case-insensitive)
 */
export function isImportantHeading(heading: string): boolean {
  return heading.toLowerCase().includes('important');
}

/**
 * Helper to create a warning callout configuration
 */
export function createWarningConfig(
  type: WarningType,
  customText?: string
): { heading: string; text?: string } {
  const config = warningConfigs[type];
  return {
    heading: config.heading,
    text: customText
  };
}
