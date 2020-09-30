import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { Layout } from "antd";
import Head from "next/head";

import "antd/dist/antd.min.css";

const Application = ({ Component, pageProps, router }: AppProps) => (
  <Layout style={{ backgroundColor: "white" }}>
    <Head>
      <title>Lucy in the Sky</title>
    </Head>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  </Layout>
);

export default Application;
