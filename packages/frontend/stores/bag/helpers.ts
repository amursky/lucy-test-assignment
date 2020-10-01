import { BagAddProductAction, BagItem, BagRemoveProductAction, BagState } from "./types";

export function addProduct(state: BagState, action: BagAddProductAction): BagState {
  const updatedState: BagState = { ...state, itemCount: state.itemCount + 1 };
  const itemIndex = state.items.findIndex(({ product }) => product.id === action.item.product.id);

  if (itemIndex !== -1) {
    // Item already exsists, increase quantity
    updatedState.items[itemIndex].quantity += 1;

    // Update total price
    const { quantity, product } = updatedState.items[itemIndex];
    updatedState.items[itemIndex].totalPrice = product.specialInCents * quantity;
  } else {
    // Item not already exists, add
    const item: BagItem = { ...action.item, totalPrice: action.item.product.specialInCents };
    updatedState.items = [...state.items, item];
  }

  return updatedState;
}

export function removeProduct(state: BagState, action: BagRemoveProductAction): BagState {
  const updatedState: BagState = { ...state, itemCount: state.itemCount - 1 };
  const itemIndex = state.items.findIndex(({ product }) => product.id === action.item.product.id);

  if (itemIndex === -1) {
    // Item for deletion was not found, return current state
    return state;
  } else {
    // Item was found, decrease quantity or remove
    if (updatedState.items[itemIndex].quantity > 1) {
      // Item quantity is greather than 1, decrease
      updatedState.items[itemIndex].quantity -= 1;

      // Update price
      const { quantity, product } = updatedState.items[itemIndex];
      updatedState.items[itemIndex].totalPrice = product.specialInCents * quantity;
    } else {
      // Item quantity is 1, remove completely
      const itemsBefore = updatedState.items.slice(0, itemIndex);
      const itemsAfter = updatedState.items.slice(itemIndex + 1);
      updatedState.items = [...itemsBefore, ...itemsAfter];
    }
  }

  return updatedState;
}
