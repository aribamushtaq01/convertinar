/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#81bb26',
        'primary-hover': '#72a621',
        foreground: '#1a1a1a',
        muted: '#666666',
      },
      screens: {
        // Matches your specific 992px requirement
        lg: '992px',
      },
      boxShadow: {
        'primary-glow': '0 4px 14px 0 rgba(129, 187, 38, 0.39)',
        'primary-hover': '0 6px 20px rgba(129, 187, 38, 0.23)',
      },
    },
  },
  plugins: [],
};