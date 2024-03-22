module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "rgb(241 245 249)",
        "main-color": "rgb(99 102 241)", // purple
        "bg-danger": "rgb(255,14,14)",
        "bg-success": "rgb(34,187,51)",
        "border-color": "rgb(229 231 235 / var(--tw-border-opacity))",
        "secondary-main": "RGB(79, 82, 221)",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        "sidepanel": "rgb(30, 41, 59)",
        "box": "#fff",
      },
      textColor: {
        "sidebar-text": "#667488",
        "main": "rgb(226, 232, 240)",
        "subtitle": "rgb(229, 231, 235)",
        "logo": "rgb(99 102 241)",
        "danger": "rgb(255,14,14)",
        "success": "rgb(34,187,51)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        "danger": "rgb(255,14,14)",
        "success": "rgb(34,187,51)",
      },
    },
  },
  plugins: [],
};
