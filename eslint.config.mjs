import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/.next/**", "**/out/**"],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
    "plugin:mdx/recommended",
  ),
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];
