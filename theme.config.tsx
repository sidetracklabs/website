import React from "react";
import Image from "next/image";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import logo from "@/assets/logo.png";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <Image src={logo} alt={"Logo"} width={25} height={25} />,
  project: {
    link: "https://github.com/sidetracklabs",
  },
  // chat: {
  // link: 'https://discord.com',
  // },
  docsRepositoryBase: "https://github.com/sidetracklabs/website",
  head: function useHead() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const url =
      "https://sidetrack.run" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || title} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "An open source, PostgreSQL-backed, typescript-first background job library."
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </>
    );
  },
  footer: {
    content: <div>Sidetrack Labs</div>,
  },
  // footer: {
  //   text: (
  //     <span>
  //       {/* MIT {new Date().getFullYear()} ©{" "} */}
  //       {new Date().getFullYear()}{" "}
  //       <a href="https://sidetrack.run" target="_blank">
  //         Sidetrack Labs
  //       </a>
  //     </span>
  //   ),
  // },
};

export default config;
