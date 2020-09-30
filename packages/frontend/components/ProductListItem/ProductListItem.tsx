import { FC, useCallback } from "react";

import { Card } from "antd";
import { IProduct } from "@lucy/interfaces";

export type ProductListItemProps = {
  product: IProduct;
  onClick?: (product: IProduct) => unknown;
};

export const ProductListItem: FC<ProductListItemProps> = ({ product, onClick }) => {
  const handleClick = useCallback(() => onClick(product), [product, onClick]);

  return (
    <Card hoverable cover={<img alt={product.name} src={product.image} />} onClick={handleClick}>
      <Card.Meta title={product.name} />
    </Card>
  );
};
