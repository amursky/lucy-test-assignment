import { FC, useContext } from "react";

import { BagContext } from "../../stores";
import { centsToDollars } from "../../utils";

export const ShoppingBag: FC = () => {
  const { state: bag } = useContext(BagContext);

  return (
    <div>
      {bag.items.map(item => (
        <div key={item.product.id}>
          <span style={{ marginRight: "32px" }}>{item.product.id}</span>
          <span style={{ marginRight: "32px" }}>{item.product.name}</span>
          <span style={{ marginRight: "32px" }}>{item.quantity}</span>
          <span style={{ marginRight: "32px" }}>{centsToDollars(item.totalPrice)}</span>
        </div>
      ))}
    </div>
  );
};
