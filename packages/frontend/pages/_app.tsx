import { Fragment } from "react";
import Head from "next/head";

export default function Application({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}
