import { Fragment, useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/fonts.css";
import { loadFonts } from "../styles/fonts";

export default function Application({ Component, pageProps, router }: AppProps) {
  useEffect(loadFonts, []);

  return (
    <Fragment>
      <Head>
        <title>Lucy in the Sky</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Fragment>
  );
}
