import { FC, useMemo } from "react";
import { classes } from "typestyle";

import * as styles from "./Container.styles";

type ContainerProps = {
  className?: string | undefined;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const rootClassName = useMemo(() => {
    return classes(styles.container, className);
  }, [className]);

  return <div className={rootClassName}>{children}</div>;
};
