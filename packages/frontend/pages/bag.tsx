import { Fragment } from "react";
import { NextPage } from "next";
import { Typography } from "antd";

import { GoBackButton } from "../components";
import { PageHeader, ShoppingBag } from "../containers";

const HomePage: NextPage = () => (
  <Fragment>
    <PageHeader>
      <GoBackButton href="/products" text="Back to shopping" />
    </PageHeader>
    <Typography.Title level={1}>Shopping bag</Typography.Title>
    <ShoppingBag />
  </Fragment>
);

export default HomePage;
