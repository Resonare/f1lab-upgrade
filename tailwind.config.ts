import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      consulting: '#D2F3F3',
      cloud: '#FEFFE0',
      security: '#FBE3FF',
      accent: '#00FFC5',
      'accent-dark': '#01CA9A',
      black: '#22282E',
      white: '#F1F1F1',
      grey: '#BDBDBD',
    },
    fontFamily: {
      title: 'RFDewiExpanded-Ultrabold',
      subtitle: 'RFDewiExpanded-Bold',
      text: 'Bahnschrift',
    },
    extend: {},
  },

  plugins: [],
} satisfies Config;
