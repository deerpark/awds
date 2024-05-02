/** @type {import('tailwindcss').Config} */

import formsPlugin from '@tailwindcss/forms'
import headlessUiPlugin from '@headlessui/tailwindcss'

// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
import colors from './colors.config'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1860px',
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
      },
      margin: {
        1.5: '1.5px',
      },
      outlineWidth: {
        3: '3px',
      },
      fontSize: {
        display1: [
          'var(--awds-font-size-32)',
          {
            lineHeight: 'var(--awds-line-height-36)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-extra-bold)',
          },
        ],
        display2: [
          'var(--awds-font-size-28)',
          {
            lineHeight: 'var(--awds-line-height-32)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-bold)',
          },
        ],
        display3: [
          'var(--awds-font-size-24)',
          {
            lineHeight: 'var(--awds-line-height-32)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-bold)',
          },
        ],
        display4: [
          'var(--awds-font-size-24)',
          {
            lineHeight: 'var(--awds-line-height-32)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-regular)',
          },
        ],
        headline1: [
          'var(--awds-font-size-20)',
          {
            lineHeight: 'var(--awds-line-height-28)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-bold)',
          },
        ],
        headline2: [
          'var(--awds-font-size-18)',
          {
            lineHeight: 'var(--awds-line-height-24)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-bold)',
          },
        ],
        label1: [
          'var(--awds-font-size-16)',
          {
            lineHeight: 'var(--awds-line-height-24)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-bold)',
          },
        ],
        label2: [
          'var(--awds-font-size-14)',
          {
            lineHeight: 'var(--awds-line-height-20)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-bold)',
          },
        ],
        label3: [
          'var(--awds-font-size-13)',
          {
            lineHeight: 'var(--awds-line-height-20)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-bold)',
          },
        ],
        label4: [
          'var(--awds-font-size-12)',
          {
            lineHeight: 'var(--awds-line-height-18)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-semibold)',
          },
        ],
        body1: [
          'var(--awds-font-size-20)',
          {
            lineHeight: 'var(--awds-line-height-28)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-regular)',
          },
        ],
        body2: [
          'var(--awds-font-size-16)',
          {
            lineHeight: 'var(--awds-line-height-24)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-regular)',
          },
        ],
        body3: [
          'var(--awds-font-size-14)',
          {
            lineHeight: 'var(--awds-line-height-20)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-regular)',
          },
        ],
        body4: [
          'var(--awds-font-size-13)',
          {
            lineHeight: 'var(--awds-line-height-20)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-regular)',
          },
        ],
        body5: [
          'var(--awds-font-size-12)',
          {
            lineHeight: 'var(--awds-line-height-18)',
            letterSpacing: 'var(--awds-letter-spacing--1)',
            fontWeight: 'var(--awds-font-weight-regular)',
          },
        ],
        body6: [
          'var(--awds-font-size-11)',
          {
            lineHeight: 'var(--awds-line-height-16)',
            letterSpacing: 'var(--awds-letter-spacing-0)',
            fontWeight: 'var(--awds-font-weight-regular)',
          },
        ],
      },
      borderWidth: {
        1: '1.5px',
      },
      borderRadius: {
        '2xs': '0.125rem' /* 2px */,
        xs: '0.1875rem' /* 3px */,
        sm: 'var(--awds-radius-4)' /* 4px */,
        DEFAULT: '0.3125rem' /* 5px */,
      },
      colors,
    },
  },
  plugins: [headlessUiPlugin({ prefix: 'ui' }), formsPlugin],
}
