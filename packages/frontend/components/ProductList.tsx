import { FC, useCallback, useRef } from "react";

import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { IProduct } from "@lucy/interfaces";
import { motion, Variants } from "framer-motion";
import { Pagination } from "@material-ui/lab";

import { ProductListItem } from "./ProductListItem";

export type ProductListProps = {
  page: number;
  pageCount: number;
  products: IProduct[];
  onChangePage: (page: number) => unknown;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootGrid: {
      padding: theme.spacing(4, 0),
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      paddingTop: theme.spacing(4),
    },
  }),
);

export const ProductList: FC<ProductListProps> = ({ page, pageCount, products, onChangePage }) => {
  const styles = useStyles();

  const handleChangePage = useCallback(
    (_, pageNumber: number) => {
      onChangePage(pageNumber);
    },
    [onChangePage],
  );

  const renderProductListItem = useCallback(
    (product: IProduct) => (
      <Grid item xs={4} key={product.id}>
        <AnimationVariantsProvider>
          <ProductListItem product={product} />
        </AnimationVariantsProvider>
      </Grid>
    ),
    [products],
  );

  return (
    <Grid container spacing={3} className={styles.rootGrid}>
      <Grid item xs={12} component={AnimationProvider}>
        <Grid container spacing={3}>
          {products.map(renderProductListItem)}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Pagination
          className={styles.pagination}
          count={pageCount}
          page={page}
          onChange={handleChangePage}
        />
      </Grid>
    </Grid>
  );
};

const AnimationProvider: FC = ({ children }) => (
  <motion.div initial="exit" animate="enter" exit="exit">
    {children}
  </motion.div>
);

const AnimationVariantsProvider: FC = ({ children }) => {
  const { current: easing } = useRef<number[]>([0.175, 0.85, 0.42, 0.96]);
  const { current: variants } = useRef<Variants>({
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  });

  return <motion.div variants={variants}>{children}</motion.div>;
};
