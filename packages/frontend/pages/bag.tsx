import { Fragment } from "react";
import { NextPage } from "next";
import { Typography } from "antd";

import { GoBackButton, Header } from "../components";

const HomePage: NextPage = () => (
  <Fragment>
    <Header>
      <GoBackButton href="/products?page=1" text="Back to shopping" />
    </Header>
    <Typography.Title level={1}>Shopping bag</Typography.Title>
    Content...
  </Fragment>
);

export default HomePage;
