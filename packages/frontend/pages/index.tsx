import { Fragment } from "react";
import { NextPage } from "next";
import { UrlObject } from "url";
// import Link from "next/link";

const HomePage: NextPage = () => (
  <Fragment>
    {/* <Link href={PRODUCTS_PAGE_ROUTE}> */}
    <a href="/products?page=1">Products</a>
    {/* </Link> */}
  </Fragment>
);

const PRODUCTS_PAGE_ROUTE: UrlObject = {
  pathname: "/products",
  query: { page: "1" },
} as const;

export default HomePage;
