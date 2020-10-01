import { FC, useContext } from "react";

import { BagButton } from "../../components";
import { BagContext } from "../../stores";

import * as styles from "./PageHeader.styles";

export const PageHeader: FC = ({ children }) => {
  const { state: bag } = useContext(BagContext);

  return (
    <div className={styles.root}>
      <div className={styles.children}>{children}</div>
      <BagButton count={bag.count} />
    </div>
  );
};
