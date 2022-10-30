/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "ubuhanga-100": "#FAFAFA",
        "ubuhanga-300": "#999999",
        "ubuhanga-gray-200": "#E6E6E6", //new
        "ubuhanga-gray-300": "#999999", //new
        "ubuhanga-border-gray": "#0006291a", //new
        "ubuhanga-blue-100": "#F7F8FA", //new
        "ubuhanga-blue-200": "#EBEDF2",
        "ubuhanga-blue-300": "#DFE1E6",
        "ubuhanga-blue-400": "#CED2D9", //new
        "ubuhanga-blue-500": "#8F9BB3", //new
        "ubuhanga-blue-600": "#6B7A99", //new
        "ubuhanga-blue-700": "#455473", //new
        "ubuhanga-blue-800": "#303A50",
        "ubuhanga-orange-100": "#FFF4E6", //new
        "ubuhanga-yellow-100": "#F5E673", //new
        "ubuhanga-green-300": "#9df26f", //new
        primary: "#1A66FF",
        secondary: "#FF9F1A",
        "highlight-blue": "#E7F3FF",
        "highlight-orange": "#FFEFD9",
        "highlight-red": "#FFE8E6", //new
        "highlight-green": "#EDFAEF", //new
        "highlight-border-blue": "#B3CCFF", //new
        "highlight-border-red": "#FFBFB3", //new
        "highlight-border-green": "#98D9A3", //new
        success: "#1DBF38",
        error: "#FF401A",
        "ubuhanga-black": "#000629", //new
        "secondary-hover": "#1bbf38d9",
        "primary-hover": "#1a66ffde",
        "gradient-start": "#3D9EFF",
        "gradient-end": "#3353F4",
      },
      width: {
        "1/7": "15%",
        "23/100": "23%",
        "17/20": "85%",
      },
      height: {
        0.5: "0.1rem",
        50: "50%",
        "1/10": "10%",
        "17/20": "85%",
        "screen-10": "10vh",
        "screen-30": "30vh",
      },
      borderRadius: {
        "ubuhanga-xl": "20px",
      },
      fontFamily: {
        Inter: ['"Inter"', '"system-ui"', '"sans-serif"'],
      },
      fontWeight: {
        normal: 100,
        regular: 200,
        semibold: 300,
        bold: 600,
      },
      fontSize: {
        xsm: "0.7rem",
      },
      padding: {
        input: "0.7rem",
      },
      screens: {
        xsm: "320px",
        mdsm: "375px",
        lgsm: "475px",
      },
      boxShadow: {
        "morphism-white": "5px 5px 10px #ededed,-5px -5px 10px #ffffff",
        "morphism-inside":
          "inset 3px 3px 8px #ededed,inset -3px -2px 13px #ffffff",
        "morphism-gray-100": "3px 3px 7px #F7F8FA,-5px -5px 10px #e5e7eb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require(`@tailwindcss/typography`)],
}