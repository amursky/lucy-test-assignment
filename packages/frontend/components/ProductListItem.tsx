import { FC, memo } from "react";
import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from "@material-ui/core";

import { IProduct } from "@lucy/interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: "100%",
    },
    image: {
      width: "100%",
    },
    content: {
      padding: theme.spacing(2, 3),
    },
  }),
);

export type ProductListItemProps = {
  product: IProduct;
};

export const ProductListItem: FC<ProductListItemProps> = memo(({ product }) => {
  const styles = useStyles();

  return (
    <Grid item xs={4}>
      <Paper className={styles.paper}>
        <img className={styles.image} src={product.image} alt={product.name} />
        <div className={styles.content}>
          <Typography variant="h5">{product.name}</Typography>
        </div>
      </Paper>
    </Grid>
  );
});
