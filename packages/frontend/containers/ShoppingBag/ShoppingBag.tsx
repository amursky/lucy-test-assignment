import { FC, useCallback, useContext, useMemo, useRef } from "react";
import Link from "next/link";

import { Button, Col, message, Row, Table, Typography } from "antd";
import { IProduct } from "@lucy/interfaces";

import { BagContext, BagItem } from "../../stores";
import { centsToDollars } from "../../utils";
import * as styles from "./ShoppingBag.styles";
import { CheckoutService } from "../../services";

export const ShoppingBag: FC = () => {
  const { state: bag, dispatch } = useContext(BagContext);

  /**
   * Event Handlers
   */

  const deleteItem = useCallback(
    (item: BagItem) => dispatch({ type: "BAG.REMOVE_PRODUCT", item }),
    [dispatch],
  );

  const checkout = useCallback(() => {
    new CheckoutService()
      .placeOrder(bag.items)
      .then(({ orderId }) => {
        dispatch({ type: "BAG.RESET" });
        message.success(`Order #${orderId} is processed`, 5);
      })
      .catch(() => {
        message.success("Failed to process order, try again", 5);
      });
  }, [bag]);

  /**
   * Render
   */

  const { current: columns } = useRef([
    {
      title: "Product name",
      key: "productName",
      dataIndex: "product",
      render: (product: IProduct) => (
        <Link href={`/products/${product.id}`}>
          <Typography.Link>{product.name}</Typography.Link>
        </Link>
      ),
    },
    {
      title: "Size",
      key: "size",
      render: (item: BagItem) => <Typography.Text>{item.size}</Typography.Text>,
    },
    {
      title: "Price",
      key: "totalPrice",
      dataIndex: "product",
      render: (product: IProduct) => <Typography.Text>{product.special}</Typography.Text>,
    },
    {
      title: "",
      key: "actions",
      render: (item: BagItem) => (
        <Typography.Link onClick={() => deleteItem(item)}>Delete</Typography.Link>
      ),
    },
  ]);

  const totalPrice = useMemo(() => {
    return bag.items.reduce((price, { product }) => price + product.specialInCents, 0);
  }, [bag.items]);

  return (
    <Row>
      <Col span={24}>
        <Table className={styles.table} columns={columns} dataSource={bag.items} />
      </Col>
      <Col span={20} />
      <Col span={4}>
        <Row className={styles.totalPriceRow}>
          <Typography.Text strong>Total: {centsToDollars(totalPrice)}</Typography.Text>
        </Row>
        <Row className={styles.buyRow}>
          <Button
            type="primary"
            className={styles.buyButton}
            disabled={totalPrice === 0}
            onClick={checkout}
          >
            Checkout
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

// [POST] /checkout/placeOrder

// Request body:
// {
//   products: [
//     { id: 123, size: "Small" },
//     { id: 456, size: "Medium" },
//     { id: 789, size: "Large" },
//   ]
// }

// Response bdoy:
// { orderId: number; }
