import { Fragment } from "react";
import { NextPage } from "next";

const HomePage: NextPage = () => (
  <Fragment>
    <a href="/products?page=1">Products</a>
  </Fragment>
);

export default HomePage;
