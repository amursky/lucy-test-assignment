import { FC } from "react";

import { Cart } from "../Cart";
import * as styles from "./Header.styles";

export const Header: FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.children}>{children}</div>
      <Cart className={styles.cart} itemCount={3} />
    </div>
  );
};
