import { createContext, FC, useReducer } from "react";

import { BagAction } from "./types";
import { initialState, reducer } from "./reducer";

export * from "./types";

export const BagContext = createContext({
  state: initialState,
  dispatch: (action: BagAction) => {},
});

export const BagProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <BagContext.Provider value={{ state, dispatch }}>{children}</BagContext.Provider>;
};
