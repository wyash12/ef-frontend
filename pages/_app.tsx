import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const layout =
    Component.getLayout ||
    ((page: any) => (
      <>
        <Navbar />
        {page}
        <Footer />
      </>
    ));

  return layout(<Component {...pageProps} />);
}
