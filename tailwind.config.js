const defaultTheme = require("tailwindcss/defaultTheme");

const sharedDaisyVariables = {
  "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
  "--animation-btn": "0s", // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-text-case": "none", // set default text transform for buttons
  "--btn-focus-scale": "1", // scale transform of button when you focus on it
  "--border-btn": "3px", // border width of buttons
  "--tab-border": "1px", // border width of tabs
  "--tab-radius": "0.5rem", // border radius of tabs
};

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        display: ["Oswald", ...defaultTheme.fontFamily.sans],
      },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require("daisyui")
	],

	daisyui: {
    themes: [
      {
        light: {
          primary: "#00CC2C",
          "primary-focus": "#09e539",
          "primary-content": "#000",
          secondary: "#aeaeae",
          "secondary-focus": "#ccc",
          "secondary-content": "#363636",
          accent: "#FB8F2D",
          "accent-focus": "#ffa049",
          "accent-content": "#1F1F1F",
          neutral: "#333",
          "neutral-focus": "#555",
          "neutral-content": "#fff",
          "base-100": "#fff",
          "base-200": "#f8f8f8",
          "base-300": "#eee",
          "base-content": "#222",
          ...sharedDaisyVariables,
        },
        dark: {
          primary: "#00CC2C",
          "primary-focus": "#09e539",
          "primary-content": "#000",
          secondary: "#aeaeae",
          "secondary-focus": "#ccc",
          "secondary-content": "#363636",
          accent: "#FB8F2D",
          "accent-focus": "#ffa049",
          "accent-content": "#1F1F1F",
          neutral: "#ddd",
          "neutral-focus": "#fff",
          "neutral-content": "#222",
          "base-100": "#222",
          "base-200": "#2d2d2d",
          "base-300": "#333",
          "base-content": "#ddd",
          ...sharedDaisyVariables,
        },
      },
    ],
  },
};
