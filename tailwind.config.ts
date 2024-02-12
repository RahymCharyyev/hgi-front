import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#27347A',
        secondary: '#1677ff',
        background: '#F2F2F2',
      },
      backgroundImage: {
        headerBg: "url('/diplomat/header_bg.webp')",
      },
    },
    screens: {
      xl: { max: '1510px' },
      lg: { max: '1310px' },
      md: { max: '1020px' },
      sm: { max: '710px' },
      xs: { max: '400px' },
    },
  },
  plugins: [],
};
export default config;
