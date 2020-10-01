import { IProduct } from "@lucy/interfaces";

export type BagItem = {
  product: IProduct;
  quantity: number;
  totalPrice: number;
};

export type BagState = {
  itemCount: number;
  items: BagItem[];
};

export type BagAddProductAction = {
  type: "BAG.ADD_PRODUCT";
  item: BagItem;
};

export type BagRemoveProductAction = {
  type: "BAG.REMOVE_PRODUCT";
  item: BagItem;
};

export type BagResetAction = {
  type: "BAG.RESET";
};

export type BagAction = BagAddProductAction | BagRemoveProductAction | BagResetAction;
