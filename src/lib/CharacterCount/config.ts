export const characterCountConfig = {
  name: 'Character Count',
  examples: {
    default: {
      name: 'more-detail',
      id: 'more-detail',
      maxlength: 10,
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      }
    },
    withDefaultValue: {
      name: 'more-detail',
      id: 'more-detail',
      maxlength: 70,
      value: '123',
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      }
    },
    withThreshold: {
      name: 'more-detail',
      id: 'more-detail',
      maxlength: 10,
      threshold: 8,
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      }
    },
    withMaxWords: {
      name: 'more-detail',
      id: 'more-detail',
      maxwords: 10,
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: 'Do not include personal information, like your name, date of birth or NHS number'
      }
    }
  }
} as const;
