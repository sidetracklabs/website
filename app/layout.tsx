import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Image from "next/image";
import logo from "@/assets/logo.png";
// Required for theme styles, previously was imported under the hood
import "nextra-theme-docs/style.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  // ... your metadata API
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={<Image src={logo} alt="Logo" width={25} height={25} />}
    projectLink="https://github.com/sidetracklabs"
  />
);
const footer = (
  <Footer className="flex-col items-center md:items-start">
    <div>Sidetrack Labs</div>
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/sidetracklabs/website"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          feedback={{
            content: "Question? Give us feedback",
          }}
          themeSwitch={{
            dark: "Dark",
            light: "Light",
            system: "System",
          }}
          // ...Your additional theme config options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
