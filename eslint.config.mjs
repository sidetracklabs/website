import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    ignores: ["**/.next/**", "**/out/**"],
  },
  ...compat.extends(
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:mdx/recommended",
  ),
  eslintPluginPrettierRecommended,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];
