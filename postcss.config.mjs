const config = {
  plugins: {
    "@tailwindcss/postcss": {
      sources: [
        {
          pattern: "./app/**/*.{js,ts,jsx,tsx}",
          negated: false,
        },
      ],
    },
  },
};

export default config;
