import { FC } from "react";

import { BagButton } from "../BagButton";
import * as styles from "./Header.styles";

export const Header: FC = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.children}>{children}</div>
    <BagButton count={1} />
  </div>
);
