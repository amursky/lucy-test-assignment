import {
  BagAddProductAction,
  BagChangeQuantityAction,
  BagRemoveProductAction,
  BagState,
} from "./types";

export function addProduct(state: BagState, action: BagAddProductAction): BagState {
  const updatedState: BagState = { ...state, itemCount: state.itemCount + 1 };
  const itemIndex = state.items.findIndex(({ product }) => product.id === action.item.product.id);

  // Item was not found, add
  if (itemIndex === -1) {
    updatedState.items = [
      ...state.items,
      { ...action.item, totalPrice: action.item.product.specialInCents },
    ];
    return updatedState;
  }

  // Increase quantity and update total price
  updatedState.items[itemIndex].quantity += 1;

  const { quantity, product } = updatedState.items[itemIndex];
  updatedState.items[itemIndex].totalPrice = product.specialInCents * quantity;

  return updatedState;
}

export function removeProduct(state: BagState, action: BagRemoveProductAction): BagState {
  const updatedState: BagState = { ...state, itemCount: state.itemCount - 1 };
  const itemIndex = state.items.findIndex(({ product }) => product.id === action.item.product.id);

  // Item was not found, return current state
  if (itemIndex === -1) return state;

  // Item was found, remove
  const itemsBefore = updatedState.items.slice(0, itemIndex);
  const itemsAfter = updatedState.items.slice(itemIndex + 1);
  updatedState.items = [...itemsBefore, ...itemsAfter];

  return updatedState;
}

export function changeQuantity(state: BagState, action: BagChangeQuantityAction): BagState {
  const updatedState: BagState = { ...state };
  const itemIndex = state.items.findIndex(({ product }) => product.id === action.item.product.id);

  // Item was not found, return current state
  if (itemIndex === -1) return state;

  // Update item quantity and update total price
  updatedState.items[itemIndex].quantity = action.quantity;

  const { quantity, product } = updatedState.items[itemIndex];
  updatedState.items[itemIndex].totalPrice = product.specialInCents * quantity;

  return updatedState;
}
