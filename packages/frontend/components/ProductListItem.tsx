import { FC, memo } from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

import { IProduct } from "@lucy/interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: "100%",
    },
    cardMedia: {
      height: 655,
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
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            alt={product.name}
            className={styles.cardMedia}
            component="img"
            image={product.image}
          />
          <CardContent>
            <Typography variant="body1" component="p">
              {product.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
});
