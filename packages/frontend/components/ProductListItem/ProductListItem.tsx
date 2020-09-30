import { FC, memo } from "react";

import { Card } from "antd";
import { IProduct } from "@lucy/interfaces";

import * as styles from "./ProductListItem.styles";

export type ProductListItemProps = {
  product: IProduct;
};

export const ProductListItem: FC<ProductListItemProps> = memo(({ product }) => (
  <Card hoverable className={styles.card} cover={<img alt={product.name} src={product.image} />}>
    <Card.Meta className={styles.cardMedia} title={product.name} />
  </Card>
));
