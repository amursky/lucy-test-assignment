import { BagItem } from "../stores";
import { ServiceBase } from "./ServiceBase";

export type PlaceOrderResponse = {
  orderId: number;
};

export class CheckoutService extends ServiceBase {
  protected BASE_URL: string = "http://localhost:4000/checkout";

  public async placeOrder(items: BagItem[]) {
    const products = items.reduce(
      (products, { product: { id }, size }) => [...products, { id, size }],
      [],
    );

    return this.post<PlaceOrderResponse>("/placeOrder", JSON.stringify({ products }));
  }
}
