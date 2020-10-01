import { addProduct, removeProduct } from "./helpers";
import { BagAction, BagState } from "./types";

export const initialState: BagState = {
  itemCount: 0,
  items: [],
};

export const reducer = (state: BagState, action: BagAction): BagState => {
  switch (action.type) {
    case "BAG.ADD_PRODUCT":
      return addProduct(state, action);

    case "BAG.REMOVE_PRODUCT":
      return removeProduct(state, action);

    case "BAG.RESET":
      return initialState;

    default:
      return state;
  }
};
