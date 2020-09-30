import { FC, memo, useMemo } from "react";

import { Button, Typography } from "antd";
import { classes } from "typestyle";
import { ShoppingCartOutlined } from "@ant-design/icons";

import * as styles from "./Cart.styles";

export type CartProps = {
  itemCount: number;
  className?: string | undefined;
};

export const Cart: FC<CartProps> = memo(({ itemCount, className }) => {
  const buttonClassName = useMemo(() => {
    return classes(styles.button, className);
  }, [className]);

  const text = useMemo(() => {
    return itemCount > 0 ? `Cart (${itemCount})` : "Cart";
  }, [itemCount]);

  return (
    <Button type="text" className={buttonClassName}>
      <Typography.Text className={styles.text}>{text}</Typography.Text>
      <ShoppingCartOutlined className={styles.icon} />
    </Button>
  );
});
