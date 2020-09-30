import { FC, memo } from "react";
import Link from "next/link";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Typography } from "antd";

import * as styles from "./GoBackButton.styles";

export type GoBackButtonProps = {
  href: string;
  text: string;
};

export const GoBackButton: FC<GoBackButtonProps> = memo(({ href, text }) => (
  <Link href={href}>
    <a className={styles.root}>
      <Typography.Text className={styles.text} strong>
        <ArrowLeftOutlined className={styles.icon} />
        {text}
      </Typography.Text>
    </a>
  </Link>
));
