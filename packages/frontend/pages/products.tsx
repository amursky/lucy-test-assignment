import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Container, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { NextPage } from "next";
import { Pagination } from "@material-ui/lab";
import { useRouter } from "next/router";
import VisuallyHidden from "@reach/visually-hidden";

import { IListResponse, IProduct } from "@lucy/interfaces";
import { ProductList } from "../components";
import { ProductService } from "../services";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(4, 0),
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(4, "auto", 0),
    },
  }),
);

const ProductListPage: NextPage = () => {
  /**
   * State
   */

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [response, setResponse] = useState<IListResponse<IProduct[]> | null>(null);

  /**
   * Side Effects
   */

  // Parse `page` property of the query
  useEffect(() => {
    if (router.query.page === undefined) return;
    const pageNumber = parseInt(`${router.query.page}`, 10);
    if (isNaN(pageNumber)) router.push("/products?page=1");
    else setPage(pageNumber);
  }, [router.query.page]);

  // Validate page number
  useEffect(() => {
    if (response === null) return;
    if (page > response.pageCount) {
      router.push(`/products?page=${response.pageCount}`);
    }
  }, [page, response]);

  // Fetch product list on page number change
  useEffect(() => {
    setLoading(true);
    new ProductService()
      .getProducts(page)
      .then(setResponse)
      .finally(() => setLoading(false));
  }, [page]);

  /**
   * Event Handlers
   */

  const handleChangePage = useCallback(
    (event: ChangeEvent<unknown>, value: number) => {
      router.push(`/products?page=${value}`);
    },
    [router],
  );

  /**
   * Render
   */

  const styles = useStyles();

  const products = useMemo<IProduct[]>(() => {
    return response ? response.data : [];
  }, [response?.data]);

  const pageCount = useMemo<number>(() => {
    return response ? response.pageCount : 1;
  }, [response?.pageCount]);

  return (
    <Container className={styles.container}>
      <VisuallyHidden>
        <h1>Products</h1>
      </VisuallyHidden>
      <ProductList loading={loading} products={products} />
      <Pagination
        className={styles.pagination}
        count={pageCount}
        onChange={handleChangePage}
        page={page}
      />
    </Container>
  );
};

export default ProductListPage;
