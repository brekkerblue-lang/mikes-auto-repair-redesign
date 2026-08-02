/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled from the shop's own real street-facing photo (934 N
        // Wycoff Ave): the vivid royal-blue cinder-block wall, the
        // mustard-yellow window trim, and the deep maroon door, all
        // pixel-picked directly from the storefront image rather than
        // invented.
        royal: {
          50: '#F1F3F7',
          100: '#DBE0EB',
          300: '#93A1C4',
          400: '#4B639D',
          500: '#0F2F7C',
          600: '#0C2766',
          700: '#0A1F51',
        },
        mustard: {
          50: '#F8F6F1',
          100: '#EEE8DD',
          300: '#CDBA98',
          400: '#AC8C53',
          500: '#90661A',
          600: '#765415',
          700: '#5E4211',
        },
        maroon: {
          50: '#F4F1F1',
          100: '#E3DDDD',
          300: '#AA9899',
          400: '#725356',
          500: '#431A1D',
          600: '#371518',
          700: '#2C1113',
        },
        cream: {
          DEFAULT: '#FAF7EF',
          100: '#F3EEE1',
        },
        ink: {
          DEFAULT: '#201C1A',
          800: '#2A2523',
          900: '#181514',
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', '"Archivo"', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
