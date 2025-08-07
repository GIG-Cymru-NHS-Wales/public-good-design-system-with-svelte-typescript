export function createCharacterCountProps(
  name: string,
  label: string,
  options: Partial<CharacterCountProps> = {}
): CharacterCountProps {
  return {
    name,
    label: { text: label },
    maxlength: 500,
    ...options
  };
}

export function createWordCountProps(
  name: string,
  label: string,
  maxWords: number,
  options: Partial<CharacterCountProps> = {}
): CharacterCountProps {
  return {
    name,
    label: { text: label },
    maxwords: maxWords,
    ...options
  };
}

// Validation helpers
export function validateCharacterCount(
  value: string,
  maxlength?: number,
  maxwords?: number,
  required = false
): string | null {
  if (required && !value.trim()) {
    return 'This field is required';
  }

  if (maxlength && value.length > maxlength) {
    return `Must be ${maxlength} characters or less`;
  }

  if (maxwords) {
    const wordCount = value.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount > maxwords) {
      return `Must be ${maxwords} words or less`;
    }
  }

  return null;
}

// Accessibility helpers
export function announceCharacterCount(
  currentCount: number,
  limit: number,
  isWords = false
): void {
  const remaining = limit - currentCount;
  const unit = isWords ? 'word' : 'character';
  const units = isWords ? 'words' : 'characters';

  let message: string;
  if (remaining === 1) {
    message = `You have 1 ${unit} remaining`;
  } else if (remaining > 0) {
    message = `You have ${remaining} ${units} remaining`;
  } else if (remaining === -1) {
    message = `You have 1 ${unit} too many`;
  } else {
    message = `You have ${Math.abs(remaining)} ${units} too many`;
  }

  // Announce to screen readers
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'nhsuk-u-visually-hidden';
  announcement.textContent = message;

  document.body.appendChild(announcement);
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}
