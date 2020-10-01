import { FC, useCallback, useContext, useRef } from "react";

import { Button, InputNumber, Space, Table, Typography } from "antd";
import { IProduct } from "@lucy/interfaces";

import { BagContext, BagItem } from "../../stores";
import { centsToDollars } from "../../utils";

export const ShoppingBag: FC = () => {
  const { state: bag, dispatch } = useContext(BagContext);

  const changeQuantity = useCallback(
    (item: BagItem, quantity: number) => {
      dispatch({ type: "BAG.CHANGE_QUANTITY", item, quantity });
    },
    [dispatch],
  );

  const deleteItem = useCallback(
    (item: BagItem) => dispatch({ type: "BAG.REMOVE_PRODUCT", item }),
    [dispatch],
  );

  const { current: columns } = useRef([
    {
      title: "Product name",
      dataIndex: "product",
      key: "productName",
      render: (product: IProduct) => (
        <Typography.Link href={`/products/${product.id}`}>{product.name}</Typography.Link>
      ),
    },
    {
      title: "Quantity",
      key: "quantity",
      render: (item: BagItem) => (
        <Space size="middle">
          <InputNumber
            min={1}
            defaultValue={item.quantity}
            onChange={value => changeQuantity(item, parseInt(`${value}`, 10))}
          />
        </Space>
      ),
    },
    {
      dataIndex: "totalPrice",
      key: "totalPrice",
      title: "Price",
      render: (price: number) => (
        <Space size="middle">
          <Typography.Text>{centsToDollars(price)}</Typography.Text>
        </Space>
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (item: BagItem) => (
        <Space size="middle">
          <Button type="link" onClick={() => deleteItem(item)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ]);

  return <Table columns={columns} dataSource={bag.items} />;
};
