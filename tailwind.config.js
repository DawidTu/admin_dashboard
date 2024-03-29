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
        "sidepanel": "#1e293b",
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".main-banner": {
            "background-color": "#C7D2FE",
          },
          ".nav-bar": {
            "background-color": "#FFFFFF",
            "border-b": "#e5e7eb",
          },
          ".main-content": {
            "background-color": "#FFFFFF",
            "border-color": "#E2E8F0",
          },
          ".sub-text": {
            "background-color": "#f3f4f6",
          },
          ".navbutton": {
            "background-color": "#F1F5F9",
          },
          ".navuserprofile": {
            "background-color": "#334155",
          },
          ".userprofile": {
            "background-color": "#FFFFFF",
          },
          ".planbunner": {
            "background-color": "#eef2ff",
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ".main-banner": {
            "background-color": "#6366f1",
          },
          ".nav-bar": {
            "background-color": "#182235",
            "border-b": "#334155"
          },
          ".main-content": {
            "background-color": "#1e293b",
            "border-color": "#334155",
          },
          ".sub-text": {
            "background-color": "#64748b",
          },
          ".navbutton": {
            "background-color": "#334155",
          },          
          ".navuserprofile": {
            "background-color": "#334155",
          },          
          ".userprofile": {
            "background-color": "#1e293b",
          },          
          ".planbunner": {
            "background-color": "#6366f1",
          },          
        },
      },
    ],
  },
};
