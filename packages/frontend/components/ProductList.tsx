import { FC, memo, useCallback } from "react";

import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { IProduct } from "@lucy/interfaces";
import { Pagination } from "@material-ui/lab";

import { ProductListItem } from "./ProductListItem";
import { Loading } from "./Loading";

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

export type ProductListProps = {
  loading: boolean;
  page: number;
  pageCount: number;
  products: IProduct[];
  onChangePage: (page: number) => unknown;
};

export const ProductList: FC<ProductListProps> = memo(
  ({ loading, page, pageCount, products, onChangePage }) => {
    const styles = useStyles();

    /**
     * Event Handlers
     */

    const handleChangePage = useCallback(
      (_, pageNumber: number) => {
        onChangePage(pageNumber);
      },
      [onChangePage],
    );

    /**
     * Render
     */

    const renderProductListItem = useCallback(
      (product: IProduct) => {
        return <ProductListItem key={product.id} product={product} />;
      },
      [products],
    );

    if (loading) return <Loading />;

    return (
      <Grid container spacing={3} className={styles.rootGrid}>
        <Grid item xs={12}>
          <Grid container spacing={3} xs={12}>
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
  },
);
