import { BagAction, BagState } from "./types";

export const initialState: BagState = {
  count: 1,
  products: [],
};

export const reducer = (state: BagState, action: BagAction): BagState => {
  switch (action.type) {
    case "BAG.ADD_PRODUCT":
      return {
        ...state,
        count: state.count + 1,
        products: [...state.products, action.product],
      };
    case "BAG.REMOVE_PRODUCT":
      return {
        ...state,
        count: state.count + 1,
        products: state.products.filter(({ id }) => id !== action.product.id),
      };
    case "BAG.RESET":
      return initialState;
    default:
      return state;
  }
};
