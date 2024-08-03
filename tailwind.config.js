/** @type {import('tailwindcss').Config} */
import tailwindFormPlugin from "@tailwindcss/forms";
import { fontFamily } from "tailwindcss/defaultTheme";
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary: "0px 0px 20px -10px #000000",
      },
      fontFamily: {
        sans: ["Iran-Yekan", ...fontFamily.sans],
      },
      colors: {
        "primary-blue": {
          900: withOpacity("--primary-blue-900"),
          800: withOpacity("--primary-blue-800"),
          700: withOpacity("--primary-blue-700"),
          600: withOpacity("--primary-blue-600"),
          500: withOpacity("--primary-blue-500"),
          400: withOpacity("--primary-blue-400"),
          300: withOpacity("--primary-blue-300"),
          200: withOpacity("--primary-blue-200"),
          100: withOpacity("--primary-blue-100"),
          50: withOpacity("--primary-blue-50"),
        },
        "primary-gray": {
          900: withOpacity("--primary-gray-900"),
          800: withOpacity("--primary-gray-800"),
          700: withOpacity("--primary-gray-700"),
          600: withOpacity("--primary-gray-600"),
          500: withOpacity("--primary-gray-500"),
          400: withOpacity("--primary-gray-400"),
          300: withOpacity("--primary-gray-300"),
          200: withOpacity("--primary-gray-200"),
          100: withOpacity("--primary-gray-100"),
          50: withOpacity("--primary-gray-50"),
          0: withOpacity("--primary-gray-0"),
        },
        success: withOpacity("--success"),
        warning: withOpacity("--warning"),
        error: withOpacity("--error"),
        "red-500": withOpacity("--red-500"),
        "red-300": withOpacity("--red-300"),
        "custom-red": "#f02",
      },
      container: {
        center: true,
        margin: 0,
      },
    },
  },
  plugins: [
    tailwindFormPlugin({
      strategy: "class",
    }),
  ],
};
