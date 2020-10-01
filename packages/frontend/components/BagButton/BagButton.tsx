import { FC, memo, useMemo } from "react";

import { Badge, Typography } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import Link from "next/link";

import * as styles from "./BagButton.styles";

export type CartProps = {
  count: number;
};

export const BagButton: FC<CartProps> = memo(({ count }) => {
  const badgeOffset = useMemo<[number, number]>(() => [4, -4], []);
  return (
    <Link href="/bag">
      <a>
        <Badge size="small" count={count} offset={badgeOffset}>
          <Typography.Text className={styles.text}>
            Shopping bag
            <ShoppingOutlined className={styles.icon} />
          </Typography.Text>
        </Badge>
      </a>
    </Link>
  );
});
