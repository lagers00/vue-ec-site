export const datetimeFormats = {
    'en': {
      full: {
        // These options are passed to Intl.DateTimeFormat
        dateStyle: 'full',
        timeStyle: 'full',
      },
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
    },
    'ja': {
      full: {
        dateStyle: 'full',
        timeStyle: 'full',
      },
      short: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    },
  }