module.exports = {
  // 追記
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'flower-pattern': "url('/backgound_flower3.jpg')",
        'yui-picture': "url('/icon_yui.jpg')",
      },
      height: (theme) => ({
        "screen-4/5": "80vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      width: (theme) => ({
        "7/10": "70vw",
        "9/10": "90vw",
        "screen/2": "50vw",
        "screen/3": "calc(100vw / 3)",
        "screen/4": "calc(100vw / 4)",
        "screen/5": "calc(100vw / 5)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
