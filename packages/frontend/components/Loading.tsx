import { FC, memo, useEffect, useState } from "react";
import { CircularProgress, createStyles, makeStyles, Theme } from "@material-ui/core";

const DEFAULT_TIMEOUT = 1000;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
);

export type LoadingProps = {
  timeout?: number;
};

export const Loading: FC<LoadingProps> = memo(({ timeout = DEFAULT_TIMEOUT }) => {
  /**
   * State
   */

  const [visible, setVisible] = useState<boolean>(false);

  /**
   * Side Effects
   */

  useEffect(() => {
    const timerId = setTimeout(() => setVisible(true), timeout);
    () => clearTimeout(timerId);
  }, [timeout]);

  /**
   * Render
   */

  const styles = useStyles();

  return visible ? <CircularProgress className={styles.root} /> : null;
});
