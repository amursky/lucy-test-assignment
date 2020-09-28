import { Fragment } from "react";
import { NextPage } from "next";
import { UrlObject } from "url";
import Link from "next/link";

const HomePage: NextPage = () => (
  <Fragment>
    <main>
      <h1>Welcome to Next.js!</h1>
      <Link href={PRODUCTS_PAGE_ROUTE}>
        <a>Products</a>
      </Link>
    </main>
  </Fragment>
);

const PRODUCTS_PAGE_ROUTE: UrlObject = {
  pathname: "/products",
  query: { page: "1" },
} as const;

export default HomePage;
