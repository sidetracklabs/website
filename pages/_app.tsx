import "@/styles/twoslash.css";
import "@/styles/global.css";

import type { AppProps } from "next/app";

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
