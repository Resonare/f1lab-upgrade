import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      consulting: '#FEFFE0',
      cloud: '#D2F3F3',
      security: '#FBE3FF',
      alert: '#F24055',
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
