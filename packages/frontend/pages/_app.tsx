import { AppProps } from "next/app";
import { Fragment, useEffect } from "react";
import Head from "next/head";

import "../styles/fonts.css";
import { loadFonts } from "../styles/fonts";

export default function Application({ Component, pageProps }: AppProps) {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>«Lucy in the Sky» test assignment</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
