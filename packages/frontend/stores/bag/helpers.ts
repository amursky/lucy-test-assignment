import { BagAddProductAction, BagRemoveProductAction, BagState } from "./types";

export function addProduct(state: BagState, action: BagAddProductAction): BagState {
  const itemIndex = state.items.findIndex(({ product }) => product.id === action.item.product.id);
  const updatedState: BagState = { ...state, itemCount: state.itemCount + 1 };

  // Product already exists, return current state
  if (itemIndex !== -1) return state;

  // Add product to shopping bag
  updatedState.items = [...state.items, action.item];

  return updatedState;
}

export function removeProduct(state: BagState, action: BagRemoveProductAction): BagState {
  const itemIndex = state.items.findIndex(({ product }) => product.id === action.item.product.id);
  const updatedState: BagState = { ...state, itemCount: state.itemCount - 1 };

  // Product was not found, return current state
  if (itemIndex === -1) return state;

  // Product was found, remove
  const itemsBefore = updatedState.items.slice(0, itemIndex);
  const itemsAfter = updatedState.items.slice(itemIndex + 1);
  updatedState.items = [...itemsBefore, ...itemsAfter];

  return updatedState;
}
