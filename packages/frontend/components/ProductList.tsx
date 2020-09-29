import { FC, memo } from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";

import { IProduct } from "@lucy/interfaces";
import { ProductListItem } from "./ProductListItem";
import { Loading } from "./Loading";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      padding: theme.spacing(4, 0),
    },
  }),
);

export type ProductListProps = {
  loading: boolean;
  products: IProduct[];
};

export const ProductList: FC<ProductListProps> = memo(({ loading, products }) => {
  const styles = useStyles();

  if (loading) return <Loading />;

  return (
    <Grid container spacing={3} className={styles.grid}>
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </Grid>
  );
});
