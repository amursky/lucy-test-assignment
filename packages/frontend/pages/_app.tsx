import "antd/dist/antd.min.css";

import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { Layout } from "antd";
import Head from "next/head";

import { BagProvider } from "../stores";
import { Container } from "../components";

const Application = ({ Component, pageProps, router }: AppProps) => (
  <Layout style={{ backgroundColor: "white" }}>
    <Head>
      <title>Lucy in the Sky</title>
    </Head>
    <AnimatePresence exitBeforeEnter>
      <Container>
        <BagProvider>
          <Component {...pageProps} key={router.route} />
        </BagProvider>
      </Container>
    </AnimatePresence>
  </Layout>
);

export default Application;
