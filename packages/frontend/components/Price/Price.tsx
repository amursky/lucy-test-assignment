import { FC, Fragment, memo } from "react";
import { Typography } from "antd";

import * as styles from "./Price.styles";

export type PriceProps = {
  price: string;
  special?: string;
  className?: string;
};

export const Price: FC<PriceProps> = memo(({ price, special, className }) => (
  <div className={className}>
    <Typography.Text className={styles.price}>{price}</Typography.Text>
    {special && (
      <Typography.Text className={styles.special} type="danger" strong>
        {special}
      </Typography.Text>
    )}
  </div>
));
