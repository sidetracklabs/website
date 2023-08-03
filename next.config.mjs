import { nodeTypes } from "@mdx-js/mdx";
import nextra from "nextra";
import rehypeRaw from "rehype-raw";
import remarkShikiTwoslash from "remark-shiki-twoslash";

// import ts from "typescript";

// const { options } = ts.convertCompilerOptionsFromJson(
//   { module: "ESNext" },
//   "."
// );

// console.log("OPTIONS", options);

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
    remarkPlugins: [
      [
        remarkShikiTwoslash.default,
        {
          defaultCompilerOptions: {
            types: ["node"],
            moduleResolution: 100, // bundler
            module: 99, // esnext
          },
          themes: ["dark-plus", "light-plus"],
        },
      ],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
};

export default withNextra(nextConfig);
