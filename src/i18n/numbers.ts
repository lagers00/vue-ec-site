// We specify the formats our app will use
export const numberFormats = {
    'en': {
      // A named format
      coords: {
        // These options are passed to Intl.NumberFormat
        style: 'decimal',
        minimumSignificantDigits: 6,
        maximumSignificantDigits: 6,
      },
    },
    'ja': {
      coords: {
        style: 'decimal',
        minimumSignificantDigits: 6,
        maximumSignificantDigits: 6,
      },
    },
  }