import { type Config } from "tailwindcss";
import daisyui from "daisyui"
import typography from "@tailwindcss/typography";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [
    typography,
    // @ts-expect-error typical type error w/ plugins
    daisyui
  ],
  daisyui: {
    themes: [ "nord" ]
  },
} satisfies Config;
