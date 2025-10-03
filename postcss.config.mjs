const config = {
  plugins: {
    "@tailwindcss/postcss": {
      sources: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    },
  },
};

export default config;
