import { IProduct } from "@lucy/interfaces";

export type BagState = {
  count: number;
  products: IProduct[];
};

export type BagAddProductAction = {
  type: "BAG.ADD_PRODUCT";
  product: IProduct;
};

export type BagRemoveProductAction = {
  type: "BAG.REMOVE_PRODUCT";
  product: IProduct;
};

export type BagResetAction = {
  type: "BAG.RESET";
};

export type BagAction = BagAddProductAction | BagRemoveProductAction | BagResetAction;
