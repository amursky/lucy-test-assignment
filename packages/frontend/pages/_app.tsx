import { Fragment } from "react";

import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import Head from "next/head";

import "antd/dist/antd.min.css";

const Application = ({ Component, pageProps, router }: AppProps) => (
  <Fragment>
    <Head>
      <title>Lucy in the Sky</title>
    </Head>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  </Fragment>
);

export default Application;
