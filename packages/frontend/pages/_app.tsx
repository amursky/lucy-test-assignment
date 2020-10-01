import "antd/dist/antd.min.css";

import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { Layout } from "antd";
import Head from "next/head";

import { Container } from "../components";

const Application = ({ Component, pageProps, router }: AppProps) => (
  <Layout style={{ backgroundColor: "white" }}>
    <Head>
      <title>Lucy in the Sky</title>
    </Head>
    <AnimatePresence exitBeforeEnter>
      <Container>
        <Component {...pageProps} key={router.route} />
      </Container>
    </AnimatePresence>
  </Layout>
);

export default Application;
