import { ArrowLeftOutlined } from "@ant-design/icons";
import { FC, memo } from "react";
import { Typography } from "antd";
import Link from "next/link";

import * as styles from "./GoBackButton.styles";

export type GoBackButtonProps = {
  href: string;
  text: string;
};

export const GoBackButton: FC<GoBackButtonProps> = memo(({ href, text }) => (
  <Link href={href}>
    <a>
      <Typography.Text className={styles.text}>
        <ArrowLeftOutlined className={styles.icon} />
        {text}
      </Typography.Text>
    </a>
  </Link>
));
