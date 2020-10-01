import { IProduct, ProductSize } from "@lucy/interfaces";

export type BagItem = {
  product: IProduct;
  size: ProductSize;
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
