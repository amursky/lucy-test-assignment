import { FC, memo } from "react";

import { Card } from "antd";
import { IProduct } from "@lucy/interfaces";

export type ProductListItemProps = {
  product: IProduct;
};

export const ProductListItem: FC<ProductListItemProps> = memo(({ product }) => (
  <Card hoverable cover={<img alt={product.name} src={product.image} />}>
    <Card.Meta title={product.name} />
  </Card>
));
