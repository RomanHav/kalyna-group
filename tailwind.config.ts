import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,json}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,json}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,json}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom-blue': '#11998E',
        'custom-green': '#38EF7D',
        'custom-background': '#1b3431',
        'custom-running-first': '#A1FFCE',
        'custom-running-second': '#FAFFD1',
        'custom-black': '#333333',
        'custom-yellow': '#6B662E',
        'custom-blue-second': '#5B86E5',
        'custom-blue-third': '#36D1DC',
        'custom-grey': '#434343',
        'custom-button': '#15645E',
        'custom-form': '#F4F4F6',
        'custom-hover-first': '#00F260',
        'custom-hover-second': '#0575E6',
        'custom-case-btn': '#2C5364',
      },
      backgroundImage: {
        texture: "url('/background.png')",
        form: "url('/footer-form-bkg.jpg')",
        contactUsModal: "url('/doodad.jpg')",
        bkgForm: "url('/bkg-form.jpg')",
        test: "url('/contact-us-form.jpg')",
        woodMinded: "url('/wood-minded.jpg')",
        alcotrade: "url('/alcotrade.jpg')",
        inside: "url('/inside.jpg')",
        yourProject: "url('/your-project.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
